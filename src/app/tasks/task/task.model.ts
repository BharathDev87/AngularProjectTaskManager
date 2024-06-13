 export interface Task 
{
  id:string;
  userId:string;
  title:string;
  summary:string;
  duedate?:string ;
}

export interface NewTaskDta{
    dueDate?: string;
    title:string;
    summary:string;
    date:string;
}