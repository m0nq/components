import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cq-home',
    templateUrl: './view-home.component.html',
    styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
    stats = [
        { value: 22, label: '# of Users' },
        { value: 900, label: 'revenue' },
        { value: 50, label: 'Reviews' }
    ];

    items = [
        {
            image: 'assets/images/couch.jpeg',
            title: 'Couch',
            description: 'This is a fantastic couch to sit on'
        },
        {
            image: 'assets/images/dresser.jpeg',
            title: 'Dresser',
            description: 'This is a great dresser to put stuff in'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
