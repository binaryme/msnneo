import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  users: Object = [
    { id: 1, nombre: 'Israel' },
    { id: 2, nombre: 'Juan' },
    { id: 3, nombre: 'Javier' }
  ];
  constructor() {}

  ngOnInit() {}
}
