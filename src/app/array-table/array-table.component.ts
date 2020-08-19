import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-array-table',
  templateUrl: './array-table.component.html',
  styleUrls: ['./array-table.component.css']
})
export class ArrayTableComponent implements OnInit {
  @Input() tables;
  @Input() form;
  tableList = [];
  inputList = [];
  dummyInputList = [{}]; // created dummy array of empty object only to show table data
  buttonStatusArray = {};
  constructor() { }

  ngOnInit(): void {
    this.tableList.push(this.tables);
    this.createForm(this.getKeys(this.tables), this.tables);
  }

  createForm(inputs, inputArray){
    for (const input of inputs){
    if (Array.isArray(this.getValues(inputArray[input])[0])){
    } else if (this.getInputType(this.getValues(inputArray[input])[0]) === 'date'){
      this.form.addControl(this.getKeys(inputArray[input]),
      new FormControl(new Date(this.getValues(inputArray[input])[0].toString()) || ''));
    } else{
      this.form.addControl(this.getKeys(inputArray[input]), new FormControl(this.getValues(inputArray[input])[0] || ''));
    }
  }
}

  getKeys(inputs) {
    return Object.keys(inputs);
  }

  getValues(inputs) {
    return Object.values(inputs);
  }

  getInputType(value){
    if (Array.isArray(value)){
      return 'array';
    } else if (new Date(value).toString() !== 'Invalid Date' && typeof(value) !== 'number'){
      return 'date';
    } else {
      return typeof(value);
    }
  }

  camelCaseToReadable(value){
    const result = value.replace(/([A-Z])/g,' $1');
    const final = value.charAt(0).toUpperCase() + result.slice(1);
    return final;
  }

  viewTable(value, id){
    this.createForm(this.getKeys(value), value);
    this.tableList.push(value);
    this.buttonStatusArray[id] = true;
  }

  buttonStatus(id){
    if (!(id in this.buttonStatusArray)){
      this.buttonStatusArray[id] = false;
    }
  }
}
