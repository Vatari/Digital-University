import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  form!: FormGroup;
  isSent: boolean = false;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder) {}

  send(): void {
    this.isSent = true;
    /*   const { name, email, mobile, subject, message } = this.form.value;
    alert(
      `Name: ${name}, Email: ${email}, mobile: ${mobile}, Subject: ${subject},Message: ${message} `
    ); */
    this.form.reset();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null),
      email: this.formBuilder.control(null),
      mobile: this.formBuilder.control(null),
      subject: this.formBuilder.control(null),
      message: this.formBuilder.control(null),
    });
  }
}
