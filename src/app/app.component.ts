import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 data = [
    {
      name: "a"
    },
    {
      name: "b"
    },
    {
      name: "c"
    }
  ];

  onSave(item, value: string): void {
    item.name = value;
  }
}
