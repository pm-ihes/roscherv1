import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-karriere-formular',
  templateUrl: './karriere-formular.component.html',
  styleUrls: ['./karriere-formular.component.css']
})
export class KarriereFormularComponent {

  applicationForm!: FormGroup

  firstname = "";
  lastname = "";
  email = "";
  birthday = "";
  job = "";
  message = "";
  files: any[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient,) { }

  ngOnInit() {

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

  sendMail() {
    const formData = new FormData();

    formData.append('firstname', this.firstname);
    formData.append('lastname', this.lastname);
    formData.append('email', this.email);
    formData.append('file', this.files[0]);
    formData.append('file', this.files[1]);

    this.http.post('http://127.0.0.1:3000/upload', formData).subscribe(
      {
        next: () => {
          console.log('Erfolgreich hochgeladen');
        },
        error: (err) => {
          console.error('Fehler beim Hochladen:', err);
        }
      });
  }

  handleFileInput(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      this.files[i] = event.target.files[i];
    }

  }

}
