import styles from './extraInfo.module.css';

export default function ExtraInfoComponent(props:any){
    const analytics = () =>{
        props.gaEventTracker('Asesorias legales - Clic contratar 4');
        window.location.href = "#Form"
    }

    return(
        <>
            <div className="h-auto pb-10 lg:pb-0 lg:h-[42rem]">
                <div className="flex pt-10 lg:pt-0 pb-10 lg:pb-0 justify-center items-center">
                    <div className="w-100% lg:w-[70%] flex justify-center lg:justify-normal items-center ">
                        <div className={"pl-10 pt-5 pr-10 pb-5 w-[90%] sm:w-[60%] "+styles.text1}>
                            <p>
                                {props.translate('asesorias:extra_info.text1_p1')}
                                <span> {props.translate('asesorias:extra_info.text1_p2')}</span>
                            </p>
                        </div>
                        <div className={styles.blue_line}>
                            <img className="mt-40 w-[80%]" src="/images/asesorias/trazado-azul.png" alt="Trazo" title="Trazo azul estilo" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-normal">
                    <div className={"w-[52%] flex "+styles.designs}>
                        <div>
                            <img className="w-[90%] md:mt-20 lg:mt-18" src="/images/asesorias/arrow-blue-right.png" alt="Arrow style" title="Arrow design" />
                        </div>
                        <div className={styles.squares}>
                            <img className="pl-[8rem] pt-16" src="/images/squards_white.png" alt="squares" title="squares design"/>
                        </div>
                    </div>
                    <div className={"block sm:flex rounded pl-14 sm:pl-0 pt-5 pr-10 pb-5 w-[90%] lg:w-[48%] items-center "+styles.text2}>
                        <img className="w-[60%] md:w-[60%] lg:w-[40%] ml-10 sm:-ml-0 -mt-8 lg:-ml-[125px]" src="/images/asesorias/balanza.png" alt="Balanza" title="Blanza" />
                        <div className={styles.content_text2}>
                            <p className="text-center md:text-left w-[100%] lg:w-[76%]">
                                {props.translate('asesorias:extra_info.text2')}
                            </p>
                            <div className="flex justify-center sm:justify-normal">
                                <button onClick={analytics}>{props.translate('asesorias:general_button2')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
