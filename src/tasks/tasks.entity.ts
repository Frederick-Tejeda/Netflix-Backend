export enum TaskStatus {
  In_Progress = 'In Progress',
  Pending = 'Pending',
  Done = 'Done',
}
export class Task {
  id: string;
  content: string;
  author: string;
  title: string;
  status: TaskStatus;
}
