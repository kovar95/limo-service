import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import pictures from '../../images/gallery';
import styles from './index.module.scss';

const Gallery = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [picNum, setPicNum] = useState<number>(0);

  const previousPic = () =>
    setPicNum((currentNumber) =>
      currentNumber === 0 ? 14 : currentNumber - 1
    );

  const nextPic = () =>
    setPicNum((currentNumber) =>
      currentNumber === 14 ? 0 : currentNumber + 1
    );

  const openImage = (num: number) => {
    setPreview(true);
    setPicNum(num);
  };

  return (
    <div className={styles.gallery}>
      <h1>Gallery</h1>
      {pictures.map((pic, index) => (
        <div
          className={styles.image}
          key={index}
          onClick={() => openImage(index)}
        >
          <picture>
            <source srcSet={pic.src} type="image/webp" />
            <img src={pic.src} alt="Car picture preview" />
          </picture>
        </div>
      ))}

      {preview && (
        <div className={styles['preview-outer']}>
          <div className="preview-inner">
            <picture>
              <source srcSet={pictures[picNum].src} type="image/webp" />
              <img src={pictures[picNum].src} alt="Car picture preview" />
            </picture>
            <span className="arrow-left" onClick={() => previousPic()}>
              <ChevronLeftIcon />
            </span>
            <span className="arrow-right" onClick={() => nextPic()}>
              <ChevronRightIcon />
            </span>
          </div>
          <span
            className={styles['close-preview']}
            onClick={() => setPreview(false)}
          >
            <CloseIcon fontSize="large" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
