import styles from "./allies.module.css";

export default function AlliesComponent(){

    return(
        <>
            <div className="pb-10">
                <div className="flex justify-center pt-10 pb-2">
                    <h4 className={"text-[#004477] text-[28px] "+styles.title}>Conoce nuestros aliados:</h4>
                </div>

                <div className={"flex justify-center gap-8 "+styles.allies}>
                    <img src="/images/allies/kru360.png" alt="KRU360" title="KRU"/>
                    <img src="/images/allies/beamar.png" alt="BEAMER" title="BEAMAR"/>
                    <img src="/images/allies/sibla.png" alt="SIBLA" title="SIBLA"/>
                    <img src="/images/allies/wyer.png" alt="WYER" title="WYER"/>
                </div>
            </div>
        </>
    )
}