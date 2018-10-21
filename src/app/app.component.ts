import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Define an array with your elements and bind input value to one variable, for instance, [(ngModel)]="number".
  numbers: string;

  pipeNumber;

  //As time as you typed into the input the value of the number is modified "Two way binding" and that mean you can display your desired output by passing the number as index for your words array.


  words = ['zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'seven', 'eight', 'nine'];


  constructor() {

  }

  ngOnInit() {
  }


  //Array
  result: string[] = [];


  //Function
  calculeNumber(numbers: any) {
    
    this.result = numbers.split('').map(x => {

      return this.words[+x];

    });
    //console.log(result);

}



}