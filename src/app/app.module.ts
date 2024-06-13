import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //run correctly and includs pipes also

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/card.module';
import { TasksComponent } from './tasks/tasks.component';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    UserComponent
  ],
  //root components to run (start)
  bootstrap: [AppComponent],
  imports: [BrowserModule,RouterOutlet,SharedModule,TasksModule],
})
export class AppModule {}
