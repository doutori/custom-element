import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="clickEv()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      font-size: 16px;
      padding: 10px 20px;
      background: darkorange;
      text-align: center;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})
export class ButtonComponent implements OnInit {
  private num: number = 0;
  constructor() {}

  @Output() action: EventEmitter<number> = new EventEmitter<number>();

  clickEv() {
    this.num++;
    this.action.emit(this.num);
  }

  ngOnInit() {
  }

}
