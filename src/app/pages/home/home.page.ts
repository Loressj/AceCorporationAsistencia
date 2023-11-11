import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentYear: number = new Date().getFullYear();

  

  mensaje: string = '';

  constructor(private rutaActiva: ActivatedRoute, private router: Router, private storage: Storage) { 
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['correoUsuario']) {
        this.mensaje = params['correoUsuario'];
      }
    });
  }

  
  ngOnInit() {
  }

 async verStorage()
  {
    let nombre= await this.storage.get("nombreUsuario");
    console.log("El nombre guardo es: "+nombre)
  }

  toHome() {

    this.router.navigate(['/login']);
  }
}

