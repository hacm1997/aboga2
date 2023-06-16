import useTranslation from 'next-translate/useTranslation';
import styles from './ourServices.module.css';

export default function OurServicesComponent(props: any) {
    const { t, lang } = useTranslation(`services`);
    const list_services = t<any>(`${props.typeService}.${props.service}.our_services`, {}, { returnObjects: true });

    return (
        <>
            <div className={styles.background_content}>
                <div className={'flex justify-center pt-14 '+styles.title} >
                    <h3 className='text-center'>{t(`general_services_title`)}</h3>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 w-[100%] pt-10 pl-10 md:pl-28 pr-10 md:pr-28 gap-5 '>
                    {
                        Array.isArray(list_services) ? list_services?.map((item: any, index:number) => (
                            <div className={item.bg_color === 'blue' ? 'block md:flex items-center p-5 '+styles.card_blue : 'block md:flex items-center p-5 '+styles.card_white} key={index}
                            data-aos="flip-up" data-aos-easing="ease-in-back"
                            data-aos-delay={index*150}
                            data-aos-offset="0"
                            >
                                <div className='w-[100%] md:w-[17%] flex justify-center md:block align-center'>
                                    <img className='w-[30%] md:w-[70%]' src={item.img} alt={item.alt} title={item.alt} />
                                </div>
                                <div className='pt-6 w-[100%] md:w-[90%] md:pt-1'>
                                    <h5 className='text-center md:text-left pb-3'>{item.title}</h5>
                                    <p className='text-center md:text-left'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    : null}

                </div>
                <div className={'flex justify-center pt-10 '+styles.general_button} >
                    <a onClick={props.gaEventTracker(`Clic Agendar cita 4 - ${t(`${props.typeService}.${props.service}.title`)}`)} href='#Form'>
                        <button>
                            {t('general_button')}
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}
