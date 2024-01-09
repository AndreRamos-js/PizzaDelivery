import React from 'react';
import styles from '@/styles/PizzaList.module.css';
import PizzaCard from "./PizzaCard"


const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A MELHOR PIZZA DA CIDADE</h1>
      <p className={styles.desc}>
      Sabor excepcional na sua porta! Delicie-se com nossas pizzas artesanais,
      preparadas com ingredientes frescos e uma massa irresistível.
      Oferecemos uma variedade de sabores para agradar a todos os paladares.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
