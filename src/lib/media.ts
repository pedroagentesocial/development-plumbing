export type VisualAsset = {
	key: string;
	label: string;
	path: string;
	width: number;
	height: number;
	aspect: string;
	loading: 'eager' | 'lazy';
	priority: 'high' | 'auto' | 'low';
};

export const visualAssets: Record<string, VisualAsset> = {
	heroMain: {
		key: 'heroMain',
		label: 'Hero crew on-site in Utah',
		path: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1920&q=78',
		width: 1920,
		height: 1280,
		aspect: '3:2',
		loading: 'eager',
		priority: 'high'
	},
	serviceEmergency: {
		key: 'serviceEmergency',
		label: 'Emergency plumbing response',
		path: '/images/placeholders/service-emergency-plumbing.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	serviceDrain: {
		key: 'serviceDrain',
		label: 'Drain cleaning technician',
		path: '/images/placeholders/service-drain-cleaning.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	serviceWaterHeater: {
		key: 'serviceWaterHeater',
		label: 'Water heater service call',
		path: '/images/placeholders/service-water-heater.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	serviceLeak: {
		key: 'serviceLeak',
		label: 'Leak detection assessment',
		path: '/images/placeholders/service-leak-detection.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	serviceSewer: {
		key: 'serviceSewer',
		label: 'Sewer line inspection',
		path: '/images/placeholders/service-sewer-line.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	serviceCommercial: {
		key: 'serviceCommercial',
		label: 'Commercial plumbing project',
		path: '/images/placeholders/service-commercial-plumbing.svg',
		width: 1440,
		height: 1080,
		aspect: '4:3',
		loading: 'lazy',
		priority: 'auto'
	},
	teamPortrait: {
		key: 'teamPortrait',
		label: 'Licensed field technician portrait',
		path: '/images/placeholders/team-technician-portrait.svg',
		width: 1200,
		height: 1500,
		aspect: '4:5',
		loading: 'lazy',
		priority: 'auto'
	},
	testimonialPhoto: {
		key: 'testimonialPhoto',
		label: 'Customer testimonial portrait',
		path: '/images/placeholders/testimonial-customer-portrait.svg',
		width: 1200,
		height: 1200,
		aspect: '1:1',
		loading: 'lazy',
		priority: 'auto'
	}
};
