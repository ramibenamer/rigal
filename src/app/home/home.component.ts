import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employees = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ];

  professionals = [
    { id: 1, name: 'Dr. Smith', email: 'smith@example.com' },
    { id: 2, name: 'Dr. Johnson', email: 'johnson@example.com' }
  ];

  disponibilites = [
    { professionalId: 1, times: ['10:00 AM', '02:00 PM'] },
    { professionalId: 2, times: ['11:00 AM', '03:00 PM'] }
  ];

  rendezvous = [
    { id: 1, employeeId: 1, professionalId: 1, time: '2024-12-01T10:00', status: 'Pending' },
    { id: 2, employeeId: 2, professionalId: 2, time: '2024-12-01T15:00', status: 'Confirmed' }
  ];

  // Separate new entity objects for each form
  newEmployee = { name: '', email: '' };
  newProfessional = { name: '', email: '' };
  newDisponibilite = { professionalId: '', times: '' };
  newRendezvous = { employeeId: '', professionalId: '', time: '', status: 'Pending' };

  // Methods for CRUD operations
  addEmployee() {
    this.employees.push({ ...this.newEmployee, id: Date.now() });
    this.newEmployee = { name: '', email: '' };
  }

  addProfessional() {
    this.professionals.push({ ...this.newProfessional, id: Date.now() });
    this.newProfessional = { name: '', email: '' };
  }

  addDisponibilite() {
    this.disponibilites.push({
      professionalId: +this.newDisponibilite.professionalId,
      times: this.newDisponibilite.times.split(',').map(time => time.trim())
    });
    this.newDisponibilite = { professionalId: '', times: '' };
  }

  addRendezvous() {
    this.rendezvous.push({
      ...this.newRendezvous,
      id: Date.now(),
      employeeId: +this.newRendezvous.employeeId,
      professionalId: +this.newRendezvous.professionalId
    });
    this.newRendezvous = { employeeId: '', professionalId: '', time: '', status: 'Pending' };
  }

  deleteEntity(type: string, index: number) {
    if (type === 'employee') this.employees.splice(index, 1);
    if (type === 'professional') this.professionals.splice(index, 1);
    if (type === 'disponibilite') this.disponibilites.splice(index, 1);
    if (type === 'rendezvous') this.rendezvous.splice(index, 1);
  }

  updateStatus(index: number, status: string) {
    this.rendezvous[index].status = status;
  }
}