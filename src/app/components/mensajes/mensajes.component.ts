import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  user: String;
  mensajes: Object = [
    { id: 1, mensaje: 'Hola como te va???' },
    { id: 2, mensaje: 'Hola como te va???' },
    { id: 3, mensaje: 'Hola como te va???' },
    { id: 4, mensaje: 'Hola como te va???' },
    { id: 5, mensaje: 'Hola como te va???' },
    { id: 6, mensaje: 'Hola como te va???' },
    { id: 7, mensaje: 'Hola como te va???' },
    { id: 8, mensaje: 'Hola como te va???' },
    { id: 9, mensaje: 'Hola como te va???' }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
