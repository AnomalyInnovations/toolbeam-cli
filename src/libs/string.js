export function trimChar(str, char) {
	return str
		.replace(new RegExp(`^${char}*`), '')
		.replace(new RegExp(`${char}*$`), '');
}
