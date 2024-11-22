import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-aprendiz',
  templateUrl: './aprendiz.component.html',
  styleUrl: './aprendiz.component.css'
})
export class AprendizComponent  implements OnInit{

  //Aquí creamos las propiedades
  aprendiz: any[] =[];
  loading:boolean = true;
  error:string = '';
  mensajeaprendiz:string = 'aprendices disponibles';

  //Inyectar las dependencias
  constructor(private apiService: ApiService){}


   //Usamos el OnInit

   ngOnInit(): void {
    this.cargarAprendiz();
    this.apiService.getInstructor();
}


cargarAprendiz(): void {
  this.apiService.getAprendiz().subscribe(
    (response) => {
      if (response.success) {
        this.aprendiz = response.aprendiz;
       
        
      } else {
        this.error = response.message; 
      }
      this.loading = false;  
    },
    (error) => {
      this.error = 'Error al cargar los datos.';  
      this.loading = false; 
    }
  );
}

}
