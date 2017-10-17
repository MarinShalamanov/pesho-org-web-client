import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-submission-details',
  templateUrl: './submission-details.component.html',
  styleUrls: ['./submission-details.component.css']
})
export class SubmissionDetailsComponent implements OnInit {
  testsDataSource = new ExampleDataSource();
  displayedColumns = ['step', 'status', 'reason', 'time', 'input', 'output'];
  id = 123;
  time = '017-04-06 06:38:53 +0000 UTC';
  problem = 'Kолежка';
  language = 'java';
  verdict = 'Accepted';
  user = 'marin';
  
  constructor() { }

  ngOnInit() {
  }
  
}

export interface Element {
  step: string;
  status: string;
  reason: string;
  time: string;
  input: string;
  output: string;
}

const data: Element[] = [
  {step: 'Test #1', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #2', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #3', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #4', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #5', status: 'Fail', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #6', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #7', status: 'Fail', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #8', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #9', status: 'OK', reason: '', time: '423', input: '', output: ''},
  {step: 'Test #10', status: 'OK', reason: '', time: '423', input: '', output: ''},
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}