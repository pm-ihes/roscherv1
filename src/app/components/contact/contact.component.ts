import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import AOS from 'aos';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  contactForm!: FormGroup;

  name = "";
  email = "";
  subject = "";
  message = "";

  constructor (private formBuilder: FormBuilder, private httpService: HttpService) {}

  ngOnInit(): void {
    
    AOS.init();

    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", Validators.required],
      privacy: ["", Validators.requiredTrue]
    })

  }

  sendMail () {

    let user = {
      name: this.name,
      email: this.email
    }

    this.httpService.sendEmail('http://localhost:3000/sendmail', user).subscribe(
      data => {
        let res: any = data;
        console.log(`Email erfolgreich an ${user.email} gesendet`);
      }, err => {
        console.log(err);
      }
    );
  }

}
