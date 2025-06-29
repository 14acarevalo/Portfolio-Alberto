import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // ✅ Importado
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule // ✅ Añadido aquí
  ]
})
export class ProjectCardComponent {
  @Input() project!: {
    title: string;
    description: string;
    technologies: string;
    image: string;
    github: string;
    demo: string;
  };
}
