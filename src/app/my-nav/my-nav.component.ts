//import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { Component, OnInit, ElementRef } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/login', title: 'Login',  icon:'person', class: '' },
    { path: '/signup', title: 'Signup',  icon:'person', class: '' }
];

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})

export class MyNavComponent implements OnInit {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
//  constructor(private breakpointObserver: BreakpointObserver) {}
  
  
    menuItems: any[];
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(
//      location: Location,  
      private element: ElementRef, 
//      private router: Router, 
      private breakpointObserver: BreakpointObserver) {
//      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.listTitles = ROUTES.filter(listTitle => listTitle);
    }

    sidebarOpen() {
    };
    
    sidebarClose() {
    };
    
    sidebarToggle() {
    };
    
    getTitle(){
    };
  
}
