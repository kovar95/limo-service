import Head from 'next/head';
import GalleryComponent from '../components/Gallery';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Limo Service Gallery</title>
        <meta
          name="description"
          content="Novi Sad Limo Service | Gallery Page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryComponent />
    </>
  );
}
