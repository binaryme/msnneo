import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public searchText: string;
  online: boolean = true;
  users: Object = [
    { id: 1, nombre: 'Israel' },
    { id: 2, nombre: 'Juan' },
    { id: 3, nombre: 'Javier' },
    { id: 4, nombre: 'Pedro' },
    { id: 5, nombre: 'Paco' },
    { id: 6, nombre: 'Yahir' },
    { id: 7, nombre: 'Yaitza' },
    { id: 8, nombre: 'Pedro' },
    { id: 9, nombre: 'Paco' },
    { id: 10, nombre: 'Yahir' }
  ];
  constructor() {}

  ngOnInit() {}
  setOnline() {
    this.online = true;
  }
  setOffline() {
    this.online = false;
  }
}
