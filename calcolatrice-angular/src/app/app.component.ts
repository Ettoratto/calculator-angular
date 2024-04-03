import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDividerModule, MatIconModule, MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "Calcolatrice angular"
  calculation: string = ""
  eraseAll: boolean = false
  ans: string = ""

  function(type:string, value:any){
    if(type == "n"){
      this.checkErase()

      this.calculation += String(value)
    }else{
      switch (value) {
        case "DEL":
          this.calculation = ""
          break;

        case "CANC":
          this.calculation = this.calculation.slice(0, -1)
          break;
        
        case "=":
          if(eval(this.calculation) == undefined)
            this.calculation = "MATH ERROR"
          else{
            this.calculation = eval(this.calculation)
            this.ans = this.calculation
            this.eraseAll = true
          }
          break;

        case "ANS":
          this.calculation += this.ans
          break;
      }
    }
  }

  checkErase(){
    if(this.eraseAll){
      this.calculation = ""
      this.eraseAll = false
    }
  }
}
