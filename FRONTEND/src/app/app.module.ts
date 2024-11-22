import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorComponent } from './instructor/instructor.component';
import { AprendizComponent } from './aprendiz/aprendiz.component';
import { AprendizFichaComponent } from './aprendiz-ficha/aprendiz-ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorComponent,
    AprendizComponent,
    AprendizFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
