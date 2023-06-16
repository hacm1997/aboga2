import styles from './services.module.css'
import {useState} from "react";

export default function ServicesComponent(props:any){
    const [selectedService, setSelectedService] = useState<any>(props.servicesP);
    const [id, setId] = useState('SP');

    const chooseServiceP = () => {
        setSelectedService(props.servicesP)
        props.gaEventTracker('Clic Inicio: botón servicio personas')
        setId('SP');
    }
    const chooseServiceB = () => {
        setSelectedService(props.servicesB);
        props.gaEventTracker('Clic Inicio: botón servicio empresas');
        setId('SB');
    }
    const analytic = () =>{
        props.gaEventTracker('Clic Inicio: Agendar cita 2');
    }
    const analytic2 = (name:string) =>{
        if(name === "Derecho del consumidor y competencia desleal"){
            props.gaEventTracker(`Clic Inicio: D.Consumido-comp.desleal`);
        }else{
            props.gaEventTracker(`Clic Inicio: ${name}`);
        }
    }

    return(
        <>
            <div className="pl-10 xl:pl-14 md:pl-[110px] bg-[#F2F2F2] pb-20 ">
                <div className={"pt-16 "+styles.title} data-aos="fade-right" data-aos-duration="1500">
                    <h2>{props.translate('home:services-persons.title')}</h2>
                </div>
                <div className={"flex pt-10 gap-4 "+styles.buttons_select} data-aos="fade-right" data-aos-duration="1500">
                    <button className={id === 'SP' ? styles.chooseButtons : styles.buttonNoActive} onClick={chooseServiceP}>{props.translate('home:list_services.s_persons')}</button>
                    <button className={id === 'SB' ? styles.chooseButtons : styles.buttonNoActive} onClick={chooseServiceB}>{props.translate('home:list_services.s_business')}</button>
                </div>
                <div className="grid w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[243px_243px_243px_243px_243px] 2xl:xl:grid-cols-[280px_280px_280px_280px_280px] gap-y-9 gap-x-2 pt-10 pb-16 ">
                    {Array.isArray(selectedService) ? selectedService.map((item:any, index:number) => (
                        <div key={index} className={`w-[240px] xl:w-[235px] xl:h-[300px] h-[290px] p-5 `+styles.card} 
                            data-aos="fade-up"
                            data-aos-easing="ease-in-back"
                            data-aos-delay={index*250}
                            data-aos-offset="0"
                        >
                            <div className={"flex "}>
                                <img className={styles.img_principal} src={item.img} alt="Servicios" title={item.title} />
                                <a className='w-[50%]'>
                                    <img className={styles.img_second} src={item.img_hover} alt="Servicios" title={item.title} />
                                </a>
                                <div className={item.id === "0" ? "opacity-0 "+styles.hover2 : "opacity-0 "+styles.hover}>
                                    <h3 className={"w-full pl-[18px] "+styles.title_hover}>{item.title}</h3>
                                    <a onClick={() => analytic2(item.title)} href={item.link}>
                                        <img className="pl-[18px] pt-1" src="/images/home/services/arrow_button.png" alt="Button" title={item.title} />
                                    </a>
                                </div>
                                <div className={styles.expert_back_img}>
                                    <img src={item.expert_img} alt='experto' title='Aboga experto'/>
                                </div>
                            </div>
                            <div className={item.id === "0" ? "w-full "+styles.description2 : "w-full "+styles.description}>
                                <p className="pt-4">
                                    {item.description}
                                </p>
                            </div>
                           
                            <div className={item.id === "0" ? "flex pt-10 items-center align-baseline "+ styles.title_card_extra : "flex pt-20 items-center align-baseline "+ styles.title_card}>
                                <h3 className="self-start">{item.title}</h3>
                                <img className="pl-8 w-18 h-8 " src="/images/home/services/arrow_button1.png" alt="Arrow" title={item.title} />
                            </div>

                            
                        </div>
                    )): null}
                </div>
                <div className={"flex w-[85%] "+styles.button} data-aos="fade-up">
                    <button onClick={analytic}>{props.translate('home:button')}</button>
                </div>
            </div>
        </>
    );
}
