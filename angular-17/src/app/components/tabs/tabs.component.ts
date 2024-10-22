import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [DemoFlexyModule, MatTabsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
