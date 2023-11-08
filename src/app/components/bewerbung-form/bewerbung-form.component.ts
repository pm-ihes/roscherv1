import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bewerbung-form',
  templateUrl: './bewerbung-form.component.html',
  styleUrls: ['./bewerbung-form.component.css']
})
export class BewerbungFormComponent {
sendMail() {
throw new Error('Method not implemented.');
}

    applicationForm!: FormGroup

    firstname = "";
    lastname = "";
    email = "";
    birthday = "";
    job = "";
    message = "";

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit () {

      this.applicationForm = this.formBuilder.group({
        firstname: ["", Validators.required],
        lastname: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        birthday: ["", Validators.required],
        job: ["", Validators.required],
        message: ["", Validators.required],
        privacy: ["", Validators.requiredTrue]
      })

    }



}
