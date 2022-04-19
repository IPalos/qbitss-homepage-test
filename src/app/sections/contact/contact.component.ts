import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import * as alertify from 'alertify.js';
import { FormGroup, NgForm} from '@angular/forms';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor() { }

    ngOnInit(): void {}

    public sendEmail(e: Event) {
        
        e.preventDefault();
        emailjs.sendForm(
            environment.emailjs_email_service, 
            environment.emailjs_email_template, 
            e.target as HTMLFormElement, 
            environment.emailjs_user_public_key)
            
          .then((result: EmailJSResponseStatus) => {
              console.log(e.target as HTMLFormElement)
              alertify.alert('Envio Exitoso', 'Gracias por contactarnos!', function(){  
              });
                       
            
          }, (error) => {
            console.log(error.text);
            alertify.error('Error message');
           alertify.alert('Error', 'Oooh, algo salio mal', function(){  });
          });
          
    }
}
