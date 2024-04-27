"use client"
import React, { useRef } from "react";

import styles from './accordion.module.css'
import arrowDown from 'public/arrow-down.svg'
import imagg from 'public/vercel.svg'
import Image from "next/image";
type FAQItem = {
    q: string;
    a: string;
};

type AccordionItemProps = {
    faqItem: FAQItem;
    onClick: () => void;
    isOpen: boolean;
};


export const AccordionItem = ({ faqItem, onClick, isOpen }: AccordionItemProps) => {
    const itemRef = useRef<HTMLDivElement>(null);

    return (
        <li className={styles.accordionItem}>
            <button className={styles.accordionHeader} onClick={() => onClick()}>
                {faqItem.q}
                <p> <Image alt="" src={arrowDown} className={`${styles.accordionArrow} ${isOpen ? styles.active : ""}`} /></p>
            </button>
            <div
                className={styles.accordionCollapse}
                style={
                    isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
                }
            >
                <div className={styles.accordionBody} ref={itemRef}>
                    {faqItem.a}
                    <Image src={imagg} alt="" />
                </div>
            </div>
        </li>
    );
};