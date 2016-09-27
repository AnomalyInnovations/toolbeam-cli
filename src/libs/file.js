import fs from 'fs';

export function existFile(file) {
	return new Promise((resolve, reject) => {
		fs.stat(file, (err, stats) => {
			(err)
				? (err.code == 'ENOENT' ? resolve(false) : reject(err))
				: resolve(stats.isFile())
		});
	});
}

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

export function deleteFile(file) {
	return new Promise((resolve, reject) => {
		fs.unlink(file, (err) => {
			(err)
				? (err.code == 'ENOENT' ? resolve() : reject(err))
				: resolve()
		});
	});
}
