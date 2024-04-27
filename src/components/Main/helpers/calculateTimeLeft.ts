interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const calculateTimeLeft = (targetDate: string): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
        const { days, hours, minutes, seconds } = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
        return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export const formatTimeUnit = (unit: number) => (unit < 10 ? `0${unit}` : unit);