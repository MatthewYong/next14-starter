import Image from "next/image";
import styles from './postCard.module.css'
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                  <Image src="https://images.pexels.com/photos/20888059/pexels-photo-20888059/free-photo-of-view-of-a-canal-and-basilica-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Random text random text Random text random text Random text random text Random text random text Random text random text Random text random text</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard