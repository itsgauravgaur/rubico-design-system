import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RdsServicesService {

  componentList:any = [
    {name: 'Home', url: "/"},
    {name: 'Banner', url: "/banner"},
    {name: 'Header', url: "/header"},
    {name: 'Footer', url: "/footer"},
    {name: 'Buttons', url: "/button"},
    {name: 'List', url: "/banner"},
    {name: 'Testimonails', url: "/testimonails"},
    {name: 'Card', url: "/card"},
    {name: 'About Us', url: "/about-us"},
  ]

  constructor() { }

}
