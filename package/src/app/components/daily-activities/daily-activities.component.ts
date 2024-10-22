import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from '../../material.module';
import { FeatherModule } from 'angular-feather';

interface stats {
    id: number;
    time: string;
    color: string;
    title?: string;
    subtext?: string;
    link?: string;
}

@Component({
    selector: 'app-daily-activities',
    standalone: true,
    imports: [NgApexchartsModule, MaterialModule, FeatherModule],
    templateUrl: './daily-activities.component.html',
})
export class AppDailyActivitiesComponent {
    stats: stats[] = [
        {
            id: 1,
            time: '09.30 am',
            color: 'primary',
            subtext: 'Payment received from John Doe of $385.90',
        },
        {
            id: 2,
            time: '10.30 am',
            color: 'accent',
            title: 'New sale recorded',
        },
        {
            id: 3,
            time: '12.30 pm',
            color: 'success',
            subtext: 'Payment was made of $64.95 to Michael',
        },
        {
            id: 4,
            time: '12.30 pm',
            color: 'warning',
            title: 'New sale recorded',
        },
        {
            id: 5,
            time: '12.30 pm',
            color: 'error',
            title: 'New arrival recorded',
        },
    ];
}
