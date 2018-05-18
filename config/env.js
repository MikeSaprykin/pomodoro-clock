const production = 'production';
const development = 'development';

const isProduction = process.env.NODE_ENV === production

const mode = isProduction ? production : development;

module.exports = {
    isProduction,
    mode
}