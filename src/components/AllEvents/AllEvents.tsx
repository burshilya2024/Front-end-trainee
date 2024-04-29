'use client'
import { useEffect, useState } from "react";
import { Accordion } from "./Accordion";
import styles from "./AllEvents.module.css";
import image1 from 'public/anchor.webp'
import image2 from 'public/boat.webp'
import image3 from 'public/fishing.webp'
import image4 from 'public/lighthouse.webp'
import gavai from 'public/gavai.jpg'

export type FAQItem = {
    title: string;
    body: string;
    img: any;
};

const AllEvents = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    const faqData: FAQItem[] = [
        {
            title: "Hawaiian party",
            body: "Eius accusamus cumque officiis, tempora ipsa a.",
            img: gavai,
        },
        {
            title: "Мafia party",
            body: "Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
            img: image2,
        },
        {
            title: "Party",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image3,
        },
        {
            title: "Party on the beach",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image4,
        },
        {
            title: "Home Security",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image4,
        },
        {
            title: "Network Design & Implementation",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image4,
        },
        {
            title: "System Design & Engineering",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image4,
        },
        {
            title: "Client Care Plans",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image4,
        },
    ];

    const faqList: FAQItem[] = faqData.map(item => ({
        title: item.title,
        body: `${lorem} ${item.body}`,
        img: item.img
    }));


    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('otherEvents');
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (elementPosition < windowHeight) {
                    setAnimate(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div id="otherEvents" className={`${styles.container} ${animate ? styles.animatedPage : ''}`}>
            <h1 >ALL EVENTS</h1>
            <Accordion faqList={faqList} />
        </div>
    );
};

export default AllEvents;
