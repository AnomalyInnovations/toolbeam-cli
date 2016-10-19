export function trimChar(str, char) {
	return str
		.replace(new RegExp(`^${char}*`), '')
		.replace(new RegExp(`${char}*$`), '');
}

export function truncate(string, length, ellipsis = '…') {
	return (string.length > length)
		? string.substr(0, length - ellipsis.length) + ellipsis
		: string;
}

export function indent(str, spaces = 2) {
	const pad = Array(spaces).fill(' ').join('');

	return str
		.split('\n')
		.map(line => `${pad}${line}`)
		.join('\n');
}
