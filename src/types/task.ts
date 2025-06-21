export interface Task {
    id: string | number;
    title: string;
    completed: boolean;
}

export interface State {
    list: Task[] | null;
}

export interface ChangeTask {
    id: string | number;
    status: boolean;
}