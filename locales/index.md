import config from '../config/index.js';
import en from './en.js';

const locales = {
  en,
};

const t = (key) => locales[config.APP_LANG][key];

export {
  t,
};

export default null;