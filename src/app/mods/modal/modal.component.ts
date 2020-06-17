import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'cq-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
    @Output() exit = new EventEmitter();

    constructor(private element: ElementRef) {}

    ngOnInit(): void {
        document.body.appendChild(this.element.nativeElement);
    }

    ngOnDestroy(): void {
        this.element.nativeElement.remove();
    }

    onCloseClick(): void {
        this.exit.emit();
    }
}
