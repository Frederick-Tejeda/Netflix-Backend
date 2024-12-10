import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';

@Injectable()
export class TasksService {
  private data: Task[] = [
    {
      id: '1',
      author: 'Frederf',
      content: 'Some content',
      title: 'First task',
      status: TaskStatus.Done,
    },
  ];

  GetUsers() {
    return this.data;
  }
  CreateUser(title: string, content: string, author: string) {
    const task = {
      title,
      content,
      author,
      id: new Date().toISOString(),
      status: TaskStatus.Pending,
    };
    this.data.push(task);
    return this.data;
  }
  UpdateUser() {}
  DeleteUser() {}
}
