import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FraseService } from '../../services/frase.service';

@Component({
  selector: 'ar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frase: any = "";

  constructor(private service: FraseService) { }

  ngOnInit() {
    this.service.get().subscribe(response => this.frase = response);
  }

}
