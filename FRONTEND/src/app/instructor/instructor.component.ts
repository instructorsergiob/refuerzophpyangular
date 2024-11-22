import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.css'
})
export class InstructorComponent implements OnInit{

  //Aquí creamos las propiedades
  instructor: any[] =[];
  loading:boolean = true;
  error:string = '';
  mensajeinstructor:string = 'Instructores disponibles';

 
  //Inyectar las dependencias
  constructor(private apiService: ApiService){}

  //Usamos el OnInit

  ngOnInit(): void {
      this.cargarInstructor();
      this.apiService.getInstructor();
  }

  cargarInstructor(): void {
    this.apiService.getInstructor().subscribe(
      (response) => {
        if (response.success) {
          this.instructor = response.instructor;
         
          
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
