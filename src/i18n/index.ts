import catalan from './ca.json';
import spanish from './es.json';

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es'
}
export const getI18N = ({ currentLocale = 'es' } : { currentLocale?: string | 'es' }) => {
    if (currentLocale === LANGUAGES.CATALAN) {
        return catalan;
    }
    if (currentLocale === LANGUAGES.SPANISH) {
        return spanish;
    }
}