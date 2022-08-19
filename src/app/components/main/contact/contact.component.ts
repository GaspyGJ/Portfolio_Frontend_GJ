import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { Email } from 'src/app/entitys/Email/email';
import { EmailServiceService } from 'src/app/service/Email/email-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService: EmailServiceService) { }

  ngOnInit(): void { }

  onSubmit(dir_email: string, body: string, subject: string) {
    
    Swal.fire({
      title: 'Seguro que quiere enviar?',
      text: "Su Email : "+dir_email,
      icon: 'question',
      confirmButtonText: "Enviar",
    }).then((result) => {
    if(result.isConfirmed){

      let email: Email = new Email(dir_email, body, subject);

      this.emailService.sendEmail(email).subscribe({
        next: (response) => {
          console.log(response);
          let statusEmail = response;
          console.log(statusEmail.StatusMeEmail);
          Swal.close();
          if(statusEmail.StatusMeEmail=="E-mail Sent Successfully" && statusEmail.StatusResponseEmail=="E-mail Sent Successfully"){
            Swal.fire({
              title: 'Email enviado',
              icon: 'success',
              confirmButtonText: "Aceptar",
            });
          }
          else{
            Swal.fire({
              title: 'Email no enviado',
              text: "No se pudo enviar el email correctamente :(",
              icon: 'error',
              confirmButtonText: "Aceptar",
            });
          }
          
        },
        error: (e) => {
          Swal.fire({
            title: 'Email no enviado',
            text: "No se pudo enviar el email correctamente :(",
            icon: 'error',
            confirmButtonText: "Aceptar",
          });
        }
      });
      
      Swal.fire({
        title: 'Enviando...',
        text: "Espere a que termine el envio",
        showConfirmButton:false,
        icon: 'info'
      })

    }

    });
    

      

  }

}
