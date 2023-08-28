import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-overall-layout',
  templateUrl: './overall-layout.component.html',
  styleUrls: ['./overall-layout.component.css']
})
export class OverallLayoutComponent implements OnInit {
  // variables
  isMobileView: boolean = false;
  selectedItem: String = "My Assessments"

  constructor() { }

  ngOnInit(): void {
    // checking the current view for mobile view
    this.checkMobileView();
  }


  selectItem(value: String) {
    this.selectedItem = value
  }

  // checking the current view for mobile view
  checkMobileView() {
    if (window.innerWidth <= 768) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    }
  }

  //Adding resize event using hostListner to dynamically call the checkmobile view function when window resizes
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }
}
