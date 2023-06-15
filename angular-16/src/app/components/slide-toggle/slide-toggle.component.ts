import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [DemoFlexyModule, FormsModule, MatCardModule, MatRadioModule, MatCheckboxModule, MatSlideToggleModule],
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})
export class SlideToggleComponent {
  color = 'accent';
  checked = false;
  disabled = false;
}
