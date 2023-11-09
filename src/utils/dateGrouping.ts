import { Message } from "./apiTransformers";

export interface GroupedMessages {
    day: string;
    messages: Message[];
}

export enum Months {
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
}

export function groupMessagesByDay(messages: Message[]): GroupedMessages[] {
    const grouped: { [key: string]: Message[] } = {};

    messages.forEach((message) => {
        const date = new Date(message.time);
        const day = `${date.getDate()} ${Months[date.getMonth()]}`;

        if (!grouped[day]) {
            grouped[day] = [];
        }

        grouped[day].push(message);
    });

    const result: GroupedMessages[] = Object.keys(grouped).map((day) => ({
        day,
        messages: grouped[day],
    }));

    return result;
}
