import useTranslation from 'next-translate/useTranslation';
import styles from './form.module.css';
import { useEffect, useState } from 'react';
import config from '../../../../../services/config';
import NotifierEmail from "../../../../../services/notifier";

export default function FormServiceComponent(props: any) {
    const { t, lang } = useTranslation('services');
    const [valuesForm, setValuesForm] = useState<any>({ email: config.EMAIL_ABOGA as string });

    const handleForm = async (e: any) => {
        const value = e.target.value;
        setValuesForm({ ...valuesForm, [e.target.name]: e.target.value });
    }

    const dptoSelect = props.dpto.map((item: any, index: any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const citySelect = props.city.map((item: any, index: any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const submitForm = (e:any) => {
        e.preventDefault();
        props.gaEventTracker(`Clic Contactar - Formulario ${t(`${props.typeService}.${props.service}.title`)}`);
        props.gaEventTracker(`Registro De Formulario: ${valuesForm.name}`);
        NotifierEmail(valuesForm);
    }

    useEffect(() => {
        props.setSelectDpto(valuesForm.dpto);
    }, [valuesForm.dpto]);

    return (
        <>
            <div id='Form' className={'block md:flex items-center place-content-around ' + styles.background}>
                <div className='w-full md:w-[28%] mt-0 md:-mt-36 float-none md:float-right '>
                    <div className='pb-24' data-aos="fade-up" data-aos-duration="500">
                        <img src='/images/squards_white.png' alt="Recurso-gráfico" title='recurso cuadros'/>
                    </div>

                    <div className={styles.titleP} data-aos="fade-up" data-aos-duration="1000">
                        <h4 className='text-center md:text-left'>
                            {t(`${props.typeService}.${props.service}.form.title1`)}
                            <span> {t(`${props.typeService}.${props.service}.form.titpleSpan`)} </span>
                            {t(`${props.typeService}.${props.service}.form.title2`)}
                        </h4>
                    </div>
                </div>
                <div className={'w-[80%] md:w-[45%] ml-10 '+ styles.form} data-aos="fade-up" data-aos-duration="1000">
                    <form onSubmit={submitForm}>
                        <div className={'flex justify-center '+styles.form_text}>
                            <p className='text-center w-[80%]'>
                                <span>{t('form_general.form_data.title_span')} </span>
                                {t('form_general.form_data.title')}
                            </p>
                        </div>
                        <div>
                            <select className="w-full mt-5 pl-2" name="dpto" onChange={handleForm} required>
                                <option value="">{t('form_general.form_data.dpto')}</option>
                                {dptoSelect}
                            </select>
                        </div>
                        <div>
                            <select className="w-full mt-5 pl-2" name="city" onChange={handleForm} required>
                                <option value="">{t('form_general.form_data.city')}</option>
                                {citySelect}
                            </select>
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="address" type="text" placeholder={t('form_general.form_data.address')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="name" type="text" placeholder={t('form_general.form_data.fullname')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="phone" type="number" placeholder={t('form_general.form_data.phone')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="useremail" type="email" placeholder={t('form_general.form_data.email')} onChange={handleForm} required />
                        </div>
                        <div>
                            <input className="w-full mt-5 pl-2" name="service" type="text" value={t(`${props.typeService}.${props.service}.title`)} onChange={handleForm} readOnly required />
                        </div>
                        <div className={styles.button}>
                            <button className="w-full mt-5">Contactar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
