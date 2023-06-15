import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-snipper',
  standalone: true,
  imports:[DemoFlexyModule, FormsModule, ReactiveFormsModule, CommonModule, MatCardModule, MatRadioModule, NgIf, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './progress-snipper.component.html',
  styleUrls: ['./progress-snipper.component.scss']
})
export class ProgressSnipperComponent {
  color = 'warn';
  mode: any = 'determinate';
  value: any = 50;
}
