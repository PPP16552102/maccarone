const optEnvironmentVariable = process.env.MACCARONE_OPTIONS;
const optEnvironment = optEnvironmentVariable
  ? JSON.parse(optEnvironmentVariable)
  : {};

const main = () => {};

export default main;

if(typeof require !== 'undefined' && require.main === module)