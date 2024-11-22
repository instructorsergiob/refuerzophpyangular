import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor/instructor.component';
import { AprendizComponent } from './aprendiz/aprendiz.component';
import { AprendizFichaComponent } from './aprendiz-ficha/aprendiz-ficha.component';


const routes: Routes = [

    {  path: 'instructor', component: InstructorComponent  },
    {  path: 'aprendiz', component: AprendizComponent  },
    {  path: 'aprendiz_ficha', component: AprendizFichaComponent  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
