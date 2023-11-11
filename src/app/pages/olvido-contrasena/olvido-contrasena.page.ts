import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.page.html',
  styleUrls: ['./olvido-contrasena.page.scss'],
})
export class OlvidoContrasenaPage implements OnInit {
  nombre: string = ''; // Inicializa con un valor vacío
  rut: string = ''; // Inicializa con un valor vacío
  correo: string = ''; // Inicializa con un valor vacío

  currentYear: number = new Date().getFullYear(); // Obtiene el año actual en el constructor  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  solicitarNuevaContraseña() {
    // Ahora puedes acceder a estas propiedades sin preocuparte por el error
    console.log("Nombre: " + this.nombre);
    console.log("RUT: " + this.rut);
    console.log("Correo: " + this.correo);

    // Luego, puedes redirigir al usuario a la página de inicio de sesión o mostrar un mensaje de éxito.
  }

  toHome() {
    this.router.navigate(['/login']);
  }
}
