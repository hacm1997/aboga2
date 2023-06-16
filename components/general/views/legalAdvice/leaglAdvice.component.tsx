import styles from './home.module.css';
import {useEffect, useState} from "react";
import axios from "axios";
import useTranslation from 'next-translate/useTranslation';
import FormComponent from '../home/form/form.component';
import BannerAdviceComponent from './principalBanner/banner.component';
import PackagesComponent from "./packages/packages.component";
import ExtraInfoComponent from "./extraInfo/extraInfo.component";
import useAnalyticsEventTracker from "../../../../services/analytics/useAnalyticsEventTracker";
import AlliesComponent from '../../../conent/allies/allies.component';

export default function LegalAdviceComponent(){
    const {t, lang} = useTranslation('');
    const packages_items = t<any>("asesorias:packages.list_packages", {}, {returnObjects: true});
    const gaEventTracker = useAnalyticsEventTracker('Asesorias legales');
    const colData = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
    const [dataCol, setDataCol] = useState<Array<any>>([]);
    const [dpto, setDpto] = useState<Array<any>>([]);
    const city: any[] = [];
    const [selectDpto, setSelectDpto] = useState('');

    const getDataColombia = () => {
        axios.get(colData)
            .then(function (res) {
                    setDataCol(res.data)
                    //console.log("DATOS => ", res.data);
                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }

    const getDptos = async () => {
        for (let d = 0; d < dataCol.length; d++) {
            if (dpto.includes(dataCol[d]['departamento'])) {

            } else {
                dpto.push(dataCol[d]['departamento']);
            }

        }
        const selectCity = async () => {
            for (let m = 0; m < dataCol.length; m++) {
                if (dataCol[m]["departamento"] === selectDpto) {
                    //console.log("hola mundo xd")
                    city.push(dataCol[m]["municipio"]);
                }
            }
        }
        selectCity()
    }
    getDptos()
    if (selectDpto === "Bolívar") {
        city.unshift("Cartagena")
    }

    useEffect(() => {
        getDataColombia();
    }, []);

    return(
        <>
            <BannerAdviceComponent translate={t} gaEventTracker={gaEventTracker}/>
            <PackagesComponent translate={t} packages_items={packages_items} gaEventTracker={gaEventTracker}/>
            <ExtraInfoComponent translate={t} gaEventTracker={gaEventTracker}/>
            <AlliesComponent/>
            <FormComponent translate={t} setSelectDpto={setSelectDpto} dpto={dpto} city={city} gaEventTracker={gaEventTracker} id={'Aseosrias legales'}/>
        </>
    );
}
