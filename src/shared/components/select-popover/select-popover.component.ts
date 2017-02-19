import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { SelectOption } from './select-popover.types';

@Component({
  templateUrl: 'select-popover.html'
})
export class SelectPopoverComponent {
  title: string;
  options: SelectOption[];
  value: any;

  constructor(public viewCtrl: ViewController) {}

  ngOnInit(): void {
    this.title = this.viewCtrl.data.title;
    this.options = this.viewCtrl.data.options;
    this.value = this.viewCtrl.data.value;
  }

  close(value?: any): void {
    this.viewCtrl.dismiss(value);
  }
}
