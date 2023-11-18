import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  username = 'Shalu';

  updateUsername(event: Event){
  this.username = (<HTMLInputElement>event.target).value;
  }

  reset(){
    if(this.username !== ""){
      this.username = ""

    }
  }
}
