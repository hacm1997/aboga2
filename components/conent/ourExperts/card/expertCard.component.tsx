import styles from './expertCard.module.css';
import Image from "next/image";

export default function ExpertCardComponent(props:any){

    return(
        <>
            <div className={"block md:flex justify-center items-center "+ styles.general_content}>
                <div className={styles.expertImg}>
                    <img src={props.photo} alt={props.name} title={props.name}/>
                </div>
                <div className={"flex items-center gap-10 "+styles.card}>
                    <div className={"w-[62%] "+styles.info}>
                        <h5>{props.name}</h5>
                        <p><strong>{props.position}</strong></p>
                        <p>{props.ability}</p><br/>
                        <p>{props.description}</p>
                    </div>
                    <div className={"w-40% "+styles.extra_info}>
                        <div className={"flex gap-4 "+styles.exp}>
                            <div className="flex justify-center">
                                <p>{props.years_exp}</p>
                            </div>
                            <p>{props.experience}</p>
                        </div>
                        <div className="flex justify-center pt-16 -ml-[30px]">
                            <img className="w-[50px]" src="/images/experts/recurso-dising.png" alt="Cuadros" title={"aboga diseños"}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
