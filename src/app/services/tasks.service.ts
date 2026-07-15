import { effect, Service, signal } from '@angular/core';
import { Task } from '../models/task.entity';

@Service()
export class TasksService {
    private readonly _tasks = signal<Array<Task>>([]);

    readonly items = this._tasks.asReadonly();

    constructor() {
        this._initializeTasks();

        effect(() => {
            const items = this._tasks();
            localStorage.setItem('tasks', JSON.stringify(items));
        });
    }

    toggleTask(taskId: string) {
        this._tasks.update((tasks) =>
            tasks.map((task) => {
                return task.id === taskId ? { ...task, completed: !task.completed } : task;
            })
        );
    }

    removeTask(taskId: string) {
        this._tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
    }

    addTask(title: string, description: string) {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title,
            description,
            completed: false
        };
        this._tasks.update((tasks) => [...tasks, newTask]);
    }

    private _initializeTasks() {
        const initialTasks: Array<Task> = localStorage.getItem('tasks')
            ? JSON.parse(localStorage.getItem('tasks')!)
            : [
            {
                id: crypto.randomUUID(),
                title: 'Task 1',
                description: 'Description for Task 1',
                completed: false
            },
            {
                id: crypto.randomUUID(),
                title: 'Task 2',
                description: 'Description for Task 2',
                completed: true
            },
            {
                id: crypto.randomUUID(),
                title: 'Task 3',
                description: 'Description for Task 3',
                completed: false
            }
        ];
        this._tasks.set(initialTasks);
    }
}


