import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  constructor(private router: Router,
              private usersService: UsersService) { }

  public users: any[] = [];
  
  ngOnInit() {
    this.usersService
      .getUsers()
      .subscribe(
        data => {
          this.users = (data as any[]).map(this.userToTableRow); 
        });
  }
    
  onRowClicked(row) {  
    this.router.navigate(['dashboard/user/' + row.ID]);
  }
  
  private userToTableRow(user) {
    return {
      ID: user.id,
      Username: user.username,
      'First Name': user.firstname, 
      'Last Name': user.lastname,
      'email': user.email,
      'Role': user.rolename
    }
  }
}

