import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'cq-placeholder',
    templateUrl: './placeholder.component.html',
    styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
    @Input() header = true;
    @Input() lines = 3;

    constructor() { }

    ngOnInit(): void {
    }
}
