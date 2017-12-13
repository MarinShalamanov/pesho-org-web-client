// Displays JSON as a table. Additional features as filtering
// and pagination are also supported.
// Example usage:
// <app-long-table 
//    paginate="true"
//    enableFilter="true"
//    [data]="data" 
//    (onRowClicked)="onRowClicked($event)">
// </app-long-table>
import { Component, OnInit, Input, 
        Output, EventEmitter, ViewChild, 
        ElementRef, SimpleChanges, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-long-table',
  templateUrl: './long-table.component.html',
  styleUrls: ['./long-table.component.css']
})
export class LongTableComponent implements OnInit, OnChanges  {
  @Input() title: string = "";
  @Input() data: any[];
  @Input() enableFilter: boolean = false;
  @Input() paginate: boolean = false;
  @Input() pageSize: number = 50;
  @Output() onRowClicked: EventEmitter<any> = new EventEmitter();
  
  
  filter:boolean = true;
  filterWords:string[] = [];
  filterInput:string;
  
  filteredIndexes:number[];
  elementsIndexesToDisplay:number[];
  @ViewChild('paginator') private paginator;

  constructor() { }

  ngOnInit() {
    this.filterData();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.filterData();
  }
  
  rowClicked(row) {
    this.onRowClicked.emit(row);
  }
  
  getFieldNames(obj) {
    return Object.keys(obj);
  }
  
  objToArray(obj) {
     return Object.keys(obj).map((key)=>{ return obj[key]});
  }
  
  onFilterChanged(event) {
    this.filterWords = 
      this.filterInput.trim()
        .split(/(\s+)/)
        .filter( function(e) { return e.trim().length > 0; } )
        .map((word) => word.toLowerCase())
    
    this.filterData();
  }
  
  onPageChanged(event) {
    this.computeElementsToDisplay();
  }
  
  private filterData() {
    this.filteredIndexes = [];
    if (this.filterWords.length == 0) {
      for (let i = 0; i < this.data.length; i++) {
        this.filteredIndexes.push(i);
      }
    } else {
      for (let i = 0; i < this.data.length; i++) {
        if (this.doesItMatch(this.data[i])) {
          this.filteredIndexes.push(i);
        }
      }
    }
    this.computeElementsToDisplay();
  }
  
  private doesItMatch(dataItem) : boolean {
    for (let filterWord of this.filterWords) {
      let matches = false;
      for (let field of this.objToArray(dataItem)) {
        if (String(field).toLowerCase().indexOf(filterWord) >= 0) {
          matches = true;
        }
      }
      if (!matches) return false;
    }
    return true;
  }
  
  private computeElementsToDisplay() {
    if (this.paginate) {
      // If the page hasn't loaded yet paginator.pageSize will 
      // be undefined. 
      let pageSize, pageIndex;
      if (this.paginator == null) {
        pageSize = this.pageSize;
        pageIndex = 0;
      } else {
        pageSize = this.paginator.pageSize || this.pageSize;
        pageIndex = this.paginator.pageIndex;
      }
      this.elementsIndexesToDisplay = [];
      let offset = pageSize * pageIndex;
      for (let i = 0; 
           i < pageSize   
            && i + offset < this.filteredIndexes.length; 
           i++) {
        this.elementsIndexesToDisplay.push(i+offset);
      }
    } else {
      this.elementsIndexesToDisplay = this.filteredIndexes;
    }
  }
}
