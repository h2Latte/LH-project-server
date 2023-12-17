import {Importance} from "./Importance";

export interface Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    importance: Importance | null
}