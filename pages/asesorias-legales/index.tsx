import type { NextPage } from 'next'
import Layout from '../../components/general/layout/layout.component'
import LegalAdviceComponent from '../../components/general/views/legalAdvice/leaglAdvice.component'

const Home: NextPage = () => {
  return (
    <Layout>
      <LegalAdviceComponent/>
    </Layout>
  )
}

export default Home
