import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdownsettings',
  templateUrl: './dropdownsettings.component.html',
  styleUrls: ['./dropdownsettings.component.scss']
})
export class DropdownsettingsComponent implements OnInit {
  @Input() online;
  constructor() {}

  ngOnInit() {}
}
