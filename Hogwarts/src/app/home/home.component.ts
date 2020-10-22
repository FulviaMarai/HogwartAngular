import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  	trigger('dragon',[
  		state('fire', style({
  			height: '20px',
  			opacity: 0,
  		})),
  		state('water', style({
  			height: '70%',
  			opacity: 1,
  			bottom: '-39%',
  			left: '15%',
  		})),
  		state('other', style({
  			opacity:0,
  		})),
  		state('otherdragon', style({
  			height: '20%',
  			opacity: 1,
  			bottom: '30%',
  			left: '40px',
  		})),
  		transition('fire => water',[
  			animate(2000)
  			]),
   		transition('water => fire',[
  			animate(2000)
  			]),
   		transition('other => otherdragon',[
   			animate(8000)	
   			]),
   		transition('otherdragon => other',[
   			animate(8000)
   			]),
  	]),

  ],
})



export class HomeComponent implements OnInit {

isOpen = true;

  constructor() { }

  toggle(){
  	this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
