import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  demo: number=0;
  val = 50;
  min = 0;
  max = 100;

}
