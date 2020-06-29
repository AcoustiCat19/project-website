import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, ɵEMPTY_ARRAY } from '@angular/core';
import { Item } from './../shared/items.model';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @ViewChild('newItemInput') newItemInputRef: ElementRef;
  @Output() itemInputted = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const item = this.newItemInputRef.nativeElement.value;
    const newItems = new Item(item);
    if (item === "") {
      alert("Please enter an item");
    }
    else this.itemInputted.emit(newItems);
  }

  onItemDeleted() {
    this.deleteItem.emit();
  } 
}
