import { Component, OnInit, Input } from '@angular/core';
import { ItemViewService } from './item-view.service';
import { Item } from '../item-class';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() itemCall : String;
  @Input() advancedView : boolean;
  itemPath;
  itemclass : Item;

  constructor(
    private itemViewService: ItemViewService
  ) { }

  ngOnInit() {
    // this.itemclass = new Item(null, this.itemCall)
  }

}
