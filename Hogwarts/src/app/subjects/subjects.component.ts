import { Component, OnInit } from '@angular/core';
import { subjects } from 'src/app/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
courses = subjects;
  constructor() { }

  ngOnInit(): void {
  }

}
