import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard!!',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          title: 'Main',
          url: '/'
        },
        {
          title: 'Progressbar',
          url: 'progress'
        },
        {
          title: 'Gráficas',
          url: 'grafica1'
        },
        {
          title: 'Rxjs',
          url: 'rxjs'
        }
      ]
    }
  ]

  constructor() { }
}
