import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { crew } from '../crew';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
crew = crew;

  constructor() { }

  ngOnInit(): void {
  	
  }

}
