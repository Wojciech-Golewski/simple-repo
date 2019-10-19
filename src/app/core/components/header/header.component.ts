import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMobile: boolean;
  showSideBar: boolean = false;
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 900) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  constructor() {
    this.getScreenWidth();
  }

  showSideBarMenu() {
    this.showSideBar = !this.showSideBar;
  }
}
