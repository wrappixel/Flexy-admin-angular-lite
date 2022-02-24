import { Component, OnInit } from '@angular/core';

interface alerts {
  border: string;
  background: string;
  color: string;
  icon: string;
  iconColor: string;
  message: string;
}

interface desc {
  background: string,
  color: string,
  icon: string,
  iconColor: string,
  heading: string,
  title: string,
  subheading: string,
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alerts: alerts[] = [
    {
      border: "alert-border-danger",
      background: "alert-danger",
      color: "alert-text-danger",
      icon: "alert-circle",
      iconColor: "text-danger",
      message: "This is an error alert — check it out!",
    },
    {
      border: "alert-border-warning",
      background: "alert-warning",
      color: "alert-text-warning",
      icon: "alert-triangle",
      iconColor: "text-warning",
      message: "This is a warning alert — check it out!",
    },
    {
      border: "alert-border-info",
      background: "alert-info",
      color: "alert-text-info",
      icon: "info",
      iconColor: "text-info",
      message: "This is an info alert — check it out!",
    },
    {
      border: "alert-border-success",
      background: "alert-success",
      color: "alert-text-success",
      icon: "check-circle",
      iconColor: "text-success",
      message: "This is an success alert — check it out!",
    },
  ]


  desc: desc[] = [
    {
      background: "alert-danger",
      color: "alert-text-danger",
      icon: "alert-circle",
      iconColor: "text-danger",
      heading: "Error",
      title: "This is an error alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-warning",
      color: "alert-text-warning",
      icon: "alert-triangle",
      iconColor: "text-warning",
      heading: "Warning",
      title: "This is an warning alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-info",
      color: "alert-text-info",
      icon: "info",
      iconColor: "text-info",
      heading: "Info",
      title: "This is an info alert —",
      subheading: "check it out!",
    },
    {
      background: "alert-success",
      color: "alert-text-success",
      icon: "check-circle",
      iconColor: "text-success",
      heading: "Success",
      title: "This is an success alert —",
      subheading: "check it out!",
    },
  ]

}
