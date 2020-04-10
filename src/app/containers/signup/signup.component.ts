import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { DbService } from 'src/app/services/dbservice.service';

declare var google: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild("autocomplete") autocomplete: ElementRef;
  name;department;address;designation;contact;email;
  formdata;userData: any;
  constructor(private router: Router,private dbService: DbService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl("Surabhi "),
      department:new FormControl("Development"),
      address:new FormControl("Bangalore"),
      contact:new FormControl("13453633773"),
      designation:new FormControl("developer"),
      email: new FormControl("surabhi@gmail.com"),
  });
  this.dbService.getUsers().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
 
}
onClickSubmit(data) {
   this.name = data.name;
    this.department = data.department;
	  this.address = data.address;
		  this.designation = data.designation;
		    this.contact = data.contact;
			  this.email = data.email;
    const request = {name: this.name,department:this.department,designation:this.designation,address:this.address,contact:this.contact,email:this.email}
    this.dbService.createUser(request)
 
}
displayCounter(e){console.log(e);}
}