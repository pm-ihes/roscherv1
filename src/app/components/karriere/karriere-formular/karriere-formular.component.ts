import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-karriere-formular',
  templateUrl: './karriere-formular.component.html',
  styleUrls: ['./karriere-formular.component.css']
})
export class KarriereFormularComponent {
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
