import styles from "./footer.module.css";
import Image from 'next/image';

import arrow from 'public/arrow.svg'
import arrowDown from 'public/arrow-down.svg'
const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.EnterEmailWrapper}>
                <input className={styles.Input} type="text" placeholder="Enter your Email and get notified" />
                <button className={styles.Button}><Image src={arrow} alt="" /></button>
            </div>
            <a href="#otherEvents" className={styles.OtherEventsWrapper}>
                <p> other events </p>
                <Image className={styles.ArrowDown} src={arrowDown} alt="" />
            </a>

        </div>
    );
};

export default Footer;