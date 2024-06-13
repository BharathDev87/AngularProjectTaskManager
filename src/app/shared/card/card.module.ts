import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";


@NgModule({
  declarations: [CardComponent],
  //root components to run (start)
  bootstrap: [],
  imports: [],
  exports: [CardComponent]
})
export class SharedModule {}
