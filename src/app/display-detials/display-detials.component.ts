import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-detials',
  templateUrl: './display-detials.component.html',
  styleUrls: ['./display-detials.component.css']
})
export class DisplayDetialsComponent implements OnInit {

  toggle = true;
  constructor() { 
   // this.toggle = Math.random() > 0.5 ? false : true;
  }

  ngOnInit(): void {
  }

  getToggle(){
    console.log("toggle: " + this.toggle);
    this.toggle = !this.toggle;
    return this.toggle;
  }

}
