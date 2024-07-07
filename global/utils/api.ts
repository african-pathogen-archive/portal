import { getConfig } from '@/global/config';

import { HttpMethods, INTERNAL_PATHS } from './constants';

const { NEXT_PUBLIC_PROJECT_API_URL } = getConfig();

export async function apiRequest(method: HttpMethods, url = '', data = {}) {
	const response = await fetch(`${NEXT_PUBLIC_PROJECT_API_URL}${url}`, {
		method: method,
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: method !== HttpMethods.GET ? JSON.stringify(data) : null,
	});

	if (!response.ok) {
		const errorObj = await response.json();
		throw errorObj;
	}

	return await response.json();
}

export async function authorizedApiRequest(method: HttpMethods, url = '', data = {}) {
	const response = await fetch(`${NEXT_PUBLIC_PROJECT_API_URL}${url}`, {
		method: method,
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('EGO_JWT')}`,
			'Content-Type': 'application/json',
			'Cache-Control': 'public, s-maxage=86400',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: method !== HttpMethods.GET ? JSON.stringify(data) : null,
	});

	if (response.status === 401) {
		window.location.href = INTERNAL_PATHS.LOGIN;
		throw new Error('Unauthorized');
	}

	if (!response.ok) {
		const errorObj = await response.json();
		throw errorObj;
	}

	return response.json();
}
