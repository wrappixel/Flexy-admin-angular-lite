import { CdkScrollable } from '@angular/cdk/scrolling';
import { NgFor } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule } from '@angular/material/tooltip';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports:[DemoFlexyModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, NgFor, CdkScrollable, MatButtonModule, MatTooltipModule],
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }],
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
