import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
selector: 'app-registarse',
templateUrl: './registarse.page.html',
styleUrls: ['./registarse.page.scss'],
})
export class RegistarsePage {
nombre: string = '';
rut: string = '';
correoInstitucional: string = ''; 
fechaNacimiento: string = '';
domicilio: string = '';

currentYear: number = new Date().getFullYear(); // Obtiene el año actual en el constructor  

constructor(private router: Router) { }

guardarRegistro() {

console.log('Datos del alumno guardados:');
console.log('Nombre:', this.nombre);
console.log('RUT:', this.rut);
console.log('Correo Institucional:', this.correoInstitucional);
console.log('Fecha de Nacimiento:', this.fechaNacimiento);
console.log('Domicilio:', this.domicilio);
}
toHome() {
  this.router.navigate(['/login']);
}
}






