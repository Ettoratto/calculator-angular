import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calcolatrice-angular'
  calculation: string = ""

  function(type:string, value:any){
    if(type == "n"){


    }else{
      switch (value) {
        case "DEL":
          break;
      }
    }
  }
}
