import { Component, OnInit } from '@angular/core';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "btn-danger",
    },
    {
      image: "assets/images/u3.webp",
      btn: "btn-warning",
    },
    {
      image: "assets/images/u4.webp",
      btn: "btn-info",
    },
  ]

}
