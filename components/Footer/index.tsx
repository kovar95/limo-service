import styles from './index.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <section>
            <h3>Novi Sad Limo Service</h3>
            <p>
              We provide transportation services in Serbia and abroad, on
              shorter and longer routes.
            </p>
          </section>
          <section id="contact">
            <h3>Contact info</h3>
            <ul className={styles.plain}>
              <li>
                <PhoneIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+381677070417"
                >
                  Phone
                </a>
              </li>
              <li>
                <WhatsAppIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+381677070417"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <InstagramIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/limousine__sevice?igshid=YmMyMTA2M2Y="
                >
                  Instagram
                </a>
              </li>
              <li>
                <LocationOnIcon />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Vardarska+1c,+Novi+Sad+21000/@45.2429489,19.8170918,17"
                >
                  Location
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className={styles.copyright}>
          &copy;{' '}
          <a href="https://github.com/kovar95" rel="noopener noreferrer">
            kovar95
          </a>
        </div>
      </div>
      <a
        className={styles.call}
        target="_blank"
        rel="noopener noreferrer"
        href="tel:+381677070417"
      >
        <PhoneIcon fontSize="medium" />
      </a>
    </footer>
  );
};

export default Footer;
