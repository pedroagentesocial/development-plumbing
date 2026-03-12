const ABSOLUTE_OR_PROTOCOL = /^(?:[a-z]+:|\/\/|#)/i;

export const withBasePath = (path: string) => {
	if (!path || ABSOLUTE_OR_PROTOCOL.test(path)) {
		return path;
	}
	const baseUrl = import.meta.env.BASE_URL ?? '/';
	const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	if (!normalizedBase) {
		return normalizedPath;
	}
	return `${normalizedBase}${normalizedPath}`;
};
