import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'


export default function Home() {
  return (
    <div className='{styles.container}'>
      <Head>
        <title>Pizza Delivery</title>
        <meta name="description" content="O melhor do sabor da cidade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList/>
    </div>
  )
}
