import {Component, OnInit} from '@angular/core';
import * as L from "leaflet";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {RegistrationUser} from "../user";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  selectedMarker: L.Marker;
  validation: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.validation = new FormGroup({
      email: new FormControl('', Validators.required),
      displayName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      location: new FormControl({}, Validators.required)
    });

    let map = L.map('map').setView([48.20, 16.4], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 30,
      attribution: '© OpenStreetMap'
    }).addTo(map);

    map.on("click", (e: any) => {
      if (this.selectedMarker) {
        map.removeLayer(this.selectedMarker);
      }
      this.selectedMarker = L.marker(e.latlng).addTo(map);
      this.validation.controls['location'].setValue(e.latlng);
      this.validation.controls['location'].markAsTouched();
    });
  }

  register() {
    let user: RegistrationUser = {
      email: this.validation.controls['email'].value,
      displayName: this.validation.controls['displayName'].value,
      password: this.validation.controls['password'].value,
      location: this.validation.controls['location'].value
    };
    this.authService.register(user).subscribe({
      next: () => {
        this.authService.setLoggedIn(true);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.validation.setErrors({'incorrect': true});
      }
    });
  }
}
