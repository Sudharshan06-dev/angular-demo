import { Component } from '@angular/core';
import {DefaultService} from "../../services/default.service";

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styles: `.header {
    background: var(--red-to-pink-to-purple-horizontal-gradient);
    padding: 15px;
    color: white;
    margin-left: 0;
    text-align: center;
  }`
})
export class MainHeaderComponent {

  constructor(private defaultService: DefaultService) {

  }

  openSidebar() {
    this.defaultService.showSidebar = !this.defaultService.showSidebar
  }

}
