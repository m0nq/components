import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'cq-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
    @Input() items = [];
    openedItemIndex = 0;

    constructor() { }

    ngOnInit(): void {
    }

    onClick(index: number): void {
        this.openedItemIndex = index === this.openedItemIndex ? -1 : index;
    }
}
