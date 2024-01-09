import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt='icone de telefone' width='32' height='32'></Image>
            </div>
            <div className={styles.texts}>
                <div className={styles.text}>PEÇA JÁ!</div>
                <div className={styles.text}>1234-5678</div>
            </div>
        </div>

        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Página Principal</li>
                <li className={styles.listItem}>Produtos</li>
                <li className={styles.listItem}>Menu</li>
                <Image src="/img/logo.png" alt='logo' width='100' height='100'></Image>
                <li className={styles.listItem}>Eventos</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contato</li>
            </ul>
        </div>

        <div className={styles.item}>
            <div className={styles.cart}>
                <Image src="/img/cart.png" alt='logo' width='30' height='30'></Image>
                <div className={styles.counter}>2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;