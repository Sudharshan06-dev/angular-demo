import { Component } from '@angular/core';
import {DefaultService} from "../../services/default.service";

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [],
  templateUrl: './sidebar-nav.component.html',
  styles: `/* Sidebar remains fixed in size */
  .sidebar-n {
    display: none;
  }
  .sidebar {
    width: 250px;
    background-color: var(--gray-900);
    padding: 20px;
    min-height: 100vh;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    color: white;
    box-sizing: border-box;
  }`
})
export class SidebarNavComponent {

  constructor(public defaultService: DefaultService) {
  }

}
