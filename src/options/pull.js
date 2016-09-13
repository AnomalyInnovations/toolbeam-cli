import chalk from 'chalk';
import { Spinner } from 'clui';

import { writeFile } from '../libs/file';
import * as specActions from '../actions/spec-actions';

const fileName = 'spec.json';

export default async function({getState, dispatch}) {
	const spinner = new Spinner('Pulling spec…');

	spinner.start();

	// Load spec info & data
	try {
		await dispatch(specActions.loadInfo());
		await dispatch(specActions.load(specActions.getSpecFileLink(getState())));
	}
	catch(e) {
		spinner.stop();
		console.log(chalk.red(`Pull failed: ${e.message}`));
		return;
	}

	// Write file
	try {
		await writeFile(fileName, specActions.getData(getState()));
	}
	catch(e) {
		console.log(chalk.red(e));
		spinner.stop();
		return;
	}
	
	spinner.stop();
	console.log(chalk.cyan(`Pulled ${fileName} from Toolbeam.`));
}
