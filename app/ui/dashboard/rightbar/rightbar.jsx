"use client"
import Image from 'next/image';
import styles from './rightbar.module.css';
import { MdPlayCircleFilled , MdReadMore} from 'react-icons/md';

const Rightbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className={styles.button}>
                    <MdPlayCircleFilled/>
                    Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="" fill className={styles.bg} />
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}> Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <button className={styles.button}>
                    <MdReadMore/>
                    Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar