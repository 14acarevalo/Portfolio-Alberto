// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
 // Asegúrate de que esta ruta sea correcta

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
