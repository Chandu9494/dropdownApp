import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IOption } from './dropdown-options.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownComponent implements OnInit {
 public readonly options : IOption[]= [
    {
      id: 1,
      label: "Option 1"
    },
    {
      id: 2,
      label: "Option 2"
    },
    {
      id: 3,
      label: "Option 3"
    },
    {
      id: 4,
      label: "Option 4"
    },
    {
      id: 5,
      label: "Option 5"
    },
    {
      id: 6,
      label: "Option 6"
    },
    {
      id: 7,
      label: "Option 7"
    }, 
    {
      id: 8,
      label: "Option 8"
    },
    {
      id: 9,
      label: "Option 9"
    }

  ];

  public optionId : number = 0;
  public placeholder!:string;
  public selectedOption!:any;
  public panelOpened = false;
  @Output() onSelected = new EventEmitter<number>;

  ngOnInit(): void {
    this.placeholder = 'Select an option';
  }

  public showOptionSelected(){
    this.panelOpened = !this.panelOpened
  }

  public handleOptionChange(option: any): void{
    this.onSelected.emit(option.label);
    this.selectedOption = option.label;
    this.panelOpened = false;
  }
}

