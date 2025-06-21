interface Task {
    id: number | string;
    title: string;
    completed: boolean;
  }
  
  declare const list: Task[];
  
  export default list;