import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-drop-down',
  templateUrl: './search-drop-down.component.html',
  styleUrls: ['./search-drop-down.component.css']
})
export class SearchDropDownComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor() { }

  ngOnInit(): void {
    this.dropdownList = [
                          {"id":1,"itemName":"India"},
                          {"id":2,"itemName":"Singapore"},
                          {"id":3,"itemName":"Australia"},
                          {"id":4,"itemName":"Canada"},
                          {"id":5,"itemName":"South Korea"},
                          {"id":6,"itemName":"Germany"},
                          {"id":7,"itemName":"France"},
                          {"id":8,"itemName":"Russia"},
                          {"id":9,"itemName":"Italy"},
                          {"id":10,"itemName":"Sweden"}
                        ];
    this.selectedItems = [
                            {"id":2,"itemName":"Singapore"},
                            {"id":3,"itemName":"Australia"},
                            {"id":4,"itemName":"Canada"},
                            {"id":5,"itemName":"South Korea"}
                        ];
    this.dropdownSettings = { 
                              singleSelection: false, 
                              text:"Select Countries",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class"
                            };  

}
onItemSelect(item:any){
  console.log(item);
  console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
  console.log(item);
  console.log(this.selectedItems);
}
onSelectAll(items: any){
  console.log(items);
}
onDeSelectAll(items: any){
  console.log(items);
}}
