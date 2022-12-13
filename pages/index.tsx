import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Services from '../components/Services';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Limo Service Novi Sad | Taxi Service</title>
        <meta
          name="description"
          content="Novi Sad Limousine (Limo) and Taxi Service - Private Taxi"
        />
        <meta
          name="keywords"
          content="novi sad limo service, novi sad, limo service, limousine service, taxi service, private taxi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Services />
      </main>
    </div>
  );
}
