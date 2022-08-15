import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }


  ngOnInit(): void{}


  enterLogin(){
    const popup = this.matDialog.open(LoginComponent, {
      enterAnimationDuration:'1000ms',
      exitAnimationDuration:'1000ms',
    });
  
    popup.afterClosed().subscribe(i=>{
      //hacer algo
    })
  }


}
