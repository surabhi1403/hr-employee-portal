import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { DbService } from 'src/app/services/dbservice.service';

declare var google: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("autocomplete") autocomplete: ElementRef;
  emailid;
  passwd;
  formdata;
  userData: any;
  constructor(private router: Router, private dbService: DbService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234"),
    });
    this.dbService.getUsers().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
    // this.httpservice.getTodos().subscribe((data) => {
    //   console.log(data)
    // }, (error) => {
    //   console.log("error occured")
    // })
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.passwd = data.passwd;
    const request = { name: this.emailid, age: 15, sex: 'F' }
    this.dbService.createUser(request)

    // if (data.emailid == 'admin@gmail.com') {
    //  this.router.navigate(['/admin']);
    // }
    // else {
    //   this.router.navigate(['/signup']);
    // }
  }
  displayCounter(e) {
    console.log(e);
  }
}
