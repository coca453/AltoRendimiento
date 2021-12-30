import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'ar-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: any[];
  
  constructor(private service: ClienteService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response => this.clientes = response);
  }

}
