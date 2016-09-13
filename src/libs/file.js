import fs from 'fs';

export function readFile(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, 'utf8', (err, data) => {
			(err)
				? reject(err)
				: resolve(data)
		});
	});
}

export function writeFile(file, content) {
	return new Promise((resolve, reject) => {
		fs.writeFile(file, content, (err) => {
			(err)
				? reject(err)
				: resolve()
		});
	});
}
