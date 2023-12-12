import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private toastr: ToastrService) { }

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

    this.http.post('http://127.0.0.1:3000/application', formData).subscribe(
      {
        next: () => {
          console.log('Erfolgreich hochgeladen');
        },
        error: (err) => {
          console.error('Fehler beim Hochladen:', err);
          this.toastr.error('Bitte melden Sie sich telefonisch bei uns.', 'Fehler beim Senden', { positionClass: 'toast-bottom-right' });
        }
      });

    this.router.navigateByUrl('loading');
    setTimeout(() => {
      this.router.navigateByUrl('karriere');
      this.toastr.success('Wir werden uns umgehend bei Ihnen melden!', 'Danke für Ihre Anfrage', { positionClass: 'toast-bottom-right' });
    }, 100);
  }

  /** 
  *@param fId: Number of File (1 or 2)
  */

  handleFileInput(event: any, fId: number) {
    this.files[fId - 1] = event.target.files[0];
  }

}
