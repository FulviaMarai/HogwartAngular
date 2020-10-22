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
  selector: 'houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
  animations: [
  		trigger('fade1', [
  			
  			transition('void =>*', [
  				style({ opacity: 0}),
  				animate(1000)
  			])
  		]),
  		trigger('fade2', [
  			
  			transition('void =>*', [
  				style({ opacity: 0}),
  				animate(1500)
  			])
  		]),
  		 trigger('fade3', [
  			
  			transition('void =>*', [
  				style({ opacity: 0}),
  				animate(2000)
  			])
  		]),
  		trigger('fade4', [
  			
  			transition('void =>*', [
  				style({ opacity: 0}),
  				animate(2500)
  			])
  		]),
  		trigger('hope', [
  			state('come', style({
  				height: '20px',
  				opacity: 0,
  				
  	  			})),
  			state('dont', style({
  				height: '65%',
  				opacity: 1,
  				top: '10%',
  				left: '1%',
  				})),
  			transition('come => dont',[
  				animate(2000)
  				]),
  			transition('dont => come',[
  				animate(2000)
  				]),
  		]),
  		
 ],

})

export class HousesComponent implements OnInit {
 
 isOpen = true;

 
  constructor() { }


 toggle(){
  	this.isOpen = !this.isOpen;
  }

  ngOnInit(){
  }

}
