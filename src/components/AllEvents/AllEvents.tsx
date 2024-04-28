'use client'
import { useEffect, useState } from "react";
import { Accordion } from "./Accordion";
import styles from "./AllEvents.module.css";
import image1 from 'public/anchor.webp'
import image2 from 'public/boat.webp'
import image3 from 'public/fishing.webp'
import image4 from 'public/lighthouse.webp'

export type FAQItem = {
    title: string;
    body: string;
    img: any;
};

const AllEvents = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    const faqData: FAQItem[] = [
        {
            title: "meeting 1",
            body: "Eius accusamus cumque officiis, tempora ipsa a.",
            img: image1,
        },
        {
            title: "meeting 2",
            body: "Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
            img: image2,
        },
        {
            title: "meeting 3",
            body: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
            img: image3,
        },
        {
            title: "meeting 4",
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
            const element = document.getElementById('otherEvents'); // Замените 'yourElementId' на ID вашего целевого элемента
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
