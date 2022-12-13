import Image from 'next/image';
import styles from './index.module.scss';
import logo from '../../images/logo.png';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="./">
        <Image
          src={logo.src}
          alt="airport"
          style={{
            margin: '3px 10px',
          }}
          height={40}
          width={100}
          quality={100}
          unoptimized
        />
      </Link>

      <div className={styles.navigation}>
        <div>
          <Link href="./">HOME</Link>|<Link href="./gallery">GALLERY</Link>|
          <Link href="#contact">CONTACT</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
