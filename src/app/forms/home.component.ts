import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: './forms/home.html'
})
export class HomeComponent  { name = 'Home Component'; }
