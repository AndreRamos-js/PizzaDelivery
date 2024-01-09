import React from 'react';
import Image from 'next/image';
import styles from '@/styles/PizzaCard.module.css';


const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="250" height="250" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>R$28,90</span>
      <p className={styles.desc}>
        Mussarela derretida sobre molho de tomate fresco, complementada pelo sabor picante e defumado do pepperoni,
        tudo em uma crocante massa artesanal.
      </p>
    </div>
  );
};

export default PizzaCard;
