import { Component, OnInit } from '@angular/core';
import { GetInputFromJsonService } from '../services/get-input-from-json.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-list',
  templateUrl: './input-list.component.html',
  styleUrls: ['./input-list.component.css']
})
export class InputListComponent implements OnInit {
  inputs = {};
  form: FormGroup;
  group: any = {};

  constructor(private getInputFromJson: GetInputFromJsonService){}

  ngOnInit(): void{
    this.getInputFromJson.getInputs().subscribe(data => {
      this.inputs = data;
      this.getInputFromJson.getInputTest().subscribe(data1 => {
            console.log(data1['nodeFour']);
            console.log(data1['nodeFour'][3]['elementFour']);
            data['nodeFour'][3]['elementFour'].push(data1['nodeFour'][3]['elementFour'][0]);
            data['nodeFour'][3]['elementFour'].push(data1['nodeFour'][3]['elementFour'][1]);
            console.log(data);
      });
      this.form = this.createForm(this.getKeys(data), data);
    });
  }

  createForm(inputs, inputArray) {
    for (const input of inputs) {
      if (Array.isArray(inputArray[input])) {
      } else if (this.getInputType(inputArray[input]) === 'date') {
        this.group[input] = new FormControl(new Date(inputArray[input]) || '');
      } else {
        this.group[input] = new FormControl(inputArray[input] || '');
      }
    }
    return new FormGroup(this.group);
  }

  getKeys(inputs) {
    return Object.keys(inputs);
  }

  getInputType(value){
    if(Array.isArray(value)){
      return 'array';
    }
    if (new Date(value).toString() !== 'Invalid Date' && typeof(value) !== 'number'){
      return 'date';
    }
    return typeof(value);
  }

  camelCaseToReadable(value){
    const result = value.replace(/([A-Z])/g,' $1');
    const final = value.charAt(0).toUpperCase() + result.slice(1);
    return final;
  }
}
