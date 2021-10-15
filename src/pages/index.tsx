import { useState, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import styles from "~/styles/appPage.module.css";

const HomePage: NextPage = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  });

  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.contentWrapper} ${pageLoaded ? styles.animateTranslation : ""}`}>
        <div className={`${styles.logoContainer}`}>
          <Image src="/imgs/senseiLogo.png" layout="responsive" width={180} height={180} />
        </div>
        <h3 className={`${styles.subtitle}`}>Sensei</h3>
        <h1 className={`${styles.title}`}>Maximize your Mac performance.</h1>
        <p className={`${styles.paragraph}`}>
          Introducing Sensei, a brand new way to monitor and optimize your Mac. Featuring a
          state-of-the-art realtime hardware monitoring engine, stunning modern design and powerful
          cleaning features, it’s never been easier to maximize your Mac performance.
        </p>

        <div className={`${styles.ctaContainer}`}>
          <button className={`${styles.btnPrimary}`}>Free Download</button>
          <button className={`${styles.btnPrimary}`}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
