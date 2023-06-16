import styles from './rightBanner.module.css'
import useTranslation from "next-translate/useTranslation";
import {useEffect} from "react";
import ReactGA from "react-ga4";

export default function RightBannerComponent(props:any){
    const {t, lang} = useTranslation('services');
    ReactGA.send({ hitType: "pageview", page: "/", title: t(`Page: ${props.typeService}.${props.service}.title`) });

    useEffect(()=>{
        props.setTitlePage(t(`${props.typeService}.${props.service}.title`))
    })
    return(
        <>
            <div className={"flex -mt-32 bg-no-repeat bg-right "+styles.content} data-aos="fade-left">
                <div className={"w-[65%] pt-[170px] pl-[50px] md:pl-[100px] md:pt-[220px] md:w-[85%] items-center "+styles.general} data-aos="fade-right" data-aos-duration="5000">
                    <div className={"w-[100%] "+styles.information}>
                        <h1>{t(`${props.typeService}.${props.service}.banner.title`)}</h1>
                        <p className="pt-6">{t(`${props.typeService}.${props.service}.banner.description`)}</p>
                        <div className="flex justify-center md:block">
                            <a onClick={props.gaEventTracker(`Clic Agendar cita 1 - ${t(`${props.typeService}.${props.service}.title`)}`)} href='#Form'>
                                <button>
                                    {t('general_button')}
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-end pt-[160px] md:pt-0 pl-[30px] w-[100%] "+styles.image}>
                    <img className="h-[400px] md:h-[700px]" src={t(`${props.typeService}.${props.service}.banner.image`)} alt='Serivicios personales' title='Background banner servicios personales'/>
                </div>
                <div className={styles.arrow_style}>
                    <img src='/images/servicios/arrow-style-left.png' alt='Aboga disign' title='Left arrow style'/>
                </div>
            </div>
        </>
    );
}
