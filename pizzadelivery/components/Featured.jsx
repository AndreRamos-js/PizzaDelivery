import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Featured.module.css'


const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ]

  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}}>
            <Image src="/img/arrowl.png" alt='seta para esquerda' layout='fill'/>
        </div>

        <div className={styles.wrapper}>
            {images.map((img, i) => (
                <div className={styles.imgContainer} key={i}>
                    <Image src={img} alt='' layout='fill'></Image>
                </div>
            ))}
        </div>

        <div className={styles.arrowContainer} style={{right:0}}>
            <Image src="/img/arrowr.png" alt='seta para direita' layout='fill'/>
        </div>
    </div>
  )
}

export default Featured;
