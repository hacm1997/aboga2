import styles from './packages.module.css';

export default function PackagesComponent(props:any){
    const analytics = (plan:string) =>{
        props.gaEventTracker(`Asesorias legales - Clic contratar ${plan}`);
        window.location.href = "#Form"
    }

    return(
        <>
            <div className={styles.general_content}>
                <div className="flex justify-center pt-16">
                    <h2 className="w-full p-5 md:p-0 md:w-[50%] lg:w-[45%]">{props.translate('asesorias:packages.title')}</h2>
                </div>
                <div className="flex justify-center items-center pt-10 ">
                    <div className="block p-10 md:grid md:grid-cols-[300px_300px] lg:grid-cols-[300px_300px_300px] md:gap-10 flex-wrap ">
                        {Array.isArray(props.packages_items) ? props.packages_items.map((item:any, index:number) => (
                                <div key={index} className={"mt-10 md:m-0 "+styles.cards}>
                                    <h3 className="text-center">{item.name}</h3><br/>
                                    <ul >
                                        {item.list.map((list:any, i:number) => (
                                            <li key={i} className="pt-3"> {list.item}</li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-center pt-10">
                                        <button onClick={() => analytics(item.name)} className={styles.btn}>{props.translate('asesorias:general_button2')}</button>
                                    </div>
                                </div>
                            ))
                        :null}
                    </div>
                </div>
            </div>
        </>
    );
}
