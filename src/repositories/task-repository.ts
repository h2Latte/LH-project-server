import {Task} from "../model/Task";
import {prisma} from "../prisma";

export async function getTasks(): Promise<Task[]> {
    return prisma.tasks.findMany();
}

export async function addTask(newTask: Task): Promise<Task> {
    return prisma.tasks.create({
        data: newTask
    });
}

export async function removeTask(taskId: string): Promise<void>{
    prisma.tasks.delete({
        where: {
            id : taskId
        }
    });
}