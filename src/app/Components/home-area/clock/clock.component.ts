import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, DoCheck, OnChanges {

    public time: any;
    public timerId: any;

    constructor() { }

    // Same as componentDidMount
    ngOnInit(): void {
        this.timerId = window.setInterval(() => {
            const year = new Date().getFullYear();
            const now = new Date();
            const  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var d = new Date();
            var monthName=months[d.getMonth()];
            this.time = year + " " + monthName;
        }, 1000);
    }

    // Same as componentWillUnmount
    ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }

    // Similar to componentDidUpdate
    ngOnChanges(changes: SimpleChanges): void {
        console.log("Something changed...", changes);
    }

    ngDoCheck(): void {
        console.log("Performs whenever Angular check for changes...");
    }

}
