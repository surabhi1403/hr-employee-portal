import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('autocomplete') autocomplete: ElementRef;
  emailid; passwd;
  formdata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
    });
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
    this.passwd = data.passwd;

    if (data.emailid == 'admin@gmail.com') {
      this.router.navigate(['/admin']);
    }
    else {
      this.router.navigate(['/signup']);
    }

  }
  displayCounter(e) { console.log(e); }
}