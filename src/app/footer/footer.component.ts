import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    .footer {
    padding: 10px;
    background-color: var(--gray-700);
    text-align: center;
    color: white;
  }
  .social-links {
    align-items: center;
    gap: 0.73rem;
    position: relative;
    text-align: right;
  }

  .social-links path {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links a:hover svg path {
    fill: var(--gray-900);
  }`
})
export class FooterComponent {

}
