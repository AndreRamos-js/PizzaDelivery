import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";


const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Produto</th>
                        <th>Nome</th>
                        <th>Adicionais</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src="/img/pizza.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>FIORI DI ZUCCA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Borda de Catupiry, Molho Picante
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>R$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$39.80</span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                    src="/img/pizza.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>FIORI DI ZUCCA</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Borda de Catupiry, Molho Picante
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>R$19.90</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>R$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CARRINHO</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>R$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Desconto:</b>R$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>R$79.60
                    </div>
                    <button className={styles.button}>FINALIZAR PEDIDO</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
