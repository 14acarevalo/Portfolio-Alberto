import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  frontend = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Bootstrap', icon: 'fas fa-th-large' }
  ];

  backend = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Spring Boot', icon: 'fas fa-server' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Flask', icon: 'fas fa-flask' }
  ];

  databases = [
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fab fa-cuttlefish' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'SQLite', icon: 'fas fa-file' }
  ];

  versionControl = [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' }
  ];

  ides = [
    { name: 'Visual Studio Code', icon: 'fas fa-laptop-code' },
    { name: 'IntelliJ IDEA', icon: 'fas fa-desktop' },
    { name: 'Eclipse', icon: 'fas fa-tools' }
  ];

  
}
