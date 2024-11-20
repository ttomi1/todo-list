import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  comment: string = '';
  comments: { username: string; text: string; isEditing: boolean }[] = [];

  // Add a new comment
  addComment() {
    if (this.username.trim() && this.comment.trim()) {
      this.comments.push({
        username: this.username,
        text: this.comment,
        isEditing: false
      });
      this.username = ''; // Clear input fields
      this.comment = '';
    } else {
      alert('Please fill in both fields!');
    }
  }

  // Enable editing for a specific comment
  editComment(index: number) {
    this.comments[index].isEditing = true;
  }

  // Save edited comment
  saveComment(index: number) {
    this.comments[index].isEditing = false;
  }
}
