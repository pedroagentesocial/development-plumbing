import type { ReactNode } from 'react';

export const PrimaryButton = ({ href, children }: { href: string; children: ReactNode }) => (
	<a
		href={href}
		className="inline-flex items-center justify-center rounded-2xl bg-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(234,122,44,0.35)] transition motion-safe:hover:-translate-y-0.5 hover:bg-accent-600 motion-reduce:transform-none"
	>
		{children}
	</a>
);

export const SecondaryButton = ({ href, children }: { href: string; children: ReactNode }) => (
	<a
		href={href}
		className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white/95 px-5 py-3 text-sm font-semibold text-slate-800 transition motion-safe:hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 motion-reduce:transform-none"
	>
		{children}
	</a>
);

export const PhoneIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M4.8 3.7A2 2 0 0 1 6.4 3h2.3a2 2 0 0 1 2 1.7l.3 2.3a2 2 0 0 1-.6 1.7L9.1 10a14.4 14.4 0 0 0 4.9 4.9l1.3-1.3a2 2 0 0 1 1.7-.6l2.3.3a2 2 0 0 1 1.7 2v2.3a2 2 0 0 1-.7 1.6l-1.1.9a3.8 3.8 0 0 1-3.7.7c-4.2-1.4-10-7.2-11.4-11.4a3.8 3.8 0 0 1 .7-3.7l1-1Z" />
	</svg>
);

export const ShieldIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M12 3 4 6v6c0 4.9 3.3 8.7 8 9 4.7-.3 8-4.1 8-9V6l-8-3Z" />
		<path d="m9 12 2 2 4-4" />
	</svg>
);

export const ZapIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
	</svg>
);

export const ToolIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M14.7 6.3a4 4 0 0 0 5 5l-7.8 7.8a2 2 0 0 1-2.8 0L4.9 15a2 2 0 0 1 0-2.8l7.8-7.8a4 4 0 0 0 2 1.9Z" />
	</svg>
);

export const DrainIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M3 8h18M6 12h12M9 16h6" />
		<path d="M12 3v18" />
	</svg>
);

export const DropletIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M12 3c3.5 4 6 7.2 6 10a6 6 0 1 1-12 0c0-2.8 2.5-6 6-10Z" />
	</svg>
);

export const FlameIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M12 3s4 3.7 4 7.1A4 4 0 0 1 12 14a4 4 0 0 1-4-3.9C8 6.7 12 3 12 3Z" />
		<path d="M8 15a4 4 0 1 0 8 0c0-2.2-1.5-3.8-4-5-2.5 1.2-4 2.8-4 5Z" />
	</svg>
);

export const PipeIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M7 4v5a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v5" />
		<path d="M4 4h6M14 20h6" />
	</svg>
);

export const BuildingIcon = () => (
	<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
		<path d="M4 21h16M6 21V5h12v16M9 9h2m2 0h2m-6 4h2m2 0h2" />
	</svg>
);

export const LicenseIcon = () => (
	<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
		<path d="M12 3 4 6v6c0 4.9 3.3 8.7 8 9 4.7-.3 8-4.1 8-9V6l-8-3Z" />
		<path d="m9 12 2 2 4-4" />
	</svg>
);

export const ClockBoltIcon = () => (
	<svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9">
		<path d="M12 7v5l3 2" />
		<path d="M8.5 3.8A9 9 0 1 1 3.4 12" />
		<path d="m5 2.5-.6 3.3L7.6 6" />
	</svg>
);

export const MapPinIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
		<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
		<circle cx="12" cy="10" r="2.5" />
	</svg>
);

export const FacebookIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
		<path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6h1.3V4.9c-.2 0-1-.1-2-.1-2 0-3.5 1.2-3.5 3.6V11H8.8v3h2.5v7h2.2Z" />
	</svg>
);

export const InstagramIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
		<rect x="3.5" y="3.5" width="17" height="17" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
);

export const GoogleBusinessIcon = () => (
	<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
		<path d="M4 10h16M6 10V7.5a2.5 2.5 0 0 1 2.5-2.5h7A2.5 2.5 0 0 1 18 7.5V10" />
		<path d="M5 10h14v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8Z" />
		<path d="M10.5 16.5h3" />
	</svg>
);
