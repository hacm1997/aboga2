import styles from './about.module.css';

export default function AboutComponent(props:any){

    return(
        <>
            <div className="flex place-content-around h-60 items-center bg-[#FFFFFF]">
                <div className={"w-[60%] md:w-[35%] "+styles.title} data-aos="fade-right">
                    <h3 className="text-3xl pl-8 ">Conozca más sobre nosotros en el siguiente video</h3>
                </div>
                <div className={"ml-10 md:-ml-8 md:w-[20%] "+styles.squard} data-aos="zoom-out" data-aos-delay={400}>
                    <img src="/images/home/squards_img.png" alt="recurso" title="squards resource" />
                </div>
                <div data-aos="fade-up" data-aos-delay={400}>
                    <img className="w-36 -mt-[185px]" src="/images/home/arrow-style.png" alt="flecha-estilo" title="recurso flech"/>
                </div>
            </div>
        </>
    );
}
