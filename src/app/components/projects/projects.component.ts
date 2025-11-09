// src/app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
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
  // Proyectos tecnológicos (manténlos como estaban)
  projects: Project[] = [
    {
      title: 'Portfolio Personal - Alberto Campanero Arévalo',
      description: 'Mi portafolio hecho con Angular y efectos visuales futuristas para que me conozcas.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      icon: 'fas fa-laptop-code',
      github: 'https://github.com/14acarevalo/Portfolio-Alberto'
    },
    {
      title: 'App de Gestión de reservas "HomeCircle"',
      description: 'Aplicación full-stack para gestionar reservas de casas con Spring Boot y Angular.',
      technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'Angular', 'MySQL'],
      icon: 'fas fa-calendar-check',
      github: 'https://github.com/14acarevalo/HomeCircle '
    },
    {
      title: 'Sportare - App de Gestión de Eventos Deportivos y culturales',
      description: 'Aplicación full-stack para gestionar eventos deportivos y culturales',
      technologies: ['Django', 'Python', 'Sqlite', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-futbol',
      github: 'https://github.com/14acarevalo/TFG_ALBERTO_CAMPANERO_AR-VALO_2DAW '
    },
    {
      title: 'EventsCars - App de Gestión de coches clásicos',
      description: 'Aplicación para la gestión de coches clásicos, con funcionalidades de CRUD y autenticación.',
      technologies: ['Flask', 'MySQL', 'Bootstrap', 'JavaScript'],
      icon: 'fas fa-car',
      github: 'https://github.com/14acarevalo/Proyecto-intermodular '
    },
    {
      title: 'Análisis de sistema de fraude de tarjetas de crédito',
      description: 'Aplicación para la detección de fraudes en transacciones con tarjetas de crédito, utilizando técnicas de machine learning.',
      technologies: ['Python'],
      icon: 'fas fa-shield-alt',
      github: 'https://github.com/14acarevalo/Analisis-de-fraude-bancario '
    },
    {
      title: 'GestSport - App de Gestión de Instalaciones Deportivas',
      description: 'Aplicación para la gestión y control de instalaciones deportivas, con funcionalidades de CRUD y autenticación.',
      technologies: ['Java', 'MySQL', 'HTML5', 'CSS', 'JavaScript'],
      icon: 'fas fa-dumbbell',
      github: 'https://github.com/14acarevalo/Sportare '
    }
  ];

  // Media para la sección deportiva: añade aquí todas las imágenes y vídeos que quieras
  sportMedia: Array<{ image?: string; youtubeEmbed?: string; alt?: string }> = [
  { image: 'assets/projects/golgorio1.jpg', alt: 'Golgorio' },
  { image: 'assets/projects/Triatlon.png', alt: 'Cartel Triatlon' },
  { image: 'assets/projects/gala.png', alt: 'Cartel Gala' },
  { image: 'assets/projects/escuela_femenina.png', alt: 'Cartel escuela' },
  { image: 'assets/projects/memorial.png', alt: 'Cartel memorial' },
  { image: 'assets/projects/natacion.png', alt: 'Cartel natacion' },
  { image: 'assets/projects/carrera_mujer.png', alt: 'Cartel Carrera 2024' },
  { image: 'assets/projects/padel.png', alt: 'Cartel padel' },
  { image: 'assets/projects/roller.png', alt: 'Cartel roller' },
  { image: 'assets/projects/valencia.png', alt: 'Cartel valencia' },
];
}
