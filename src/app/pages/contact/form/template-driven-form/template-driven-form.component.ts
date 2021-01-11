import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  userName: string;
  email: string;
  nickName: string;
  password: string;
  constructor() { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form);

    }
  }
}
