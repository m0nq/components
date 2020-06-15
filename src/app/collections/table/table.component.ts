import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'cq-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @Input() classNames = '';
    @Input() data = [];
    @Input() headers = [];

    constructor() { }

    ngOnInit(): void {
    }
}
