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
    return (
        <li className={styles.accordionItem}>
            <button className={styles.accordionHeader} onClick={() => onClick()}>
                <p>
                    {`0${id}`}
                </p>
                {faqItem.title}
                <p> <Image alt="" src={arrowDown} className={`${styles.accordionArrow} ${isOpen ? styles.active : ""}`} /></p>
            </button>
            <div
                className={styles.accordionCollapse}
                style={
                    isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
                }
            >
                <div className={styles.accordionBodyWrapper}
                    style={{
                        background: 'red'
                    }}
                    ref={itemRef}>
                    <div className={styles.accordionBody}>
                        {faqItem.title}
                        <p className={styles.accrodionText}>24.06.2024</p>
                        <button className={styles.accrodionButtonSubscribe}>
                            Subscribe
                        </button>
                    </div>
                    <Image className={styles.accordionImage} src={faqItem.img} alt="" height={200} width={200} />
                </div>
            </div>
        </li>
    );
};