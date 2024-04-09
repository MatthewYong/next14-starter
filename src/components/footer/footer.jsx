import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>TestDev</div>
            <div className={styles.text}>
                Test text Test text. All right reserved.
            </div>
        </div>
    );
};

export default Footer;