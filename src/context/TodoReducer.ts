import { Task } from "../types/TodoModel";

export enum ActionType {
    LoadTasks,
    AddTask,
    UpdateTask,
    RemoveTasks,
    TasksLoaded,
    Error
}

export type TodoActions = | LoadTasks | TasksLoaded | AddTask | UpdateTask | RemoveTasks | Error;

type LoadTasks = {
    type: ActionType.LoadTasks;
}

type TasksLoaded = {
    type: ActionType.TasksLoaded;
    payload: Task[];
}


type AddTask = {
    type: ActionType.AddTask;
    payload: Task;
};

type UpdateTask = {
    type: ActionType.UpdateTask;
    payload: Task;
};

type RemoveTasks = {
    type: ActionType.RemoveTasks;
    payload: [number];
};

type Error = { type: ActionType.Error }


export const loadTasks = (): LoadTasks => ({
    type: ActionType.LoadTasks
});

export const tasksLoaded = (tasks: Task[]): TasksLoaded => ({
    type: ActionType.TasksLoaded,
    payload: tasks
})

export const addTask = (task: Task): AddTask => ({
    type: ActionType.AddTask,
    payload: task
});

export const updateTask = (task: Task): UpdateTask => ({
    type: ActionType.UpdateTask,
    payload: task
});

export const removeTasks = (ids: [number]): RemoveTasks => ({
    type: ActionType.RemoveTasks,
    payload: ids
});

export const error = (): Error => ({
    type: ActionType.Error
});

export interface ToDoState {
    tasks: Task[];
    tasksLoading: boolean;
    tasksLoaded: boolean;
    error: boolean;
}

export const initialToDoState: ToDoState = {
    tasks: [],
    tasksLoaded: false,
    tasksLoading: false,
    error: false
};
