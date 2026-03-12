import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getDictionary, getInitialLocale, saveLocale, tPath, type Dictionary, type I18nKey, type I18nValue, type Locale } from '../../i18n';

type I18nContext = {
	locale: Locale;
	setLocale: (locale: Locale) => void;
	t: <K extends I18nKey>(path: K) => I18nValue<K>;
	dictionary: Dictionary;
};

const LanguageContext = createContext<I18nContext | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [locale, setLocaleState] = useState<Locale>('en');

	useEffect(() => {
		setLocaleState(getInitialLocale());
	}, []);

	const setLocale = (nextLocale: Locale) => {
		setLocaleState(nextLocale);
		saveLocale(nextLocale);
	};

	const dictionary = useMemo(() => getDictionary(locale), [locale]);

	const value: I18nContext = useMemo(
		() => ({
			locale,
			setLocale,
			dictionary,
			t: <K extends I18nKey>(path: K) => tPath(dictionary, path)
		}),
		[dictionary, locale]
	);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useI18n must be used within LanguageProvider');
	}
	return context;
};
