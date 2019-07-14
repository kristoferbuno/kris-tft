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
  itemsAdded = 0;
  itemPairings;

  constructor(
    private itemCombinatorService : ItemCombinatorService
  ) { }

  ngOnInit() {
    this.itemCombinatorService.getItemJson().subscribe(data => {
      this.itemPairings = data;
    });  }

  addItem(item){
      this.selectedItems$.push(
        new SelectedItem(this.itemsAdded, item)
      );
      this.itemsAdded++;
  }

  pairItem(item1, item2){
    return this.itemPairings[item1.name][item2.name];
  }

  /**
   * matches all items in this.SelectedItems$ to each other and finds combinations
   */
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

  removeItem(event){
    let eventID = event.id;
    for (let i = 0; i < this.selectedItems$.length; i++){
      if (this.selectedItems$[i].id == eventID)
      {
        this.selectedItems$.splice(i, 1);
      }
    }
  }

}

class SelectedItem {
  id : number;
  name : String;
  constructor (id, item){
    this.id = id;
    this.name = item;
  }
}