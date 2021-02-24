const defaultAllowedEnvironments = ['test', 'development', 'dev'];

const environment = process.env['NODE_ENV'];

const shouldShowForEnvironment = (
  allowedEnvironments = defaultAllowedEnvironments,
) =>
  typeof environment === 'string'
    ? allowedEnvironments.includes(environment)
    : false;

export default shouldShowForEnvironment;
