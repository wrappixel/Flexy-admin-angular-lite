import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';

import {
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexStroke,
    ApexTooltip,
    ApexAxisChartSeries,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexPlotOptions,
    ApexFill,
    NgApexchartsModule,
} from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';

export interface SalesChartOption {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    grid: ApexGrid;
}

@Component({
    selector: 'app-sales-overview',
    standalone: true,
    imports: [MaterialModule, TablerIconsModule, NgApexchartsModule],
    templateUrl: './sales-overview.component.html',
})
export class AppSalesOverviewComponent {
    @ViewChild('chart') chart: ChartComponent = Object.create(null);
    public SalesChartOption!: Partial<SalesChartOption> | any;
    constructor() {
        this.SalesChartOption = {
            series: [
                {
                    name: 'Ample Admin',
                    data: [355, 390, 300, 350, 390, 180, 355, 390, 300, 350, 390, 180],
                    color: '#fb9678',
                },
                {
                    name: 'Pixel Admin',
                    data: [280, 250, 325, 215, 250, 310, 280, 250, 325, 215, 250, 310],
                    color: '#03c9d7',
                },
            ],

            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                }
            },

            yaxis: {
                show: true,
                max: 400,
            },

            chart: {
                toolbar: {
                    show: false,
                },
                type: 'bar',
                foreColor: '#adb0bb',
                fontFamily: "'DM Sans',sans-serif",
                height: 305,
            },

            legend: {
                show: false,
            },

            tooltip: {
                theme: 'dark',
            },

            grid: {
                show: true,
                borderColor: 'transparent',
                strokeDashArray: 2,
                padding: {
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
            },

            dataLabels: {
                enabled: false,
            },

            stroke: {
                show: true,
                width: 5,
                colors: ['none'],
            },

            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '42%',
                    borderRadius: 5,
                },
            },
        };
    }
}
