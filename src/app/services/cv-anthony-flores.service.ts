import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvAnthonyFloresService {
  //declaramos alrrays va
  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];


  constructor(private http: HttpClient) {
    //llamamos la funsion CargarProfesional
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarBlog();
  }
  //metodo
  private CargarProfesional() {
    this.http.get('https://cv-anthonyflores-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
      });
  }

  private CargarEducacion() {
    this.http.get('https://cv-anthonyflores-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
      });
  }

  private CargarTestimonio() {
    this.http.get('https://cv-anthonyflores-default-rtdb.firebaseio.com/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
      });
  }

  private CargarExperiencia() {
    this.http.get('https://cv-anthonyflores-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
      });
  }

  private CargarBlog() {
    this.http.get('https://cv-anthonyflores-default-rtdb.firebaseio.com/Blog.json')
      .subscribe((resp: any[]) => {
        this.blog = resp;
        console.log(resp);
      });
  }
}
