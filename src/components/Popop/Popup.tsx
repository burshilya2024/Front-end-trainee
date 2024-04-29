import React from 'react';
import styles from './popup.module.css';
import cancel from 'public/cancel.svg'
import Image from 'next/image';
interface PropsPopup {
    message: string;
    onClose: () => void;
}

export function Popup({ message, onClose }: PropsPopup) {
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.popup} onClick={onClose}>
            <div className={styles.popupContent} onClick={handleContentClick}>
                <h2 style={{ color: message ? 'red' : '' }}>{message ? "FAULT!" : 'SUCCESS!'}</h2>

                <p>{message ? message : <>You have successfully subscribed to the email newsletter</>}</p>
                <button className={styles.Close} onClick={onClose}>
                    Close
                </button>
                <button className={styles.closeButton} onClick={onClose}>
                    <Image src={cancel} alt='' />
                </button>
            </div>
        </div >
    );
}
