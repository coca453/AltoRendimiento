import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'ar-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  response: any = {};
  cr: string = "";

  constructor(private service: ContactoService) { }

  submit(form) {
    console.log(environment.apiURL);
    this.service.post({ contacto: form.value, cr: this.cr }).subscribe(
      response => {
        this.response = response;
        this.reset(form);
      },
      error => {
        console.log(error);
        this.response = error.json();
      }
    );
  }

  reset(form) {
    console.log(environment.apiURL);
    form.reset();
  }

  resolved(captchaResponse: string) {
    this.cr = captchaResponse;
  }

}
