import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
    // console.log(route.snapshot.children);
    this.tituloSubs$ = this.getArgRoute()
      .subscribe(({ title }) => {
        this.titulo = title;
        document.title = `AdminPro - ${title}`
      });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {
  }

  getArgRoute() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}
