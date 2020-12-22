import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
@Input() name: string;
@Output() eventFromInner  = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendInnerData(): void {
  this.eventFromInner.emit(this.name);
}

}
