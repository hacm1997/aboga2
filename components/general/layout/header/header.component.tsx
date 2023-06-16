import Head from "next/head";


export default function HeaderComponent(){

    return(
        <>
            <Head>
            <link rel="icon" type="image/png" sizes="50x50" href="/images/favicon.png"/>
                <meta property="og:description" content="Somos una empresa caracterizada por el compromiso en la defensa de los intereses jurídicos de las personas y empresas, con un enfoque multidisciplinar. Su caso es importante para nosotros, contáctenos."/>
                <meta property="image" content="/images/logo-portada"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content="Somos una empresa caracterizada por el compromiso en la defensa de los intereses jurídicos de las personas y empresas, con un enfoque multidisciplinar. Su caso es importante para nosotros, contáctenos."/>
                <meta name="author" content="Aboga Asesorias Jurídicas"/>
                <meta name="keywords" content="Abogado/a, Asesoría jurídica, Derecho laboral, Derecho civil, Derecho penal, Contratos, Propiedad intelectual, Leyes fiscales,
                Propiedad inmobiliaria, Derecho de familia, Regulaciones gubernamentales, Arbitraje y mediación, Litigio, Marcas comerciales, Patentes, Cumplimiento normativo, Derecho de sociedades,
                Protección de datos, Derecho mercantil, Derecho internacional"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="googlebot-news" content="index, follow"/>
                <meta name="googlebot-image" content="index, follow"/>
                <meta name="googlebot-video" content="index, follow"/>
                <link rel="canonical" href="https://aboga.com"/>
                <title>Aboga</title>
            </Head>
        </>
    );
}
