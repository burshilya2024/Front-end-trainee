import { Accordion } from "./Accordion";
import styles from "./AllEvents.module.css";

export type FAQItem = {
    q: string;
    a: string;
};

const AllEvents = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    const faqData: FAQItem[] = [
        {
            q: "Lorem ipsum dolor sit amet",
            a: "Eius accusamus cumque officiis, tempora ipsa a.",
        },
        {
            q: "Lorem ipsum dolor sit amet edo bere",
            a: "Eius accusamus cumque officiis, tempora. Lorem ipsum dolor sit amet edo bere",
        },
        {
            q: "Lorem cotun cedas sit amet wer bere",
            a: "Illum, vero natus rerum accusamus molestiae blanditiis dignissimos architecto eius corporis pariatur, quod sint perferendis praesentium eveniet debitis iure. Inventore, voluptatum temporibus.",
        },
    ];

    const faqList: FAQItem[] = faqData.map(item => ({
        q: item.q,
        a: `${lorem} ${item.a}`,
    }));

    return (
        <div id="otherEvents" className={styles.container}>
            <h1>ALL EVENTS</h1>
            <Accordion faqList={faqList} />
        </div>
    );
};

export default AllEvents;
