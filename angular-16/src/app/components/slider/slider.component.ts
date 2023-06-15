import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [DemoFlexyModule, FormsModule, ReactiveFormsModule, MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  demo: number = 0;
  val = 50;
  min = 0;
  max = 100;

  constructor() { }
}
