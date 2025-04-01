import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowPictures= false;
  showPictures = "No Pictures Available";
  destination= '';

  constructor(){
    setTimeout(() => {
      this.allowPictures = true
    },2000)
  }

  onShowPictures(){
    this.showPictures="Pictures are Displayed!"
  }
   onUpdateCountry(event: any){
    this.destination = event.target.value ;
    // console.log(event)
  }
}
