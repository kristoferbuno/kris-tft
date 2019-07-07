import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-combinator',
  templateUrl: './item-combinator.component.html',
  styleUrls: ['./item-combinator.component.css']
})
export class ItemCombinatorComponent implements OnInit {

  baseItems = [
    "bf",
    "chain",
    "negatron",
    "nlr",
    "recurve",
    "tear",
    "spatula",
  ]

  constructor() { }

  ngOnInit() {
  }

}