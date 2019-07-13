import { Component, OnInit } from '@angular/core';
import { ItemCombinatorService } from './item-combinator.service';
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
    "belt"
  ]

  selectedItems$ = [];
  itemPairings;

  constructor(
    private itemCombinatorService : ItemCombinatorService
  ) { }

  ngOnInit() {
    this.itemCombinatorService.getItemJson().subscribe(data => {
      this.itemPairings = data;
    });  }

  addItem(e){
    this.selectedItems$.push(e);
  }

  pairItem(item1, item2){
    return this.itemPairings[item1][item2];
  }

  findAllPairs(){
    let combinations = [];
    for (let item = 0; item < this.selectedItems$.length-1; item++)
    {
      for (let item2 = item+1; item2 < this.selectedItems$.length; item2++)
      {
        let pair = this.pairItem(
          this.selectedItems$[item],
          this.selectedItems$[item2]
          );
        let existsAlready = this.containsElement(combinations, pair);
        if (!existsAlready)
        {
          combinations.push(pair);
        }
      }
    }
    return combinations;
  }

  containsElement(a, e){
    for (let index = 0; index < a.length; index++){
      if (a[index] == e) return true;
    }
    return false;
  }

}
