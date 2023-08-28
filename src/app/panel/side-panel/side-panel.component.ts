import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {
  // variables
  selectedItem: String = "";
  isMobileView: boolean = false;
  isSidePanelOpen: boolean = false;


  constructor(
    private router: Router) {

  }

  ngOnInit(): void {
    // By default the assessment item is selected in panel for both (mobile & desktop)
    this.selectedItem = 'Assessment';

    // checking the current view for mobile view
    this.checkMobileView()
    if (this.isMobileView){
      this.isSidePanelOpen = !this.isSidePanelOpen;
    }
  }

  selectItem(item: string): void {
    this.selectedItem = item;
    this.routeToPage();
  }

  // The function will be used for routing to different components when clicked in side panel

  routeToPage() {
    // if(this.selectedItem=="Assessment"){
    //   this.router.navigate(['/assessment']);
    // }
    // else if(this.selectedItem=="Dashboard"){
    //   this.router.navigate(['/dashboard']);
    // }
    // else if(this.selectedItem=="My Library"){
    //   this.router.navigate(['/my-library']);
    // }
    // else if(this.selectedItem=="Round Status"){
    //   this.router.navigate(['/round-status']);
    // }
  }

  closepanel() {
    this.isSidePanelOpen = false;
  }

  checkMobileView() {
    if (window.innerWidth <= 768) {
      this.isMobileView = true;
      // this.isSidePanelOpen = true;
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
