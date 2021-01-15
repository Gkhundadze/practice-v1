import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public errorMessage: string = "Calculator Works";

  public testVatiable: any = {
    name: "john",
    lastName: "Williams"
  };

  public result: number;
  public result2: number;
  public result3: number;
  public result4: number;
  constructor() { }
  ngOnInit(): void {
  }
  // add(num1, num2): void {
  //   let val = parseInt(num1.value);
  //   let val2 = parseInt(num2.value);
  //   let res = val + val2;
  //   this.result = res;
  // }
  // sub(x, y): void {
  //   let val = parseInt(x.value);
  //   let val2 = parseInt(y.value);
  //   let res = val - val2;
  //   this.result2 = res;
  // }
  // mult(num5, num6): void {
  //   let val = parseInt(num5.value);
  //   let val2 = parseInt(num6.value);
  //   let res = val * val2;
  //   this.result3 = res;
  // }
  someOperation(type, x, y): void {
    let xVal = parseInt(x.value);
    let yVal = parseInt(y.value);
    if(type =='+'){
     this.result = xVal + yVal;
    }
    else if(type =='-'){
      this.result2 = xVal - yVal;
    }
    else if(type =='*'){
      this.result3 = xVal * yVal;
    }
    else{
      this.result4 = xVal / yVal;
    }
    console.log(type, xVal, yVal)
    
  
  }
}
