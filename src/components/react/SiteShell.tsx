import type { ReactNode } from 'react';
import { LanguageProvider, useI18n } from './LanguageProvider';
import { PreFooterContactCTA } from './PreFooterContactCTA';
import { withBasePath } from '../../lib/routing';
import { ClockBoltIcon, LicenseIcon, PhoneIcon, PrimaryButton, SecondaryButton, ZapIcon } from './ui';

const navItems = [
	{ key: 'home', href: '/' },
	{ key: 'services', href: '/services' },
	{ key: 'emergency', href: '/emergency-plumbing' },
	{ key: 'areas', href: '/service-areas' },
	{ key: 'reviews', href: '/reviews' },
	{ key: 'about', href: '/about' },
	{ key: 'contact', href: '/contact' }
] as const;

const ShellContent = ({ children }: { children: ReactNode }) => {
	const { locale, setLocale, t } = useI18n();
	const phoneDisplay = t('brand.phoneDisplay');
	const phoneRaw = t('brand.phoneRaw');
	const whatsapp = t('brand.whatsapp');
	const trustBar = t('trustBar');
	const serviceCards = t('servicesList');
	const footerCities = t('areasPage.cities').slice(0, 6);

	return (
		<div className="min-h-screen bg-slate-50">
			<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
				<div className="section-shell py-3">
					<div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-[0_8px_28px_rgba(2,24,57,0.08)] md:px-4">
						<div className="flex items-center justify-between gap-3">
						<a href={withBasePath('/')} className="min-w-0">
							<p className="truncate text-base font-extrabold text-brand-700 md:text-lg">{t('brand.name')}</p>
							<p className="truncate text-[11px] font-medium text-slate-500 md:text-xs">{t('brand.tagline')}</p>
						</a>
						<div className="hidden items-center gap-1 xl:flex">
							{navItems.map((item) => (
								<a
									key={item.key}
									href={withBasePath(item.href)}
									className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand-600"
								>
									{t(`nav.${item.key}`)}
								</a>
							))}
						</div>
						<div className="flex items-center gap-2">
							<a
								href={`tel:${phoneRaw}`}
								className="hidden items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 lg:inline-flex"
							>
								<PhoneIcon />
								{phoneDisplay}
							</a>
							<button
								type="button"
								onClick={() => setLocale(locale === 'en' ? 'es' : 'en')}
								className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-500 hover:text-brand-600"
								aria-label={t('actions.toggleLanguageAria')}
							>
								{t('actions.switchLanguage')}
							</button>
							<PrimaryButton href={`tel:${phoneRaw}`}>{t('actions.callNow')}</PrimaryButton>
						</div>
					</div>
						<div className="mt-2 flex gap-2 overflow-x-auto pb-1 xl:hidden">
							{navItems.map((item) => (
								<a
									key={item.key}
									href={withBasePath(item.href)}
									className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-600"
								>
									{t(`nav.${item.key}`)}
								</a>
							))}
						</div>
					</div>
				</div>
			</header>

			<div className="border-b border-slate-200 bg-slate-950 text-white">
				<div className="section-shell flex flex-wrap items-center gap-2 py-2 text-xs font-semibold sm:text-sm">
					{trustBar.map((item) => (
						<span key={item} className="rounded-full border border-white/20 bg-white/5 px-3 py-1">
							{item}
						</span>
					))}
					<span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1">
						<LicenseIcon />
						{t('badges.licensed')}
					</span>
					<span className="inline-flex items-center gap-1 rounded-full border border-sky-300/30 bg-sky-400/10 px-3 py-1">
						<LicenseIcon />
						{t('badges.insured')}
					</span>
					<span className="inline-flex items-center gap-1 rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1">
						<ClockBoltIcon />
						{t('badges.sameDayService')}
					</span>
					<span className="inline-flex items-center gap-1 rounded-full border border-rose-300/30 bg-rose-400/10 px-3 py-1">
						<ZapIcon />
						{t('badges.emergency247')}
					</span>
				</div>
			</div>

			<main>{children}</main>
			<PreFooterContactCTA />

			<footer className="mt-16 border-t border-slate-200 bg-slate-950 text-white">
				<div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
					<div>
						<p className="text-lg font-extrabold text-white">{t('brand.name')}</p>
						<p className="mt-2 text-sm text-slate-300">{t('brand.tagline')}</p>
						<p className="mt-3 text-sm text-slate-300">{t('brand.license')}</p>
						<p className="mt-1 text-sm text-slate-300">{t('brand.hours')}</p>
						<div className="mt-4 flex flex-wrap gap-2">
							<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">{t('badges.utahLocal')}</span>
							<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">{t('badges.residential')}</span>
							<span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold">{t('badges.commercial')}</span>
						</div>
					</div>
					<div>
						<p className="text-sm font-semibold text-white">{t('footer.quickLinks')}</p>
						<div className="mt-3 grid gap-2 text-sm">
							{navItems.map((item) => (
								<a key={item.key} href={withBasePath(item.href)} className="text-slate-300 transition hover:text-white">
									{t(`nav.${item.key}`)}
								</a>
							))}
						</div>
					</div>
					<div>
						<p className="text-sm font-semibold text-white">{t('footer.serviceAreas')}</p>
						<div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-300">
							{footerCities.map((city) => (
								<p key={city}>{city}</p>
							))}
						</div>
					</div>
					<div>
						<p className="text-sm font-semibold text-white">{t('footer.contact')}</p>
						<p className="mt-3 text-sm text-slate-300">{t('brand.address')}</p>
						<a href={`tel:${phoneRaw}`} className="mt-1 block text-sm font-semibold text-white hover:text-accent-500">
							{phoneDisplay}
						</a>
						<p className="mt-1 text-sm text-slate-300">{t('brand.email')}</p>
						<div className="mt-4 flex gap-3">
							<PrimaryButton href={`tel:${phoneRaw}`}>{t('actions.callNow')}</PrimaryButton>
							<SecondaryButton href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}>
								{t('actions.sendMessage')}
							</SecondaryButton>
						</div>
					</div>
				</div>
				<div className="section-shell mb-8 rounded-3xl border border-white/15 bg-white/5 p-5">
					<p className="text-sm font-semibold text-white">{t('labels.popularServices')}</p>
					<div className="mt-3 flex flex-wrap gap-2">
						{serviceCards.map((service) => (
							<a
								key={service.href}
								href={withBasePath(service.href)}
								className="rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-white hover:text-white"
							>
								{service.title}
							</a>
						))}
					</div>
				</div>
				<div className="border-t border-white/10">
					<div className="section-shell py-4 text-center text-xs text-slate-400">{t('footer.copyright')}</div>
				</div>
			</footer>

			<div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
				<div className="mx-auto flex max-w-sm gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-[0_14px_40px_rgba(2,24,57,0.2)] backdrop-blur">
					<PrimaryButton href={`tel:${phoneRaw}`}>{t('actions.callNow')}</PrimaryButton>
					<SecondaryButton href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}>
						{t('actions.sendMessage')}
					</SecondaryButton>
				</div>
			</div>
		</div>
	);
};

export const SiteShell = ({ children }: { children: ReactNode }) => (
	<LanguageProvider>
		<ShellContent>{children}</ShellContent>
	</LanguageProvider>
);
