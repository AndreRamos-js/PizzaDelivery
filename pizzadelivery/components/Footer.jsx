import React from 'react';
import styles from '@/styles/Footer.module.css';
import Image from "next/image";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ENCONTRE A PERFEIÇÃO EM CADA MORDIDA, ONDE A TRADIÇÃO SE UNE À INOVAÇÃO.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>CONHEÇA NOSSAS PIZZARIAS</h1>
          <p className={styles.text}>
            Rua Exemplo, 123
            <br /> (00) 1234-5678
          </p>
          <p className={styles.text}>
            Rua Bandeira Branca, 1745
            <br /> (00) 4321-1234
          </p>
          <p className={styles.text}>
            Rua do Elefante, 824
            <br /> (00) 5678-1234
          </p>
          <p className={styles.text}>
            Avenida Castor Bravo, 2314
            <br /> (00) 8765-4321
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORÁRIOS</h1>
          <p className={styles.text}>
            SEGUNDA A SEXTA
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SÁBADO - DOMINGO
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
