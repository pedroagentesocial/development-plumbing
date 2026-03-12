const siteUrl = 'https://www.summitflowplumbing.com';

type FaqItem = { question: string; answer: string };
type ServiceSchemaInput = {
	name: string;
	description: string;
	pathname: string;
};

export const buildCanonical = (pathname: string) => `${siteUrl}${pathname}`;

const businessCore = {
	'@id': `${siteUrl}/#business`,
	name: 'Summit Flow Plumbing',
	url: siteUrl,
	image: `${siteUrl}/og-plumbing.jpg`,
	telephone: '+1-801-555-0148',
	email: 'service@summitflowplumbing.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '2150 South 1300 East',
		addressLocality: 'Salt Lake City',
		addressRegion: 'UT',
		postalCode: '84106',
		addressCountry: 'US'
	},
	areaServed: [
		'Salt Lake City',
		'West Valley City',
		'Provo',
		'Orem',
		'Sandy',
		'Ogden',
		'St. George',
		'Layton',
		'South Jordan',
		'Lehi'
	],
	openingHours: ['Mo-Su 00:00-23:59'],
	priceRange: '$$'
};

export const buildLocalBusinessSchema = () => ({
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'LocalBusiness',
			...businessCore
		},
		{
			'@type': 'Plumber',
			...businessCore
		}
	]
});

export const buildFaqSchema = (faq: FaqItem[]) => ({
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: faq.map((item) => ({
		'@type': 'Question',
		name: item.question,
		acceptedAnswer: {
			'@type': 'Answer',
			text: item.answer
		}
	}))
});

export const buildServiceSchema = (input: ServiceSchemaInput) => ({
	'@context': 'https://schema.org',
	'@type': 'Service',
	'@id': `${siteUrl}${input.pathname}#service`,
	name: input.name,
	description: input.description,
	url: `${siteUrl}${input.pathname}`,
	provider: {
		'@id': `${siteUrl}/#business`
	},
	areaServed: {
		'@type': 'State',
		name: 'Utah'
	},
	serviceType: input.name
});
