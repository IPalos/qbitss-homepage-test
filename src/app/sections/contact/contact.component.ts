import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import * as alertify from 'alertify.js';
import { FormGroup, NgForm} from '@angular/forms';

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
        emailjs.sendForm('service_qbitss', 'template_ubhxla4', e.target as HTMLFormElement, 'user_g9d2UU94BIwtkSWPM8r7C')
          .then((result: EmailJSResponseStatus) => {
              
              alertify.alert('Envio Exitoso', 'Gracias por contactarnos!', function(){  
              });
                       
            
          }, (error) => {
            console.log(error.text);
            alertify.error('Error message');
           alertify.alert('Error', 'Oooh, algo salio mal', function(){  });
          });
          
    }
}
