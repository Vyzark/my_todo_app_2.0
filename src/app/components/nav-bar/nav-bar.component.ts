import { Component } from '@angular/core';

@Component({
  selector: 'my-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})
export class NavBarComponent {
  dark: boolean = true;

  changeTheme() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');

    document.body.classList.toggle('dark');
  }
}
