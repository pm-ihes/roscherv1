import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  name = "";
  email = "";
  subject = "";
  message = "";

  constructor(private formBuilder: FormBuilder, private httpService: HttpService, private router: Router, private toastr: ToastrService,
    private zone: NgZone) { }

  ngOnInit(): void {

    this.name = "";
    this.email = "";
    this.subject = "";
    this.message = "";

    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", Validators.required],
      privacy: ["", Validators.requiredTrue]
    })

  }


  sendMail() {
    let data = {
      name: this.name,
      email: this.email,
    }

    this.router.navigateByUrl('loading');

    this.httpService.sendEmail('http://127.0.0.1:3000/sendmail', data)
      .subscribe(
        {
          next: () => {
            this.router.navigateByUrl('kontakt');
            console.log(`Email erfolgreich an ${data.email} gesendet`);
            this.toastr.success('Wir werden uns umgehend bei Ihnen melden!', 'Danke für Ihre Anfrage', { positionClass: 'toast-bottom-right' });
          },
          error: (err) => {
            this.router.navigateByUrl('kontakt');
            console.log(err);
            this.toastr.error('Versuche es noch einmal oder wende dich telefonisch an uns!', 'Fehler beim Senden', { positionClass: 'toast-bottom-right' });
          }
        });
  }

}
