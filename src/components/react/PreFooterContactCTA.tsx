import { useI18n } from './LanguageProvider';
import { contactPanelConfig } from '../../config/contact';
import { withBasePath } from '../../lib/routing';
import { FacebookIcon, GoogleBusinessIcon, InstagramIcon, MapPinIcon, PhoneIcon, PrimaryButton, SecondaryButton } from './ui';

const socialIconMap = {
	facebook: FacebookIcon,
	instagram: InstagramIcon,
	googleBusiness: GoogleBusinessIcon
} as const;

export const PreFooterContactCTA = () => {
	const { t } = useI18n();
	const phoneRaw = t('brand.phoneRaw');
	const phoneDisplay = t('brand.phoneDisplay');
	const leftPoints = t('preFooter.leftPoints');

	return (
		<section className="section-shell py-14">
			<div className="prefooter-cta-grid">
				<div className="surface-dark relative flex h-full flex-col overflow-hidden p-8 md:p-10">
					<div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
					<div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl" />
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-100">{t('preFooter.leftEyebrow')}</p>
					<h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{t('home.finalCtaTitle')}</h2>
					<p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">{t('home.finalCtaCopy')}</p>

					<div className="mt-5 grid gap-2 sm:grid-cols-2">
						{leftPoints.map((point) => (
							<p key={point} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100">
								{point}
							</p>
						))}
					</div>

					<div className="mt-7 flex flex-wrap gap-3">
						<PrimaryButton href={`tel:${phoneRaw}`}>{t('actions.callNow')}</PrimaryButton>
						<SecondaryButton href={withBasePath('/contact')}>{t('actions.scheduleService')}</SecondaryButton>
					</div>
				</div>

				<aside className="prefooter-contact-card" aria-label={t('preFooter.panelAriaLabel')}>
					<p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">{t('preFooter.rightEyebrow')}</p>
					<p className="mt-2 text-xl font-extrabold text-slate-950">{t('preFooter.rightTitle')}</p>
					<p className="mt-1 text-sm text-slate-600">{t('preFooter.rightSubtitle')}</p>

					<div className="mt-6 rounded-2xl border border-brand-200/70 bg-brand-50/70 p-4">
						<p className="text-xs font-semibold uppercase tracking-wider text-brand-700">{t('preFooter.phoneLabel')}</p>
						<a href={`tel:${phoneRaw}`} className="mt-2 inline-flex items-center gap-2 text-2xl font-extrabold text-brand-900 hover:text-brand-700">
							<PhoneIcon />
							{phoneDisplay}
						</a>
					</div>

					<div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
						<div className="inline-flex items-center gap-2 text-slate-700">
							<MapPinIcon />
							<p className="text-xs font-semibold uppercase tracking-wider">{t('preFooter.locationLabel')}</p>
						</div>
						<p className="mt-2 text-sm font-semibold text-slate-900">{t('preFooter.locationValue')}</p>
						<a href={withBasePath(contactPanelConfig.locationHref)} className="mt-2 inline-block text-sm font-semibold text-brand-700 hover:text-brand-500">
							{t('preFooter.locationLink')}
						</a>
					</div>

					<div className="mt-4">
						<p className="text-xs font-semibold uppercase tracking-wider text-slate-600">{t('preFooter.socialLabel')}</p>
						<div className="mt-2 grid gap-2 sm:grid-cols-3">
							{contactPanelConfig.socials.map((social) => {
								const Icon = socialIconMap[social.key];
								return (
									<a
										key={social.key}
										href={social.href}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
										aria-label={t(`preFooter.socials.${social.key}` as const)}
									>
										<Icon />
										<span>{t(`preFooter.socials.${social.key}` as const)}</span>
									</a>
								);
							})}
						</div>
					</div>

					<p className="mt-4 text-xs text-slate-500">{t('preFooter.emailHint')} {t('brand.email')}</p>
				</aside>
			</div>
		</section>
	);
};
