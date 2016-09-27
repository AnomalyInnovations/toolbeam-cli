import chalk from 'chalk';

export default e => {
	if (e) {

		if (typeof e === 'object') {
			if (e.hasOwnProperty('message')) {
				if (e.message === null) {
					// Do nothing
				}
				else {
					console.log(chalk.red(`Error: ${e.message}`));
				}
			}
		}

	}

	process.exit(1);
}
