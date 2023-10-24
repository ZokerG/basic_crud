import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  showAlert(title: string, text: string, type: 'success' | 'error' | 'warning' | 'info' = 'info') {
    Swal.fire({
      title,
      text,
      icon: type,
    });
  }
}