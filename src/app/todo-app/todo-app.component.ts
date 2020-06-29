import { Component, OnInit } from '@angular/core';
import { Item } from './shared/items.model';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  items: Item[] = [];

  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(localStorage.getItem('todoListItem')) || [];
  }

  saveItemsToStorage() {
    localStorage.setItem('todoListItem', JSON.stringify(this.items));
  }

  onItemInputted(item: Item) {
    this.items.push(item);
    this.saveItemsToStorage();
  }

  // onItemCompleted() {
  //   console.log("do");
  //   this.saveItemsToStorage();
  // }
  onStateChange(idx:number, value: string) {
    console.log('Change in ', idx);
    console.log(value);
    this.items[idx].itemStatus = value;
    this.saveItemsToStorage()
  }

  onDeleteItem(idx:number) {
    console.log(idx);
    this.items.splice(idx, 1);
    this.saveItemsToStorage()
  }
}
