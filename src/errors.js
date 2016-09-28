export const ERR_INVALID_JSON = 'Invalid json';

export const ERR_INIT_PROJECT_EXISTS = 'Project already exists';
export const ERR_INIT_INVALID_URL_FORMAT = 'Invalid url format';

export const ERR_SIGNUP_PSWDS_DONT_MATCH = 'Passwords don\'t match';

export const ERR_ADD_MISSING_PARAM_FIELD = 'Missing parameter field';
export const ERR_ADD_MISSING_PARAM_NAME = 'Missing parameter name';
export const ERR_ADD_MISSING_PARAM_IN = 'Missing parameter in';
export const ERR_ADD_SPEC_NOT_EXISTS = 'Spec file does not exist. Run tb init first';
export const ERR_ADD_TOOL_EXISTS = 'Tool with the same operation and path already exist';

export const ERR_PULL_UUID_DOES_NOT_MATCH = 'UUID provided does not match that in the current project';
export const ERR_PULL_UUID_NOT_PROVIDED = 'Please specify a project UUID';
export const ERR_PULL_PARSE_SPEC_JSON = 'Could not parse project file for UUID due to invalid json';
export const ERR_PULL_UUID_NOT_IN_SPEC = 'Found an existing project in the current directory, but the project does not contain a project UUID. Push the project first to acquire a UUID';

export const ERR_REMOVE_SPEC_NOT_EXISTS = 'Spec file does not exist';
export const ERR_REMOVE_PARSE_SPEC_JSON = 'Could not parse project file for the tool due to invalid json';