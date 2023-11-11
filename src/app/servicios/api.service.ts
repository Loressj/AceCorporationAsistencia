import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = 'http://localhost:8080'

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    })
  }

  constructor(private http: HttpClient) { }

  getAsistencia()
  {
    return this.http.get(this.urlApi+'/Asistencia');
  }
  
  createAsesores()
  {

  }

  modificarAsesores()
  {

  }

  eliminarAsesores()
  {

  }

}
