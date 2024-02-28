import { environment } from './../../../../environment/environment.prod';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  baseUrl = environment.baseUrl;
  isLoggedIn = false;
  loggedInRole: string | null = null;
  loggedInprofilePicUrl: string | null = null;
  loggedInName: string | null = null;

  dropdownPopoverShow = false;
  @ViewChild('btnDropdownRef', { static: false }) btnDropdownRef: ElementRef =
    new ElementRef(null);
  @ViewChild('popoverDropdownRef', { static: false })
  popoverDropdownRef: ElementRef = new ElementRef(null);
  constructor(private readonly authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    this.authService.loggedInRole().subscribe((role) => {
      this.loggedInRole = role;
    });

    this.authService.loggedInName().subscribe((role) => {
      this.loggedInName = role;
    });

    this.authService.loggedInprofilePic().subscribe((role) => {
      this.loggedInprofilePicUrl = role;
    });
  }

  toggleDropdown(event: any) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  onLogOut() {
    localStorage.clear();
    this.authService.onLogOut();
  }
}
