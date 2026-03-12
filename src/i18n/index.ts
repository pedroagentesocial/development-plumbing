import en from './en.json';
import es from './es.json';

export type Locale = 'en' | 'es';
type Dictionary = typeof en;
type Primitive = string | number | boolean | null;
type ArrayLikeValue = unknown[];

type DotPath<T> = T extends Primitive | ArrayLikeValue
	? never
	: {
			[K in keyof T & string]: T[K] extends Primitive | ArrayLikeValue ? K : K | `${K}.${DotPath<T[K]>}`;
		}[keyof T & string];

type PathValue<T, P extends string> = P extends `${infer Head}.${infer Rest}`
	? Head extends keyof T
		? PathValue<T[Head], Rest>
		: never
	: P extends keyof T
		? T[P]
		: never;

export type I18nKey = DotPath<Dictionary>;
export type I18nValue<K extends I18nKey> = PathValue<Dictionary, K>;

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getInitialLocale = (): Locale => {
	if (typeof window === 'undefined') {
		return 'en';
	}
	const stored = window.localStorage.getItem('site-locale');
	if (stored === 'en' || stored === 'es') {
		return stored;
	}
	return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};

export const saveLocale = (locale: Locale) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('site-locale', locale);
	}
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null;

export const tPath = <K extends I18nKey>(dictionary: Dictionary, path: K): I18nValue<K> => {
	const parts = path.split('.');
	let value: unknown = dictionary;
	for (const part of parts) {
		if (!isRecord(value) || !(part in value)) {
			if (typeof window !== 'undefined') {
				console.warn(`Missing i18n key: ${path}`);
			}
			return path as unknown as I18nValue<K>;
		}
		value = value[part];
	}
	return value as I18nValue<K>;
};

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };
