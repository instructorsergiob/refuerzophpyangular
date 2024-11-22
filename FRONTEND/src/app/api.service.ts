import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Creamos la propiedad
   private apiUrl = 'http://localhost:3000/BACKEND/index.php';

   //Inyeccion del HttpClient
   constructor(private http: HttpClient) { }

   //Mostramos los datos traidos del componente

   getInstructor() : Observable<any>{
      return this.http.get<any>(`${this.apiUrl}?endpoint=instructor`);
   }

   getAprendiz() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}?endpoint=aprendiz`);
 }

 getAprendizFicha() : Observable<any>{
  return this.http.get<any>(`${this.apiUrl}?endpoint=aprendiz_ficha`);
}

}
