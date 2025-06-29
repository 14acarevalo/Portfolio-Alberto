import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ContactComponent {
  contactInfo = {
    email: 'alberto.campanero.arevalo@gmail.com',
    phone: '+34 676 125 559',
    location: 'Toledo, España',
    github: 'https://github.com/14acarevalo ',
    linkedin: 'https://www.linkedin.com/in/alberto-c-162930135/ '
  };
}
