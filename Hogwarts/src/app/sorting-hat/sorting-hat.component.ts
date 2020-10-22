import { Component, OnInit } from '@angular/core';
import { hauses } from '../subjects';



@Component({
  selector: 'app-sorting-hat',
  templateUrl: './sorting-hat.component.html',
  styleUrls: ['./sorting-hat.component.css']
})
export class SortingHatComponent implements OnInit {
  haus=hauses;
  item;

  bol : boolean;
  constructor() { }

  ngOnInit(): void {
  }
  

  choosingHat(){
    this.item = hauses[Math.floor(Math.random() * hauses.length)];
    this.bol = true;
    setTimeout(function(){
      this.bol = false
    },500)

  }

}
