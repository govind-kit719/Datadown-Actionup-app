import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.css']
})
export class MaincontainerComponent implements OnInit {
names = ['mark', 'peter', 'paul'];
name: string;
  constructor() { }

  ngOnInit(): void {
  }
  eventFromOuter(passedName: string): void{
    this.name = passedName;
  }
}
