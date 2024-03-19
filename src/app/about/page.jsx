import Image from "next/image";
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                {/*<Image src="/about.jpg" alt="" fill/>*/}
                <Image src="https://images.pexels.com/photos/20608917/pexels-photo-20608917/free-photo-of-a-motorcycle-parked-in-front-of-a-building-with-a-flower-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill/>
            </div>
        </div>
    );
};

export default AboutPage;