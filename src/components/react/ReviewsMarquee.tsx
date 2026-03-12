import { useI18n } from './LanguageProvider';

type ReviewItem = {
	name: string;
	city: string;
	timeAgo: string;
	avatar: string;
	text: string;
};

export const ReviewsMarquee = ({ className = '' }: { className?: string }) => {
	const { t } = useI18n();
	const reviews = t('reviewsPage.items') as ReviewItem[];
	const loops = [0, 1, 2];

	return (
		<div className={className}>
			<div className="mb-6 grid gap-4 rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 p-5 shadow-[0_16px_46px_rgba(2,24,57,0.08)] md:grid-cols-[1fr_auto] md:items-center md:p-6">
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{t('reviewsPage.badge')}</p>
					<p className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">{t('reviewsPage.trustHeadline')}</p>
					<p className="mt-2 text-sm font-medium text-slate-600">{t('reviewsPage.basedOn')}</p>
				</div>
				<div className="flex flex-wrap items-center gap-3 md:justify-end">
					<div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
						<GoogleWordmark />
						<span className="text-xs font-semibold text-slate-600">{t('reviewsPage.platform')}</span>
					</div>
					<div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
						<div className="flex items-center gap-0.5" aria-label={t('reviewsPage.ratingLabel')}>
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon partial />
						</div>
						<p className="text-sm font-bold text-slate-900">{t('reviewsPage.averageScore')}</p>
					</div>
				</div>
			</div>

			<div className="reviews-marquee-shell motion-reduce:hidden" aria-label={t('reviewsPage.marqueeAria')}>
				<div className="reviews-marquee-track">
					{loops.map((loopIndex) =>
						reviews.map((review, reviewIndex) => (
							<ReviewCard
								key={`${review.name}-${loopIndex}-${reviewIndex}`}
								review={review}
								index={reviewIndex}
								duplicate={loopIndex > 0}
							/>
						))
					)}
				</div>
			</div>

			<div
				className="hidden gap-4 overflow-x-auto pb-2 motion-reduce:grid motion-reduce:grid-flow-col motion-reduce:auto-cols-[86%] md:motion-reduce:auto-cols-[44%] xl:motion-reduce:auto-cols-[31%]"
				aria-label={t('reviewsPage.staticAria')}
			>
				{reviews.map((review, index) => (
					<ReviewCard key={review.name} review={review} index={index} duplicate={false} />
				))}
			</div>
		</div>
	);
};

const ReviewCard = ({ review, index, duplicate }: { review: ReviewItem; index: number; duplicate: boolean }) => {
	const { t } = useI18n();
	const variantClasses = ['mt-1', 'mt-4', 'mt-2', 'mt-5', 'mt-0', 'mt-3', 'mt-2', 'mt-4'];
	const variantClass = variantClasses[index % variantClasses.length];
	return (
		<article
			className={`reviews-marquee-card ${variantClass}`}
			aria-hidden={duplicate}
			role="article"
		>
			<div className="mb-4 flex items-start justify-between gap-3">
				<div className="flex items-center gap-3">
					<img
						src={review.avatar}
						alt={`${review.name} profile`}
						width={56}
						height={56}
						loading="lazy"
						decoding="async"
						className="h-14 w-14 rounded-full border border-white object-cover shadow-[0_8px_20px_rgba(2,24,57,0.18)] ring-2 ring-brand-100/50"
					/>
					<div>
						<p className="text-sm font-extrabold text-slate-900">{review.name}</p>
						<p className="text-xs font-medium text-slate-500">{review.city}</p>
					</div>
				</div>
				<div className="text-right">
					<div className="flex justify-end gap-0.5" aria-label={t('reviewsPage.ratingLabel')}>
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon />
						<StarIcon partial />
					</div>
					<p className="mt-1 text-xs font-semibold text-slate-500">{review.timeAgo}</p>
				</div>
			</div>
			<p className="text-sm leading-relaxed text-slate-700">{review.text}</p>
			<div className="mt-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-4">
				<span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
					<GoogleMark />
					{t('reviewsPage.badge')}
				</span>
				<p className="text-xs font-semibold text-slate-500">{t('reviewsPage.platform')}</p>
			</div>
		</article>
	);
};

const GoogleWordmark = () => (
	<svg width="102" height="20" viewBox="0 0 102 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<text x="0" y="15" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="700">
			<tspan fill="#4285F4">G</tspan>
			<tspan fill="#EA4335">o</tspan>
			<tspan fill="#FBBC05">o</tspan>
			<tspan fill="#4285F4">g</tspan>
			<tspan fill="#34A853">l</tspan>
			<tspan fill="#EA4335">e</tspan>
		</text>
		<text x="50" y="15" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="600" fill="#475569">
			Reviews
		</text>
	</svg>
);

const GoogleMark = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M21.8 12.2c0-.8-.1-1.4-.2-2.1H12v3.9h5.6a4.9 4.9 0 0 1-2.1 3.2v2.7h3.4c2-1.9 2.9-4.6 2.9-7.7Z" fill="#4285F4"/>
		<path d="M12 22c2.7 0 5-1 6.8-2.6l-3.4-2.7c-1 .6-2.2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H2.9v2.8A10 10 0 0 0 12 22Z" fill="#34A853"/>
		<path d="M6.4 13.6a6 6 0 0 1 0-3.2V7.6H2.9a10 10 0 0 0 0 8.8l3.5-2.8Z" fill="#FBBC05"/>
		<path d="M12 6.3c1.5 0 2.8.5 3.8 1.4l2.9-2.9A10 10 0 0 0 2.9 7.6l3.5 2.8c.8-2.4 3-4.1 5.6-4.1Z" fill="#EA4335"/>
	</svg>
);

const StarIcon = ({ partial = false }: { partial?: boolean }) => (
	<svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<defs>
			<linearGradient id={partial ? 'review-star-gradient-partial' : 'review-star-gradient'} x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" stopColor="#fbbf24" />
				<stop offset={partial ? '75%' : '100%'} stopColor="#f59e0b" />
				{partial && <stop offset="76%" stopColor="#e2e8f0" />}
				{partial && <stop offset="100%" stopColor="#e2e8f0" />}
			</linearGradient>
		</defs>
		<path fill={partial ? 'url(#review-star-gradient-partial)' : 'url(#review-star-gradient)'} d="m12 2.9 2.8 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3 9.4l6.2-.9L12 2.9Z" />
	</svg>
);
