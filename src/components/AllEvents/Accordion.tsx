'use client'
import React, { useState } from "react";

import styles from './accordion.module.css'
import { AccordionItem } from "./AccordionItem";
import { FAQItem } from "./AllEvents";


type AccordionProps = {
    faqList: FAQItem[];
};


export const Accordion = ({ faqList }: AccordionProps) => {
    const [openId, setId] = useState(null);

    return (
        <ul className={styles.accordion}>
            {faqList.map((faqItem, id: number | any) => {
                return (
                    <AccordionItem
                        onClick={() => (id === openId ? setId(null) : setId(id))}
                        faqItem={faqItem}
                        isOpen={id === openId}
                        key={id}
                        id={id}
                    />
                );
            })}
        </ul>
    );
};

