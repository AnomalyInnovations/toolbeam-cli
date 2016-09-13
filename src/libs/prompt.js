import prompt from 'prompt';

export function getPrompt(prompts) {
	return new Promise((resolve, reject) => {
		prompt.get(prompts, (err, results) => {
			(err)
				? reject(err)
				: resolve(results);
		});
	});
}

