import { useState } from 'react';
import { SiteShell } from '../SiteShell';
import { ContactForm, Differentiators, EmergencyStrip, ServicesGrid } from '../blocks';
import { useI18n } from '../LanguageProvider';
import { ReviewsMarquee } from '../ReviewsMarquee';
import { PrimaryButton, SecondaryButton } from '../ui';
import { withBasePath } from '../../../lib/routing';
import { visualAssets } from '../../../lib/media';
const toCitySlug = (city: string) => city.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-');

export default function HomePage() {
	return (
		<SiteShell>
			<HomeContent />
		</SiteShell>
	);
}

const HomeContent = () => {
	const { t } = useI18n();
	const heroImage = visualAssets.heroMain;
	const steps = t('home.howItWorks');
	const cities = t('areasPage.cities');
	const faq = t('home.faq');
	const trustChips = t('home.hero.trustChips');
	const stats = t('home.hero.stats');

	return (
		<>
			<section className="section-shell py-12 lg:py-18">
				<div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-700">
							{t('home.hero.kicker')}
						</div>
						<h1 className="h1 mt-5 max-w-2xl">{t('home.hero.headline')}</h1>
						<p className="muted mt-5 max-w-2xl text-lg">{t('home.hero.subheadline')}</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<PrimaryButton href={`tel:${t('brand.phoneRaw')}`}>{t('actions.callNow')}</PrimaryButton>
							<SecondaryButton href={withBasePath('/contact')}>{t('actions.scheduleService')}</SecondaryButton>
						</div>
						<div className="mt-7 flex flex-wrap gap-2">
							{trustChips.map((chip) => (
								<span key={chip} className="chip">
									{chip}
								</span>
							))}
						</div>
						<div className="mt-7 grid gap-2 text-sm text-slate-600">
							{t('home.hero.microTrust').map((item) => (
								<p key={item} className="rounded-xl border border-slate-200/80 bg-white px-3 py-2">
									{item}
								</p>
							))}
						</div>
					</div>
					<div className="grid gap-4">
						<article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_16px_44px_rgba(2,24,57,0.18)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-4">
							<img
								src={heroImage.path}
								alt={t('home.hero.imageAlt')}
								className="h-[270px] w-full rounded-[1.5rem] object-cover md:h-[320px]"
								width={heroImage.width}
								height={heroImage.height}
								loading={heroImage.loading}
								fetchPriority={heroImage.priority}
								decoding="async"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 720px"
							/>
							<div className="absolute inset-x-6 bottom-6 rounded-2xl bg-slate-950/80 px-4 py-3 text-white backdrop-blur">
								<p className="text-sm font-semibold">{t('home.hero.imageCaption')}</p>
							</div>
						</article>
						<div className="grid grid-cols-3 gap-3">
							{stats.map((stat) => (
								<div key={stat.label} className="card p-4 text-center">
									<p className="text-xl font-extrabold text-brand-700">{stat.value}</p>
									<p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section-shell py-14">
				<div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="eyebrow">{t('contactPage.title')}</p>
						<h2 className="h2 mt-3 max-w-xl">{t('actions.scheduleService')}</h2>
						<p className="muted mt-4 max-w-xl text-base">
							{t('home.scheduleBlock.copy')}
						</p>
					</div>
					<ContactForm />
				</div>
			</section>

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.servicesTitle')}</p>
				<h2 className="h2 mt-3">{t('home.servicesHeading')}</h2>
				<div className="mt-6">
					<ServicesGrid />
				</div>
			</section>

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.whyTitle')}</p>
				<h2 className="h2 mt-3">{t('home.whyHeading')}</h2>
				<div className="mt-6">
					<Differentiators />
				</div>
			</section>

			<EmergencyStrip />

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.howItWorksTitle')}</p>
				<h2 className="h2 mt-3">{t('home.howItWorksHeading')}</h2>
				<div className="mt-6 grid gap-4 md:grid-cols-3">
					{steps.map((step, index) => (
						<div
							key={step.title}
							className="card relative overflow-hidden transition motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(2,24,57,0.16)] motion-reduce:transform-none"
						>
							<div className="absolute right-4 top-4 text-4xl font-extrabold text-brand-100">0{index + 1}</div>
							<p className="text-xs font-bold uppercase tracking-wider text-brand-600">{t('labels.step')} {index + 1}</p>
							<h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
							<p className="mt-2 text-sm text-slate-600">{step.description}</p>
						</div>
					))}
				</div>
			</section>

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.areasTitle')}</p>
				<h2 className="h2 mt-3">{t('home.areasHeading')}</h2>
				<div className="mt-6 flex flex-wrap gap-2">
					{cities.map((city) => (
						<a
							key={city}
							href={withBasePath(`/service-areas/${toCitySlug(city)}`)}
							className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700"
						>
							{city}
						</a>
					))}
				</div>
			</section>

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.faqTitle')}</p>
				<h2 className="h2 mt-3">{t('home.faqHeading')}</h2>
				<div className="mt-6 grid gap-3 md:grid-cols-2">
					{faq.map((item, index) => (
						<FaqItem key={item.question} question={item.question} answer={item.answer} defaultOpen={index === 0} />
					))}
				</div>
			</section>

			<section className="section-shell py-14">
				<p className="eyebrow">{t('home.reviewsTitle')}</p>
				<h2 className="h2 mt-3">{t('home.reviewsHeading')}</h2>
				<ReviewsMarquee className="mt-6" />
			</section>
		</>
	);
};

const FaqItem = ({
	question,
	answer,
	defaultOpen
}: {
	question: string;
	answer: string;
	defaultOpen?: boolean;
}) => {
	const [isOpen, setIsOpen] = useState(Boolean(defaultOpen));
	return (
		<div className="card overflow-hidden p-0">
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex w-full items-center justify-between px-5 py-4 text-left"
				aria-expanded={isOpen}
			>
				<span className="text-base font-semibold text-slate-900">{question}</span>
				<span className="ml-3 text-xl font-semibold text-brand-600">{isOpen ? '−' : '+'}</span>
			</button>
			<div
				className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
			>
				<div className="overflow-hidden">
					<p className="px-5 pb-5 text-sm text-slate-600">{answer}</p>
				</div>
			</div>
		</div>
	);
};
