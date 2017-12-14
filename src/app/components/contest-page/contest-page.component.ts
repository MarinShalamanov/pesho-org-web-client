import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Event, 
        NavigationEnd, } from '@angular/router';
  
@Component({
  selector: 'app-contest-page',
  templateUrl: './contest-page.component.html',
  styleUrls: ['./contest-page.component.css']
})
export class ContestPageComponent implements OnInit {

  public contestId: string;
  public groupId: string;

  constructor(private route: ActivatedRoute,
              private router : Router) { }
  
  ngOnInit() {
    this.getRouteParameters();
    
    this.router.events.subscribe((event : Event) => {
        this.getRouteParameters();
    });
  }
  
  private getRouteParameters() {
    this.groupId = this.route.snapshot.params.groupid;
    if (this.route.snapshot.firstChild) {
      this.contestId = this.route.snapshot.firstChild.params.contestid;
    } else {
      this.contestId = undefined;
    }
  }

}
