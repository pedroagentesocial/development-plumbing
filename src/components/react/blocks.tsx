import type { ComponentType } from 'react';
import { useI18n } from './LanguageProvider';
import { withBasePath } from '../../lib/routing';
import {
	BuildingIcon,
	DrainIcon,
	DropletIcon,
	FlameIcon,
	PipeIcon,
	PrimaryButton,
	SecondaryButton,
	ShieldIcon,
	ToolIcon,
	ZapIcon
} from './ui';

export const ServicesGrid = () => {
	const { t } = useI18n();
	const services = t('servicesList');
	const serviceIconMap: Record<string, ComponentType> = {
		'/emergency-plumbing': ZapIcon,
		'/drain-cleaning': DrainIcon,
		'/water-heater-repair-installation': FlameIcon,
		'/leak-detection': DropletIcon,
		'/sewer-line': PipeIcon,
		'/commercial-plumbing': BuildingIcon
	};
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{services.map((service) => (
				<a
					key={service.href}
					href={withBasePath(service.href)}
					className="card group relative overflow-hidden transition motion-safe:animate-in motion-safe:fade-in-0 motion-safe:slide-in-from-bottom-2 motion-safe:hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(2,24,57,0.16)] motion-reduce:transform-none"
				>
					<span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand-100/70 blur-xl transition group-hover:bg-brand-200/80" />
					<div className="relative flex items-center gap-3">
						<div className="rounded-xl bg-brand-50 p-2 text-brand-600">
							{(() => {
								const Icon = serviceIconMap[service.href] ?? ToolIcon;
								return <Icon />;
							})()}
						</div>
						<p className="text-xs font-semibold uppercase tracking-widest text-brand-600">{t('labels.utahService')}</p>
					</div>
					<h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
					<p className="mt-2 text-sm text-slate-600">{service.description}</p>
					<p className="mt-4 text-sm font-semibold text-brand-700 transition group-hover:text-brand-500">{t('labels.learnMore')}</p>
				</a>
			))}
		</div>
	);
};

export const ContactForm = () => {
	const { t } = useI18n();
	const form = t('contactPage.form');

	return (
		<form className="card grid gap-3 border-slate-200/90 bg-white/95" aria-label="contact-form">
			<input className="input-premium" placeholder={form.name} aria-label={form.name} />
			<input className="input-premium" placeholder={form.phone} aria-label={form.phone} />
			<input className="input-premium" placeholder={form.email} aria-label={form.email} />
			<input className="input-premium" placeholder={form.city} aria-label={form.city} />
			<select className="input-premium text-slate-600" defaultValue="" aria-label={form.service}>
				<option value="" disabled>
					{form.service}
				</option>
				{t('servicesList').map((service) => (
					<option key={service.href} value={service.title}>
						{service.title}
					</option>
				))}
			</select>
			<textarea className="input-premium min-h-28 resize-y" placeholder={form.message} aria-label={form.message} />
			<button className="rounded-2xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(23,62,130,0.35)] transition motion-safe:hover:-translate-y-0.5 hover:bg-brand-700 motion-reduce:transform-none">
				{form.submit}
			</button>
			<p className="text-xs text-slate-500">{form.privacy}</p>
		</form>
	);
};

export const EmergencyStrip = () => {
	const { t } = useI18n();
	return (
		<section className="section-shell py-14">
			<div className="surface-dark relative overflow-hidden p-8 md:p-10">
				<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
				<div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
				<div
					className="absolute inset-y-0 right-0 hidden w-[48%] bg-cover bg-center opacity-70 md:block"
					style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80)' }}
					aria-hidden="true"
				/>
				<div className="absolute inset-y-0 right-0 hidden w-[55%] bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent md:block" aria-hidden="true" />
				<div className="relative z-10 max-w-2xl">
					<p className="text-sm font-semibold uppercase tracking-wider text-brand-100">{t('badges.emergency247')}</p>
					<h2 className="mt-3 text-3xl font-bold">{t('home.emergency.title')}</h2>
					<p className="mt-3 text-sm text-slate-200">{t('home.emergency.copy')}</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<PrimaryButton href={`tel:${t('brand.phoneRaw')}`}>{t('actions.callNow')}</PrimaryButton>
					<SecondaryButton href={withBasePath('/contact')}>{t('actions.scheduleService')}</SecondaryButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Differentiators = () => {
	const { t } = useI18n();
	const items = t('home.whyItems');
	const icons = [ZapIcon, ToolIcon, ShieldIcon, ShieldIcon];
	return (
		<div className="grid gap-4 md:grid-cols-2">
			{items.map((item, index) => {
				const Icon = icons[index] ?? ShieldIcon;
				return (
					<div key={item.title} className="card transition motion-safe:hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(2,24,57,0.14)] motion-reduce:transform-none">
						<div className="flex items-center gap-3 text-brand-600">
							<span className="rounded-xl bg-brand-50 p-2">
								<Icon />
							</span>
							<h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
						</div>
						<p className="mt-3 text-sm text-slate-600">{item.description}</p>
					</div>
				);
			})}
		</div>
	);
};
