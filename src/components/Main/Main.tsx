"use client"
import styles from "./main.module.css";
import Image from 'next/image';
import timeIcon from 'public/time-red.svg'
import timeIconDesctop from 'public/time-red-desctop.svg'
import arrowIcon from 'public/arrow.svg'
import { useEffect, useState } from "react";
import { calculateTimeLeft, formatTimeUnit } from './helpers/calculateTimeLeft';
import dynamic from 'next/dynamic'
import useIsMobile from "./helpers/IsMobileHook";


interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Main = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft('2024-07-24'));
    const isMobile = useIsMobile()
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft('2024-07-24'));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { days, hours, minutes, seconds } = timeLeft;
    const dateItems = [
        { label: isMobile ? 'DD' : 'Days', icon: isMobile ? timeIcon : timeIconDesctop },
        { label: isMobile ? 'HH' : 'Hours', icon: isMobile ? timeIcon : timeIconDesctop },
        { label: isMobile ? 'MM' : 'Minutes', icon: isMobile ? timeIcon : timeIconDesctop },
        { label: isMobile ? 'SS' : 'Seconds', icon: isMobile ? timeIcon : timeIconDesctop }
    ];




    return (
        <div className={styles.container}>
            <h1 className={styles.title}>UNDER {isMobile ? <br /> : null} CONSCTURCION</h1>
            <br />
            <p className={styles.text}>We are making lots of improvements <br /> and will be back soon</p>
            <div className={styles.timeWrapper}>
                {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
                    <p>event is over!</p>
                ) : (
                    <ul className={styles.time}>
                        <li>{formatTimeUnit(days)}</li>
                        <li>{formatTimeUnit(hours)}</li>
                        <li>{formatTimeUnit(minutes)}</li>
                        <li>{formatTimeUnit(seconds)}</li>
                    </ul>
                )}
            </div>
            <div className={styles.dateWrapper}>
                {dateItems.map((item, index) => (
                    <div className={styles.date} key={index}>
                        <Image src={item.icon} alt={''} />
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
            <div className={styles.checkButton}>
                <h3>Check our event page when you wait:</h3>
                <a href="https://www.google.com">
                    <button className={styles.Button}>Go to the event <Image src={arrowIcon} alt={''} /> </button>
                </a>
            </div>

        </div>
    );
};

// export default Main
// !решает проблему гидрации в next.js
export default dynamic(() => Promise.resolve(Main), { ssr: false })