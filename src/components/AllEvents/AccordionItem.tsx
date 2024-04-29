"use client"
import React, { useRef } from "react";

import styles from './accordion.module.css'
import arrowDown from 'public/arrow-down.svg'
import Image from "next/image";
type FAQItem = {
    title: string;
    body: string;
    img: any
};

type AccordionItemProps = {
    faqItem: FAQItem;
    onClick: () => void;
    isOpen: boolean;
    id: any
};


export const AccordionItem = ({ id, faqItem, onClick, isOpen }: AccordionItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const datee = new Date()


    const containerStyle = {
        backgroundImage: `url(${faqItem.img})`,
        height: '100px',
        width: '500px',
        position: 'relative',
        zIndex: 10,
    };
    return (
        <li className={styles.accordionItem}>

            <div
                className={styles.accordionCollapse}
                style={
                    isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
                }
            >
                <div className={styles.accordionBodyWrapper}
                    ref={itemRef}><Image className={styles.accordionImage} src={faqItem.img} alt="" />
                    <div className={styles.accodionBlur}>
                        <div className={styles.accordionBody}>
                            <p className={styles.accordionTitle}>
                                {faqItem.title}
                            </p>
                            <p className={styles.accrodionDate}>24.06.2024</p>
                            <a href="https://google.com">
                                <button className={styles.accordionMoreInformation}>
                                    More information
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.backWrapper}>
                <Image src={faqItem.img} alt="" className={styles.backWrapperImages} />
                <button className={styles.accordionHeader} onClick={() => onClick()}>
                    <p>
                        {`0${id}`}
                    </p>
                    {faqItem.title}
                    <p> <Image alt="" src={arrowDown} className={`${styles.accordionArrow} ${isOpen ? styles.active : ""}`} /></p>
                </button>
            </div>
        </li>
    );
};