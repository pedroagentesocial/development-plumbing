export type UtahCity = {
	name: string;
	slug: string;
	title: string;
	description: string;
	h1: string;
	intro: string;
};

export const utahCities: UtahCity[] = [
	{
		name: 'Salt Lake City',
		slug: 'salt-lake-city',
		title: 'Plumber in Salt Lake City, UT | Emergency & Same-Day Service',
		description: 'Local plumber in Salt Lake City for emergency plumbing, drain cleaning, leak detection, water heater, sewer line, and commercial service.',
		h1: 'Plumbing Services in Salt Lake City, UT',
		intro: 'Fast local plumbing support for older homes, multifamily properties, and commercial spaces across Salt Lake City.'
	},
	{
		name: 'West Valley City',
		slug: 'west-valley-city',
		title: 'Plumber in West Valley City, UT | Emergency Plumbing',
		description: 'Emergency and same-day plumber in West Valley City for clogged drains, water heater issues, leaks, and sewer line problems.',
		h1: 'Plumbing Services in West Valley City, UT',
		intro: 'Responsive plumbing service for residential neighborhoods and managed properties throughout West Valley City.'
	},
	{
		name: 'Provo',
		slug: 'provo',
		title: 'Plumber in Provo, UT | Same-Day Residential & Commercial',
		description: 'Professional plumber in Provo offering emergency repairs, drain cleaning, leak detection, water heater service, and sewer diagnostics.',
		h1: 'Plumbing Services in Provo, UT',
		intro: 'Reliable plumbing support for homes, student rentals, and commercial properties in Provo.'
	},
	{
		name: 'Orem',
		slug: 'orem',
		title: 'Plumber in Orem, UT | Emergency and Same-Day Plumbing',
		description: 'Local Orem plumbing service for active leaks, drain backups, water heater repairs, and sewer line issues.',
		h1: 'Plumbing Services in Orem, UT',
		intro: 'Same-day plumbing help across Orem with clear diagnostics and efficient repairs.'
	},
	{
		name: 'Sandy',
		slug: 'sandy',
		title: 'Plumber in Sandy, UT | Drain, Leak, and Water Heater Service',
		description: 'Trusted Sandy plumber for emergency calls, drain cleaning, leak detection, water heater repairs, and commercial plumbing.',
		h1: 'Plumbing Services in Sandy, UT',
		intro: 'Local field crews serving Sandy homes and businesses with rapid dispatch and licensed workmanship.'
	},
	{
		name: 'Ogden',
		slug: 'ogden',
		title: 'Plumber in Ogden, UT | Emergency Plumbing and Sewer Repair',
		description: 'Ogden plumbing specialists for urgent leaks, sewer line diagnostics, clogged drains, and same-day service appointments.',
		h1: 'Plumbing Services in Ogden, UT',
		intro: 'Responsive plumbing solutions for Ogden homeowners, landlords, and property managers.'
	},
	{
		name: 'St. George',
		slug: 'st-george',
		title: 'Plumber in St. George, UT | Local Emergency Plumbing',
		description: 'St. George plumber for emergency response, drain cleaning, leak detection, water heater service, and commercial plumbing.',
		h1: 'Plumbing Services in St. George, UT',
		intro: 'Dependable local plumbing support for St. George residential and commercial service calls.'
	},
	{
		name: 'Layton',
		slug: 'layton',
		title: 'Plumber in Layton, UT | Same-Day Plumbing Service',
		description: 'Layton plumbing services including emergency repairs, clogged drain clearing, water heater replacement, and sewer line work.',
		h1: 'Plumbing Services in Layton, UT',
		intro: 'Fast-response plumbing for Layton homes, rental properties, and business locations.'
	},
	{
		name: 'South Jordan',
		slug: 'south-jordan',
		title: 'Plumber in South Jordan, UT | Emergency and Drain Services',
		description: 'South Jordan emergency plumber for leaks, overflows, drain cleaning, water heater, and sewer line repair.',
		h1: 'Plumbing Services in South Jordan, UT',
		intro: 'Professional plumbing support in South Jordan with same-day scheduling and transparent recommendations.'
	},
	{
		name: 'Lehi',
		slug: 'lehi',
		title: 'Plumber in Lehi, UT | Residential & Commercial Plumbing',
		description: 'Local Lehi plumber for emergency repairs, leak detection, drain cleaning, sewer services, and water heater installation.',
		h1: 'Plumbing Services in Lehi, UT',
		intro: 'Service built for Lehi homes, offices, and growing mixed-use properties.'
	}
];

export const getCityBySlug = (slug: string) => utahCities.find((city) => city.slug === slug);
