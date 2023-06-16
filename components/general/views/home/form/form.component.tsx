import styles from './form.module.css';
import {useEffect, useState} from "react";
import config from "../../../../../services/config";
import {useRouter} from "next/router";
import NotifierEmail from "../../../../../services/notifier";

export default function FormComponent(props:any){
    const [valuesForm, setValuesForm] = useState<any>({email:config.EMAIL_ABOGA as string});
    const router = useRouter();
    const [service, setService] = useState([]);

    const handleForm = async (e: any) => {
        const value = e.target.value;
        setValuesForm({...valuesForm, [e.target.name]: e.target.value});
    }

    const dptoSelect = props.dpto.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ));
    const citySelect = props.city.map((item:any, index:any) => (
        <option key={index} value={item}>{item}</option>
    ));

    const submitForm = (e:any) => {
        e.preventDefault();
        props.gaEventTracker(`Asesorias legales - Formulario ${props.id}`);
        props.gaEventTracker(`Registro De Formulario: ${valuesForm.name}`);
        NotifierEmail(valuesForm);
    }

    useEffect(()=>{
        props.setSelectDpto(valuesForm.dpto);
    }, [valuesForm.dpto]);

    useEffect(() => {
        if(valuesForm.type_service === "Servicio Personas"){
            setService(props.servicesP);
        }else if(valuesForm.type_service === "Servicio Empresas"){
            setService(props.servicesB);
        }else{
            setService([]);
        }
    }, [valuesForm.type_service]);

    return(
        <>
            <div id="Form" className={router.asPath === '/asesorias-legales' ? "h-[auto] block p-5 md:flex md:p-0 place-content-around items-center bg-contain bg-no-repeat "+styles.content_general_advice :
                "h-[auto] block p-5 md:flex md:p-0 place-content-around items-center bg-contain bg-no-repeat "+styles.content_general}>
                <div className={styles.title} >
                    {router.asPath === '/asesorias-legales' ?
                        <h4 className={"w-[450px] "+styles.h4_advice}>
                            {props.translate('asesorias:form.title')}
                        </h4>
                    :
                        <h4>
                            {props.translate('home:form.title')}<br/>
                            <span>{props.translate('home:form.title2')}</span>
                        </h4>
                    }
                </div>
                <div className={styles.form}>
                    <form onSubmit={submitForm}>
                        <div>
                            <select name="dpto" onChange={handleForm} required>
                                <option value="">{props.translate('home:form.inputs.dpto')}</option>
                                {dptoSelect}
                            </select>
                        </div>
                        <div>
                            <select name="city" onChange={handleForm} required>
                                <option value="">{props.translate('home:form.inputs.city')}</option>
                                {citySelect}
                            </select>
                        </div>
                        <div>
                            <input name="address" type="text" placeholder={props.translate('home:form.inputs.address')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input name="name" type="text" placeholder={props.translate('home:form.inputs.fullname')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input name="phone" type="number" placeholder={props.translate('home:form.inputs.phone')} onChange={handleForm} required/>
                        </div>
                        <div>
                            <input name="useremail" type="email" placeholder={props.translate('home:form.inputs.email')} onChange={handleForm} required/>
                        </div>
                        {router.asPath.includes('asesorias') ? 
                            <div>
                                <select name="type_service" onChange={handleForm} required>
                                    <option value="">Elige el tipo de asesoría</option>
                                    <option value="Asesoría Básica">Asesoría Básica</option>
                                    <option value="Asesoría Superior">Asesoría Superior</option>
                                    <option value="Asesoría Integral">Asesoría Integral</option>
                                </select>
                            </div>
                        :
                            <div>
                                <select name="type_service" onChange={handleForm} required>
                                    <option value="">{props.translate('home:form.inputs.type_service')}</option>
                                    <option value="Servicio Personas">Servicio Personas</option>
                                    <option value="Servicio Empresas">Servicio Empresas</option>
                                </select>
                            </div>
                        }
                        {!router.asPath.includes('asesorias') ? 
                            <div>
                                <select name="service" onChange={handleForm} required>
                                    <option value="">{props.translate('home:form.inputs.service')}</option>
                                    {service?.map((item:any, index:number) => (
                                        <option key={index} value={item.value}>
                                            {item.value}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        :
                            null
                        }
                        <div className={styles.button}>
                            <button className="w-full mt-5">Contactar</button>
                        </div>
                        
                            
                    </form>
                </div>
            </div>
        </>
    );
}
