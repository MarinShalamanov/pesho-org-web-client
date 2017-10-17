import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-code',
  templateUrl: './submit-code.component.html',
  styleUrls: ['./submit-code.component.css']
})
export class SubmitCodeComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  langs = [
    {value: 'cpp', viewValue: 'C++'},
    {value: 'node', viewValue: 'NodeJS'},
    {value: 'java', viewValue: 'Java'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
