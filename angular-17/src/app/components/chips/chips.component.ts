import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

export interface DemoColor {
  name: string;
  color: string;
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [DemoFlexyModule, MatFormFieldModule, MatChipsModule, NgFor, MatIconModule],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  availableColors: DemoColor[] = [
    { name: 'none', color: 'gray' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }

}
