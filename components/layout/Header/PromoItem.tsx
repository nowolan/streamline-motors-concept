import { useEffect, useState } from "react";

import styles from "./Header.module.css";

export default function PromoItem({ imgLo, imgHi }) {
  const [loadedImage, setLoadedImage] = useState(
    "https://i.gifer.com/ZKZg.gif"
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log("loading");
  }, []);

  if (isLoading == true) {
    if (imgLo && !imgHi) {
      setIsLoading(false);
      setLoadedImage(imgLo);
    } else if (imgHi) {
      setIsLoading(false);
      setLoadedImage(imgHi);
    }
  }

  return (
    <a className={styles.promoItem} href={loadedImage} target="_blank">
      <img className={styles.carouselImg} src={loadedImage} />
    </a>
  );
}
