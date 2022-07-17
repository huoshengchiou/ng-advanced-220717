import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ori_body_class=document.body.className
  constructor() {
  }

  ngOnInit(): void {
    document.body.className='bg-gradient-primary'

  }

  ngOnDestroy(): void {
    document.body.className=this.ori_body_class

  }

}
