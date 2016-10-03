import chalk from 'chalk';

export default e => {
	if (e) {

		// Internal errors
		if (typeof e === 'string') {
			printError(e);
		}
		// Request errors
		else if (typeof e.message === 'string' && ! e.stack) {
			const code = e.code ? ` (code: ${e.code})` : '';
			printError(`${e.message}${code}`);
		}
		// Internal silent errors
		else if (e.message === null) {
			// Do nothing
		}
		else {
			throw e;
		}

	}

	process.exit(1);
}

function printError(message, prefix = 'Error: ') {
	console.log(chalk.red(`${prefix}${message}`));
}
