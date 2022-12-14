import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/entitys/persona';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {

  constructor(private referencia: MatDialogRef<EditAboutMeComponent>, private personaService: PersonaService) { }

  personas: Persona[];

  archivo: string;

  ngOnInit(): void {
    this.obtenerPersona();
  }

  private obtenerPersona() {
    this.personaService.getPersona().subscribe(dato => {
      this.personas = dato;

      this.archivo = this.personas[0].urlFoto;
    })
  }

  public actualizarPersona(nombre: String, apellido: String, edad: String,
    domicilio: String, nombrePuesto: String, descripcion: String) {

    let ok: boolean;

    if (nombre != "" && apellido != "" && edad != "" && Number(edad) > 18 && Number(edad) < 99 && domicilio != "" && nombrePuesto != "" && descripcion != "") {
      ok = true;
    }
    else {
      ok = false;
    }
    if (ok) {


      this.personas[0] = new Persona(this.personas[0].id_Persona, nombre, apellido, Number(edad),
       domicilio, nombrePuesto, descripcion, this.archivo);

      this.personaService.savePersona(this.personas[0]).subscribe({
        next: (dato) => {
          Swal.fire({
            title: 'Actualizado',
            text: "se actualizo correctamente",
            icon: 'success',
            confirmButtonText: "Aceptar",
          }).then(() => {
            this.referencia.close("Cerrando");
          })
        },
        error: (error) => {
          Swal.fire({
            title: 'Error',
            text: "No se actualizo correctamente",
            icon: 'error',
            confirmButtonText: "Aceptar",
          })
        }
      });
    }
    else {
      Swal.fire({
        title: 'No Actualizado',
        text: "Algunos de los campos no esta en un formato no permitido.",
        icon: 'error',
        confirmButtonText: "Aceptar",
      })

    }


  }

  obtenerArchivo(event: any): any {
    const archivoCapturado: Blob = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(archivoCapturado);
    reader.onload = () => {
      this.archivo = <string>reader.result
    }
  }



}
