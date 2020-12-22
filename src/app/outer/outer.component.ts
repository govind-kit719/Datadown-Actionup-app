import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {
@Input() names: string[];
name: string;
@Output() eventFromOuter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  eventFromInner(passedValue: string): void{
    this.name = passedValue;
    this.eventFromOuter.emit(this.name);
  }
}
