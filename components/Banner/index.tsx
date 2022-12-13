import Link from 'next/link';
import styles from './index.module.scss';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <h1>NOVI SAD LIMO SERVICE</h1>
        <p>Need a ride? You&apos;ve come to the right place!</p>
        <div>
          <Link href="#services">
            <button>Our services</button>
          </Link>
          <Link href="#contact">
            <button className={styles.last}>Make a ride</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
