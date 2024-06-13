import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./header/header.component";
// import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy.users';
// import { TasksComponent } from "./tasks/tasks.component";
// import { TaskComponent } from './tasks/task/task.component';

@Component({
    selector: 'app-root',
    // standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,TaskComponent] 
})
export class AppComponent {
  
  title = 'offAng-App';
  users=DUMMY_USERS;
  selectedUserId!:string;

get selectedUser(){
  return this.users.find((user)=>user.id===this.selectedUserId)!;
}
onSelectUser(id:string)
{
  // console.log("selected user with id "+id);
this.selectedUserId=id;

}

}
