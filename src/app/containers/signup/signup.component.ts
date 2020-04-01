import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;department;address;designation;contact;email;passwrd;
  formdata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl("Surabhi "),
      department:new FormControl("Development"),
      address:new FormControl("Bangalore"),
      contact:new FormControl("13453633773"),
      designation:new FormControl("developer"),
      email: new FormControl("surabhi@gmail.com"),
      passwrd: new FormControl("surabhi")
  });
 
}
onClickSubmit(data) {
  this.email = data.email;
  this.passwrd=data.passwrd;
  
  if ( data.email == 'employee@gmail.com') {
    this.router.navigate(['/employee']);
  }
  else {
    this.router.navigate(['/login']);
  }
 
}
displayCounter(e){console.log(e);}
}