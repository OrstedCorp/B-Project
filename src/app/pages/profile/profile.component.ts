import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
