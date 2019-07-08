import { Component, OnInit, Input } from '@angular/core';
import { ItemViewService } from './item-view.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() itemCall;
  itemPath;

  constructor(
    private itemViewService: ItemViewService
  ) { }

  ngOnInit() {
  }

}
