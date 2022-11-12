const getEnvVar = (key: string): string => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

export const NODE_ENV = getEnvVar('NODE_ENV');
export const isDevEnv = NODE_ENV === 'development';
export const isProdEnv = NODE_ENV === 'production';
