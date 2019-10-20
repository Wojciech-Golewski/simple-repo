import { Component, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('showHide', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%'}))
      ])
    ])
  ]
})
export class HeaderComponent {

  isMobile: boolean;
  showSideBar: boolean = false;
  screenWidth: number;

  @ViewChild('sideBarButton', { static: false }) sideBarButton: ElementRef;
  @ViewChild('sideBar', { static: false }) sideBar: ElementRef;

  @HostListener('window:resize', ['$event'])
  getScreenWidth(event?: any) {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth < 900) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      if (this.showSideBar) {
        this.showSideBar = false;
      }
    }
  }

  constructor(private renderer: Renderer2) {
    this.getScreenWidth();
    this.renderer.listen('window', 'click', (event: Event) => {
      if (this.isMobile && this.showSideBar) {
        if (event.target !== this.sideBarButton.nativeElement && event.target !== this.sideBar.nativeElement) {
          this.showSideBar = false;
        }
      }
    })
  }

  showSideBarMenu() {
    this.showSideBar = !this.showSideBar;
  }
}
