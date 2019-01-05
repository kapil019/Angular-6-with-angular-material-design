import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {Customer} from '../app/models/customer.model';
import {CustomerService} from '../app/services/customer.service.service';
import { HostListener } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService]
})
export class AppComponent {
  
  private isHandset = window.innerWidth <= 959 ? true : false;
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isHandset = event.target.innerWidth <= 959? true : false;
  }
}
