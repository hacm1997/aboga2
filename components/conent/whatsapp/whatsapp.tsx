import useAnalyticsEventTracker from '../../../services/analytics/useAnalyticsEventTracker';
import styles from './styles.module.css';

export default function Whatsapp() {
    const gaEventTracker = useAnalyticsEventTracker('WhatsApp');
    const analytic = () =>{
        gaEventTracker('Clic En: Botón WhatsApp');
    }
    return (
        <>
            <div className={styles.whatsapp}>
                <a href="https://wa.me/573242382277" target="_blank" rel="noreferrer" onClick={analytic}>
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
        </>
    )
}

