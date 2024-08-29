import { Routes } from '@angular/router';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/my-todos', pathMatch: 'full' },
    { path: 'my-todos', component: ToDoListComponent },
    { path: '**', redirectTo: '/my-todos' }
];
