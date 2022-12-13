import styles from './index.module.scss';
import Image from 'next/image';
import coffee from '../../images/coffee.jpg';
import prom from '../../images/prom.jpg';
import airport from '../../images/airport.jpg';
import intercity from '../../images/intercity.jpg';
import privateD from '../../images/private.jpg';

const Services = () => {
  return (
    <>
      <section id="services" className={styles.services}>
        <div className={styles.inner}>
          <h2>FIRST CLASS SERVICE</h2>
          <hr />
          <p className={styles.gray}>
            Whether you need ground transportation for corporate travel,
            entertainment or special occasions, our professional chauffeurs are
            prepared to get you to your destination with an emphasis on safety,
            comfort, and reliability
          </p>
          <Image
            src={coffee.src}
            alt="coffee"
            style={{
              height: 'auto',
              width: '100%',
              maxHeight: '680px',
              maxWidth: '510px',
            }}
            height={680}
            width={510}
            quality={100}
            unoptimized
          />
        </div>
        <div className={styles.inner}>
          <p>
            Our main focus is to provide high-end ground transportation services
            from corporate travelers to special occasions
          </p>
          <Image
            src={prom.src}
            alt="prom"
            style={{
              height: 'auto',
              width: '100%',
              maxHeight: '680px',
              maxWidth: '510px',
            }}
            height={680}
            width={510}
            quality={100}
            unoptimized
          />
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.inner}>
          <h2>SERVICES</h2>
          <hr />
          <h3>AIRPORT TAXI</h3>
          <p className={styles.gray}>
            Book your airport taxi before you arrive and we will meet you at
            arrivals holding a name-plate. Flat rate price from or to the
            airport transfer without hidden fees. Free flight following and
            waiting at the airport.
          </p>
          <Image
            src={airport.src}
            alt="airport"
            style={{
              height: 'auto',
              width: '100%',
              maxHeight: '680px',
              maxWidth: '510px',
            }}
            height={680}
            width={510}
            quality={100}
            unoptimized
          />
        </div>
        <div className={styles.inner}>
          <h3>INTERCITY TRANSPORT</h3>
          <p className={styles.gray}>
            We are specialized for long-distance rides and we are at your
            service for the intercity, town to town or cross-border individual
            transfer by car. Also, you can ask for a quote for a return, waiting
            or sightseeing on the way. Serbia and region.
          </p>
          <Image
            src={intercity.src}
            alt="intercity"
            style={{
              height: 'auto',
              width: '100%',
              maxHeight: '680px',
              maxWidth: '510px',
            }}
            height={680}
            width={510}
            quality={100}
            unoptimized
          />
        </div>
      </section>
    </>
  );
};

export default Services;
