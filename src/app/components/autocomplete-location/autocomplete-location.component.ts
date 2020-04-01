import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-autocomplete-location',
  templateUrl: './autocomplete-location.component.html',
  styleUrls: ['./autocomplete-location.component.css']
})
export class AutocompleteLocationComponent implements OnInit {
  @ViewChild('placesRef') places: GooglePlaceDirective;
  formattedAddress = '';
  options = { componentRestrictions: { country: ['AU'] } }
  constructor() { }

  ngOnInit(): void {
  }
  public handleAddressChange(address: any) {
    console.log(address)
    this.formattedAddress = address.formatted_address;
  }

}
