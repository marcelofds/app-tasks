import { Component, inject } from '@angular/core';
import { Title } from "../../components/shared/title/title";
import { TasksService } from '../../services/tasks.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tasks',
  imports: [Title,  MatIconModule ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  readonly tasksService = inject(TasksService);

  AddTask(event: Event, title: HTMLInputElement, description: HTMLInputElement) {
    event.preventDefault();
    if (!title.value) {
      return;
    }
    this.tasksService.addTask(title.value, description.value);
    title.value = '';
    description.value = '';
  }
}
