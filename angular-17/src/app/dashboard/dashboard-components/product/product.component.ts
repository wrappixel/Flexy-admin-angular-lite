import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  badge: string;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Deep Javiya', work: 'Frontend Devloper', project: 'Flexy Angular', priority: 'Low', badge: 'badge-info', budget: '$3.9k' },
  { id: 2, name: 'Nirav Joshi', work: 'Project Manager', project: 'Hosting Press HTML', priority: 'Medium', badge: 'badge-primary', budget: '$24.5k' },
  { id: 3, name: 'Sunil Joshi', work: 'Web Designer', project: 'Elite Admin', priority: 'High', badge: 'badge-danger', budget: '$12.8k' },
  { id: 4, name: 'Maruti Makwana', work: 'Backend Devloper', project: 'Material Pro', priority: 'Critical', badge: 'badge-success', budget: '$2.4k' },
];


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
