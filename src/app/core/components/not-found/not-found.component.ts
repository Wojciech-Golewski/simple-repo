import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  private redirection: ReturnType<typeof setTimeout>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.redirection = setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 3000);
  }

  ngOnDestroy() {
    if (this.redirection) {
      clearTimeout(this.redirection);
    }
  }
}
