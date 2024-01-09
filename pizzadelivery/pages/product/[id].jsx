import React from 'react';
import styles from '@/styles/Product.module.css';
import Image from "next/image";
import { useState } from "react";


const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "FIORI DI ZUCCA",
        price: [19.9, 23.9, 28.9],
        desc: "Mussarela derretida sobre molho de tomate fresco, complementada pelo sabor picante e defumado do pepperoni, tudo em uma crocante massa artesanal."
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>R${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Escolha o tamanho</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Pequena</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Média</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Grande</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Escolha os adicionais</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label htmlFor="double">Borda de Catupiry</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                        />
                        <label htmlFor="cheese">Queijo Extra</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                        />
                        <label htmlFor="spicy">Molho Picante</label>
                    </div>
                    <div className={styles.option}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                        />
                        <label htmlFor="garlic">Molho de Alho</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Adicionar</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
