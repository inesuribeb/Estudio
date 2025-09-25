import { useLanguage } from '../../components/contexts/LanguageContext';
import './NotFound.css';

function NotFound() {
    const { language, toggleLanguage, t, getRoute } = useLanguage();

    return (
        <div className='page-not-found'>
            <h1 className='error-404'>[404]</h1>
            <h1>{t('notFound')}</h1>
        </div>
    );
}

export default NotFound;