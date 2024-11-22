import { Component, OnInit  } from '@angular/core';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-aprendiz-ficha',
  templateUrl: './aprendiz-ficha.component.html',
  styleUrl: './aprendiz-ficha.component.css'
})
export class AprendizFichaComponent implements OnInit{
 
  //Aquí creamos las propiedades
  aprendiz_ficha: any[] =[];
  loading:boolean = true;
  error:string = '';
  mensajeaprendizFicha:string = 'Fichas disponibles para aprendiz';


   
  //Inyectar las dependencias
  constructor(private apiService: ApiService){}

  //Usamos el OnInit

  ngOnInit(): void {
    this.cargarAprendizFicha();
    this.apiService.getAprendizFicha();
}

cargarAprendizFicha(): void {
  this.apiService.getAprendizFicha().subscribe(
    (response) => {
      if (response.success) {
        this.aprendiz_ficha = response.aprendiz_ficha;
       
        
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
