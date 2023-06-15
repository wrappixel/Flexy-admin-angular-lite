import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoFlexyModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent { }
