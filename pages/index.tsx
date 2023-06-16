import type { NextPage } from 'next'
import Layout from "../components/general/layout/layout.component";
import HomeComponent from "../components/general/views/home/home.component";
import ReactGA from "react-ga4";
import Head from 'next/head';

const Home: NextPage = () => {
    ReactGA.send({ hitType: "pageview", page: "/", title: "Page: INICIO" });
  return (
    <Layout>
      <Head>
        <title>Aboga - Somos su mayor aliado legal</title>
      </Head>
      <HomeComponent/>
    </Layout>
  )
}

export default Home
