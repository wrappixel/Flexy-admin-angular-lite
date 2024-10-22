import { Component, OnInit } from '@angular/core';

interface activity {
  time: string;
  ringColor: string;
  message: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activity: activity [] = [
    {
      time: "09.50",
      ringColor: "ring-success",
      message: "Meeting with John",
    },
    {
      time: "09.46",
      ringColor: "ring-primary",
      message: "Payment received from John Doe of $385.90",
    },
    {
      time: "09.47",
      ringColor: "ring-info",
      message: "Project Meeting",
    },
    {
      time: "09.48",
      ringColor: "ring-warning",
      message: "New Sale recorded #ML-3467",
    },
    {
      time: "09.49",
      ringColor: "ring-danger",
      message: "Payment was made of $64.95 to Michael Anderson",
    },
  ]
  
}
