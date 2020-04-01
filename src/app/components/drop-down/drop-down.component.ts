import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { timer } from 'rxjs';



@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  selected = '';value;
  dropDownItem = ['full-time','part-time','admin'];
  @Output() onSelectvalue = new EventEmitter();
 
  onSelect(e:any){
    this.value =console.log('---',e.target.value);
    this.onSelectvalue.emit(this.value);
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
