import { SiteShell } from '../SiteShell';
import { ContactForm, ServicesGrid } from '../blocks';
import { useI18n } from '../LanguageProvider';
import { ReviewsMarquee } from '../ReviewsMarquee';
import { PrimaryButton, SecondaryButton } from '../ui';
import { withBasePath } from '../../../lib/routing';

type ServiceKey = 'emergency' | 'drain' | 'waterHeater' | 'leak' | 'sewer' | 'commercial';
const toCitySlug = (city: string) => city.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-');

const ServiceTemplate = ({ serviceKey }: { serviceKey: ServiceKey }) => {
	const { t } = useI18n();
	const data = t(`servicePages.${serviceKey}` as const);
	const howItWorks = t('home.howItWorks');

	return (
		<section className="section-shell py-14">
			<div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<p className="eyebrow">{t('brand.tagline')}</p>
					<h1 className="h1 mt-3">{data.title}</h1>
					<p className="muted mt-4 max-w-2xl text-lg">{data.subtitle}</p>
					<div className="mt-4 flex flex-wrap gap-2">
						<span className="chip">{t('badges.licensed')}</span>
						<span className="chip">{t('badges.insured')}</span>
						<span className="chip">{t('badges.sameDayScheduling')}</span>
					</div>
					<div className="mt-5 grid gap-3">
						{data.benefits.map((benefit) => (
							<p key={benefit} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
								{benefit}
							</p>
						))}
					</div>
					<div className="mt-6 flex flex-wrap gap-3">
						<PrimaryButton href={`tel:${t('brand.phoneRaw')}`}>{t('actions.callNow')}</PrimaryButton>
						<SecondaryButton href={withBasePath('/contact')}>{t('actions.scheduleService')}</SecondaryButton>
					</div>
				</div>
				<div className="space-y-3">
					<ContactForm />
					<div className="card bg-brand-900 p-5 text-white">
						<p className="text-xs font-bold uppercase tracking-wider text-brand-100">{t('servicePages.urgentBoxTitle')}</p>
						<p className="mt-2 text-sm text-slate-100">{t('servicePages.urgentBoxCopy')}</p>
						<div className="mt-4">
							<PrimaryButton href={`tel:${t('brand.phoneRaw')}`}>{t('actions.callNow')}</PrimaryButton>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12 grid gap-4 md:grid-cols-3">
				{howItWorks.map((step, index) => (
					<div
						key={step.title}
						className="card transition motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(2,24,57,0.15)] motion-reduce:transform-none"
					>
						<p className="text-xs font-bold uppercase tracking-wider text-brand-600">{t('labels.step')} 0{index + 1}</p>
						<h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
						<p className="mt-2 text-sm text-slate-600">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

const ServicesContent = () => {
	const { t } = useI18n();
	return (
		<section className="section-shell py-14">
			<p className="eyebrow">{t('brand.tagline')}</p>
			<h1 className="h1 mt-3">{t('servicesPage.title')}</h1>
			<p className="muted mt-4 max-w-3xl text-lg">{t('servicesPage.subtitle')}</p>
			<div className="mt-8">
				<ServicesGrid />
			</div>
		</section>
	);
};

export const ServicesPage = () => (
	<SiteShell>
		<ServicesContent />
	</SiteShell>
);

export const EmergencyPage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="emergency" />
	</SiteShell>
);

export const DrainCleaningPage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="drain" />
	</SiteShell>
);

export const WaterHeaterPage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="waterHeater" />
	</SiteShell>
);

export const LeakDetectionPage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="leak" />
	</SiteShell>
);

export const SewerLinePage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="sewer" />
	</SiteShell>
);

export const CommercialPlumbingPage = () => (
	<SiteShell>
		<ServiceTemplate serviceKey="commercial" />
	</SiteShell>
);

const AboutContent = () => {
	const { t } = useI18n();
	return (
		<section className="section-shell py-14">
			<p className="eyebrow">{t('brand.tagline')}</p>
			<h1 className="h1 mt-3">{t('aboutPage.title')}</h1>
			<p className="muted mt-4 max-w-3xl text-lg">{t('aboutPage.lead')}</p>
			<div className="mt-8 grid gap-4 md:grid-cols-3">
				{t('aboutPage.points').map((point) => (
					<div key={point} className="card text-sm text-slate-700">
						{point}
					</div>
				))}
			</div>
		</section>
	);
};

export const AboutPage = () => (
	<SiteShell>
		<AboutContent />
	</SiteShell>
);

const ServiceAreasContent = () => {
	const { t } = useI18n();
	const cities = t('areasPage.cities');
	return (
		<section className="section-shell py-14">
			<p className="eyebrow">{t('footer.serviceAreas')}</p>
			<h1 className="h1 mt-3">{t('areasPage.title')}</h1>
			<p className="muted mt-4 max-w-3xl text-lg">{t('areasPage.subtitle')}</p>
			<h2 className="mt-8 text-2xl font-bold text-slate-900">{t('areasPage.dispatchHeading')}</h2>
			<ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{cities.map((city) => (
					<li key={city}>
						<a
							href={withBasePath(`/service-areas/${toCitySlug(city)}`)}
							className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition motion-safe:hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 hover:shadow-[0_10px_28px_rgba(2,24,57,0.12)] motion-reduce:transform-none"
						>
							{city}
						</a>
					</li>
				))}
			</ul>
			<h3 className="mt-10 text-xl font-bold text-slate-900">{t('areasPage.expansionHeading')}</h3>
			<p className="muted mt-3 max-w-3xl text-base">{t('areasPage.expansionCopy')}</p>
		</section>
	);
};

export const ServiceAreasPage = () => (
	<SiteShell>
		<ServiceAreasContent />
	</SiteShell>
);

const ReviewsContent = () => {
	const { t } = useI18n();
	return (
		<section className="section-shell py-14">
			<p className="eyebrow">{t('nav.reviews')}</p>
			<h1 className="h1 mt-3">{t('reviewsPage.title')}</h1>
			<p className="muted mt-4 max-w-3xl text-lg">{t('reviewsPage.subtitle')}</p>
			<ReviewsMarquee className="mt-8" />
		</section>
	);
};

export const ReviewsPage = () => (
	<SiteShell>
		<ReviewsContent />
	</SiteShell>
);

const ContactContent = () => {
	const { t } = useI18n();
	return (
		<section className="section-shell py-14">
			<div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
				<div>
					<p className="eyebrow">{t('nav.contact')}</p>
					<h1 className="h1 mt-3">{t('contactPage.title')}</h1>
					<p className="muted mt-4 text-lg">{t('contactPage.subtitle')}</p>
					<div className="mt-6 grid gap-2 text-sm text-slate-700">
						<p className="chip w-fit">{t('brand.phoneDisplay')}</p>
						<p className="chip w-fit">{t('brand.email')}</p>
						<p>{t('brand.address')}</p>
						<p>{t('brand.hours')}</p>
						<p>{t('brand.license')}</p>
					</div>
				</div>
				<ContactForm />
			</div>
		</section>
	);
};

export const ContactPage = () => (
	<SiteShell>
		<ContactContent />
	</SiteShell>
);
