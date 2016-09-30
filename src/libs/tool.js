import config from '../config';

export function toolUrl(uri) {
	return `${config.webScheme}://${config.webHost}/t/${uri}`;
}
