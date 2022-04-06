import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

    public item: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  public makeOrder(): void {
    alert("hi: " + this.item);
    this.item = "";
}

}
