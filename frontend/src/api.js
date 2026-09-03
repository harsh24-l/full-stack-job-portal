const configuredApiUrl = (
	import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1"
).replace(/\/+$/, "");

export const API_URL = configuredApiUrl.endsWith("/api/v1")
	? configuredApiUrl
	: `${configuredApiUrl}/api/v1`;
