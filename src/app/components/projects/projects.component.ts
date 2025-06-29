// projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string; // Reemplazamos `image` por `icon`
  github: string;
  demo?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Personal - Alberto Campanero Arévalo',
      description: 'Mi portafolio hecho con Angular y efectos visuales futuristas para que me conozcas.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      icon: 'fas fa-laptop-code', // Icono de proyecto
      github: 'https://github.com/14acarevalo/portfolio-alberto '
    },
    {
      title: 'App de Gestión de reservas "HomeCircle"',
      description: 'Aplicación full-stack para gestionar reservas de casas con Spring Boot y Angular.',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Angular', 'MySQL'],
      icon: 'fas fa-calendar-check', // Icono de gestión de reservas
      github: 'https://github.com/14acarevalo/HomeCircle '
    },
    {
      title: 'Sportare - App de Gestión de Eventos Deportivos y culturales',
      description: 'Aplicación full-stack para gestionar eventos deportivos y culturales',
      technologies: ['Django', 'Python', 'Sqlite', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-futbol', // Icono deportivo
      github: 'https://github.com/14acarevalo/TFG_ALBERTO_CAMPANERO_AR-VALO_2DAW '
    },
    {
      title: 'EventsCars - App de Gestión de coches clásicos',
      description: 'Aplicación para la gestión de coches clásicos, con funcionalidades de CRUD y autenticación.',
      technologies: ['Flask', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-car', // Icono de coche
      github: 'https://github.com/14acarevalo/Proyecto-intermodular '
    },
    {
      title: 'Análisis de sistema de fraude de tarjetas de crédito',
      description: 'Aplicación para la detección de fraudes en transacciones con tarjetas de crédito, utilizando técnicas de machine learning.',
      technologies: ['Python'],
      icon: 'fas fa-shield-alt', // Icono de seguridad
      github: 'https://github.com/14acarevalo/Analisis-de-fraude-bancario '
    },
    {
      title: 'GestSport - App de Gestión de Instalaciones Deportivas',
      description: 'Aplicación para la gestión y control de instalaciones deportivas, con funcionalidades de CRUD y autenticación.',
      technologies: ['Java', 'MySQL', 'HTML5', 'CSS', 'JavaScript'],
      icon: 'fas fa-dumbbell', // Icono deportivo
      github: 'https://github.com/14acarevalo/Sportare '
    }
  ];
}
