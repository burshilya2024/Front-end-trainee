'use client'
import styles from "./footer.module.css";
import Image from 'next/image';
import arrow from 'public/arrow.svg'; // Исправлен путь к файлам SVG
import arrowDown from 'public/arrow-down.svg'; // Исправлен путь к файлам SVG
import { useState } from "react";
import { Popup } from "../Popop/Popup";
import { z } from 'zod';

const emailSchema = z.string().email('Неверный формат email').min(3, 'Поле должно быть заполнено');

const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            emailSchema.parse(email);
            setEmailError('');
        } catch (error: any) {
            setEmailError(error.errors[0].message);
        }
        setShowPopup(true);
    };

    const handleScroll = () => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight, // Прокрутка на высоту окна просмотра
            behavior: 'smooth' // Плавная прокрутка
        });
    };



    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.EnterEmailWrapper}>
                <input
                    className={styles.Input}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your Email and get notified"
                />
                <button type="submit" className={styles.Button}>
                    <Image src={arrow} alt="" />
                </button>
            </form>
            <div className={styles.OtherEventsWrapper} onClick={handleScroll}>
                <p> other events </p>
                <Image className={styles.ArrowDown} src={arrowDown} alt="" />
            </div>
            {showPopup && (
                <Popup
                    message={emailError}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div >
    );
};

export default Footer;
