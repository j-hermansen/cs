import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: ['./angular2.component.css']
})
export class Angular2Component implements OnInit {

  componentSnippet = `@Component({
        selector: 'app-name',
        templateUrl: './name.component.html',
        styleUrls: ['./name.component.css']
      })
      export class NameComponent {}`;

  constructor() { }

  ngOnInit(): void {
  }

}
