import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formLogin = {
    correo: "",
    password: ""
  }
  
  currentYear: number = new Date().getFullYear(); // Obtiene el año actual en el constructor

  constructor(private router: Router, private storage: Storage) {
     this.storage.create();
  }

  iniciarSesion() {
    console.log("correo: " + this.formLogin.correo);
    console.log("password: " + this.formLogin.password);

    let datosEnviar: NavigationExtras = {
      queryParams: {
        correoUsuario: this.formLogin.correo,
        edad: 24
      }
    };

    this.router.navigate(['/home'], datosEnviar);
  }

  async guardarInformacion() {
    try {
      await this.storage.set("nombreUsuario", "lorenzo");
      console.log("Usuario guardado con éxito.");
    } catch (error) {
      console.error("Error al guardar el usuario: " + error);
    }
    this.redireccionar();
  }
  
  redireccionar() {
    this.router.navigate(['/olvido-contrasena']);
  }
}
