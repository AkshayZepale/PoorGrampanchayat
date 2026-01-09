import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  isCollapsed = true;
constructor(private router: Router) {}
  feedback = {
    name: '',
    email: '',
    message: ''
  };

  submitFeedback() {
    const serviceID = 'service_rv0vb2i';
    const templateID = 'template_yw37gqq';
    const publicKey = 'DbZsd-5fhZOBQznun';
                
    emailjs.send(serviceID, templateID, this.feedback, publicKey)
      .then(() => {
        alert('Feedback sent successfully!');
        this.router.navigate(['./home.component.html']);
        this.feedback = { name: '', email: '', message: '' };
      })
      .catch((err) => {
        console.error('Failed to send feedback:', err);
        alert('Error sending feedback. Try again.');
      });
  }

    oncancel()
    {
       alert('Please confirm: Do you want to cancel the feedback form?');
      this.router.navigate(['./home.component.html']);
    }

      closeMenu() {
  this.isCollapsed = true;  // 👈 Auto close menu
}
}
