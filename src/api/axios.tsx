import axios from "axios";

import {
	getJWT,
	setJWT,
	clearJWT,
	getRefreshToken,
	setRefreshToken,
} from "../lib/auth";

const apiUrl = import.meta.env.VITE_BE_API_URL;
const tokenName = "access-token";

const api = axios.create({
	baseURL: apiUrl,
});

api.interceptors.request.use((config) => {
	const token = getJWT();
	if (token) {
		config.headers[tokenName] = token;
	}
	return config;
});

api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (
			error.response?.status === 401 &&
			error.config?.url !== "/auth/login"
		) {
			clearJWT();
			const refreshToken = getRefreshToken();
			if (refreshToken != null) {
				return getNewJWT(refreshToken)
					.then(() => {
						const config = error.config;
						config.headers[tokenName] = getJWT();
						return api(config);
					})
					.catch((err) => {
						console.error("Failed to refresh token:", err);
						window.location.href = "/login";
					});
			}
		}
		return Promise.reject(error);
	}
);
export default api;

function getNewJWT(refreshToken: string): Promise<void> {
	console.log("getnewJWT");
	return fetch(`${apiUrl}/auth/refresh`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			"refresh-token": refreshToken,
		}),
	})
		.then(async (response) => {
			const body = await response.json();
			if (!response.ok) {
				throw body;
			}
			return body;
		})
		.then((data) => {
			setJWT(data["access-token"]);
			setRefreshToken(data["refresh-token"]);
		})
		.catch((err) => {
			console.error("Refresh Token Error:", err);
			throw err;
		});
}
