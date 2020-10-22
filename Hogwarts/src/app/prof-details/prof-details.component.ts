import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { crew } from '../crew';

@Component({
  selector: 'prof-details',
  templateUrl: './prof-details.component.html',
  styleUrls: ['./prof-details.component.css']
})
export class ProfDetailsComponent implements OnInit {
	crew;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
this.route.paramMap.subscribe(params => {
   this.crew = crew[+params.get('crewId')];
});

  }

}
