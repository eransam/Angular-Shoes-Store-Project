import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public isWeekend(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1;
    return dayOfWeek === 1;
}
public theElse(): string {
    const noDiscount = "no discount for today";
    return noDiscount
}

}
