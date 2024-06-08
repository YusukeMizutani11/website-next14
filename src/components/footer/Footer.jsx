import styles from './footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>aiueo</div>
            <div className={styles.text}>
                aiueo creative thoughts agency © All rights reserved.
            </div>
        </div>
    )
}

export default Footer;