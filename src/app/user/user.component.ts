import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';
// import { CardComponent } from "../shared/card/card.component";

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    // imports: [CardComponent]
})
export class UserComponent {
  
  // selectedUsers=DUMMY_USERS[randomIndex];

  // get imagePath(){

  //   return 'assets/Avatars/'+this.selectedUsers.avatar; 
  // @Input({required:true}) id!:String;
  // @Input({required:true}) avatar!:String;
  // @Input({required:true}) name!:String;
 @Input({required:true}) user!:{
  id:String;
  avatar:String;
  name:String;
 };

@Input({required:true}) selected!:boolean;


  @Output() select =new EventEmitter();
  // }

  onSelectedUser(){

    // console.log("ven");
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUsers=DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }

  get imagePath(){
    return 'assets/Avatars/'+this.user.avatar; 
  }

}
































