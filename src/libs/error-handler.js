import chalk from 'chalk';

export default e => {
	if (e) {

		if (e instanceof SyntaxError) {
			printError(e.message);
		}
		else if (e instanceof Error) {
			printError(e.message, '');
		}
		else if (typeof e === 'string') {
			printError(e);
		}
		else if (typeof e.message === 'string') {
			printError(e.message);
		}
		else if (e.message === null) {
			// Do nothing
		}
		else {
			printError(`Uncaught exception in error handler ${e}`);
		}

	}

	process.exit(1);
}

function printError(message, prefix = 'Error: ') {
	console.log(chalk.red(`${prefix}${message}`));
}
