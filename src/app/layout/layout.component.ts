import { Component,  OnInit } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  ngOnInit(): void {
    document.body.className='bg-gradient-primary'

  }

}
