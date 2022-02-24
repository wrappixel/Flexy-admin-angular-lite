import { Component, OnInit } from '@angular/core';
import * as apex from 'ng-apexcharts';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],

})
export class SalesComponent implements OnInit {

  series!: apex.ApexAxisChartSeries;
  dataLabels!: apex.ApexDataLabels;
  chart!: apex.ApexChart;
  legend!: apex.ApexLegend;
  xaxis!: apex.ApexXAxis;
  grid!: apex.ApexGrid;
  stroke!: apex.ApexStroke;
  plotOptions!: apex.ApexPlotOptions;
  fill!: apex.ApexFill;
  tooltip!: apex.ApexTooltip;

  ngOnInit(): void {
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {

    this.series = [
      {
        name: 'Ample Admin',
        data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
        color: "#fb9678",
      },
      {
        name: 'Pixel Admin',
        data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
        color: "#03c9d7",
      },
    ];
    
    this.xaxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
    
    this.chart = {
      toolbar: {
        show: false,
      },
      type: 'bar',
      height: 300,
      
    };
    
    
    this.legend = {
      show: false,
    };
    
    this.tooltip = {
      theme: "dark"
    };
    
    this.grid = {
      show: false,
    };

    this.dataLabels = {
      enabled: false,
    };

    this.stroke = {
      show: true,
      width: 5,
      colors: ['none']
    };

    this.plotOptions = {
      bar: {
        columnWidth: '45%',
        borderRadius: 6,
      },
    };
  }


}
