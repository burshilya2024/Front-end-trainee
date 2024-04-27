import styles from "./header.module.css";
import Image from 'next/image';
import HeaderIcon from 'public/header.svg';
import left from 'public/Vector-left.svg';
import right from 'public/Vector-right.svg';

const Header = () => {
    return (
        <div className={styles.container}>
            <div> <Image src={left} alt={''} className={styles.leftImage} /></div>
            <div> <Image src={right} alt={''} className={styles.rightImage} /></div>
            <div className={styles.headerContent}>
                <Image src={HeaderIcon} alt={''} className={styles.headerIcon} />
                <div className={styles.headerText}>
                    <h1 className={styles.headerTitle}>LEAD</h1>
                    <p className={styles.headerSubtitle}>ADVISORS</p>
                </div>
            </div>
        </div>
    );
};

export default Header;