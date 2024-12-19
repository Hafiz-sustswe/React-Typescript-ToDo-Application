export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

type DoneAction = {
  type: 'done'
  id: number
}

type EditAction = {
  type: 'edit'
  updatedTask: Task
}

type DeleteAction = {
  type: 'delete'
  id: number
}

export type Action = DoneAction | EditAction | DeleteAction
