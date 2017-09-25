import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  routes: Object[] = [{
      title: 'New Arrival',
      route: '/new',
      icon: 'home',
    }, {
      title: 'About Us',
      route: '/aboutus',
      icon: 'view_quilt',
    }, {
      title: 'Payment Method',
      route: '/payment',
      icon: 'receipt',
    }, {
      title: 'Location',
      route: '/location',
      icon: 'people',
    },
  ];


  ngOnInit() {
  }

}
