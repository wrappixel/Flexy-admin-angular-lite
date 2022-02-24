import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  color = 'accent';
  checked = false;
  disabled = false;

}
