import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cq-mods-home',
    templateUrl: './mods-home.component.html',
    styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
    modalOpen = false;
    items = [
        {
            title: 'Why is the sky blue?', content: 'Because of light' +
                ' reflecting off of molecules of air'
        },
        {
            title: 'What does an Orange taste like?', content: 'Like an' +
                ' orange...'
        },
        { title: 'What color is the cat?', content: 'It\'s an orange color' }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onClick(): void {
        this.modalOpen = !this.modalOpen;
    }
}
