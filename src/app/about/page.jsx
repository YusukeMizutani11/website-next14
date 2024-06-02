import Image from "next/image";
import styles from './about.module.css';

const AboutPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>
                    We create digital ideas that are bigger, bolder, braver and better
                </h1>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, bolder, braver and better. Digital is at the core of everything we do. We 
                    work believe in good ideas flexibility and precision. We are here to help you tell your story and share it with the world.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="About Image"
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default AboutPage;