import styles from './banner.module.css';

export default function BannerAdviceComponent(props: any) {
    const analytics = () =>{
        props.gaEventTracker(`Asesorias legales - Clic Agendar cita 1`);
    }

    return (
        <>
            <div className={styles.content}>
                <div className={"block md:flex items-center gap-10 pt-40 w-full -mt-32 " + styles.general}>
                    <div className={"w-[50%] md:-mt-[150px] lg:-mt-[0px] " + styles.texts}>
                        <h1 className={"pl-32 w-4/4 sm:pl-18 " + styles.title}>
                            {props.translate('asesorias:banner_content.title')}
                        </h1>
                        <p className={"pl-32 w-4/4 pt-4 sm:pl-18 " + styles.description}>
                            {props.translate('asesorias:banner_content.description')}
                        </p>
                        <div className={"pl-32 w-4/4 pt-4 sm:pl-18 " + styles.button}>
                            <a onClick={analytics} href='#Form'>
                                <button>
                                    {props.translate('home:button')}
                                </button>
                            </a>
                        </div>
                        <div className="pl-32 w-[18rem] pt-4 sm:pl-18 relative top-[203px] hidden md:block">
                            <img
                                src="/images/arrow-style.png"
                                alt="Arrow left"
                                title="Arrow left"
                            />
                        </div>
                    </div>
                    <div className={"bg-[url('/images/asesorias/background-asesorias-banner.png')] w-[90%] lg:w-[50%] xl:w-[50%] mt-3 md:-mt-36 bg-no-repeat " + styles.experts_content}>
                        <img className="float-left mt-10 md-0 pl-8 md:pl-10 w-full md:pt-[150px] md:w-[80%] "
                            src={props.translate('asesorias:banner_content.image')}
                            alt={props.translate('asesorias:banner_content.alt')}
                            title={props.translate('asesorias:banner_content.alt')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
