import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
