import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Counter } from './screens/counter/counter';
import { Tasks } from './screens/tasks/tasks';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'counter',
        component: Counter,
    },
    {
        path: 'tasks',
        component: Tasks, 
    }
];
