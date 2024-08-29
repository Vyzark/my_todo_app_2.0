import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Task = {
  content: string;
  completed: boolean;
};

@Component({
  selector: 'my-to-do-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.sass',
})
export class ToDoListComponent {
  tasks: Task[] = [];
  completedTasks: number = 0;
  taskContent: string = '';

  ngOnInit() {
    // Get tasks from local storage
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    // Update completed tasks
    this.updateCompletedTasks();
}

  updateCompletedTasks() {
    this.completedTasks = this.tasks.filter((task) => task.completed).length;
  }

  updateLocalStorage() {
    this.updateCompletedTasks();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


  addTask(content: string) {
    this.tasks.push({ content, completed: false });
    this.taskContent = '';

    this.updateLocalStorage();
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);

    this.updateLocalStorage();
  }

  toggleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;

    this.updateLocalStorage();
  }

  deleteCompleted() {
    this.completedTasks = 0;
    this.tasks = this.tasks.filter((task) => !task.completed);

    this.updateLocalStorage();
  }

  deleteAllTasks() {
    this.completedTasks = 0;
    this.tasks = [];

    this.updateLocalStorage();
  }
}

//TODO: CREATE BACKEND
//TODO: INTEGRATE WITH MONGODB