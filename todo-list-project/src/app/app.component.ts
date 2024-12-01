import { Component } from '@angular/core';
import {describe} from 'node:test';

type Todo = {title: string, project: Project, priority: any, date: any, details: string, isEditing: boolean};
type Project = {todo: Todo[], name: string}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoSelector : string = "Home";

  isAddNewProject : boolean = false;



addNewProject(){
  this.isAddNewProject = true;
}
selectProject(name:string){
  this.todoSelector = name;
}
selectToday(){
  this.todoSelector = "Today";
}
selectWeek(){
  this.todoSelector = "Week";
}
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
  isWeek(date: Date) : boolean{
  const today = new Date();
  const endOfWeek = new Date();
  endOfWeek.setDate(today.getDate() + 7);

  return date >= today && date <= endOfWeek;
  }

  editTodo(i: number){
    this.todos[i].isEditing = true;
  }

  saveEdit(i: number){
  this.todos[i].isEditing = false;
  }

  // Initialize projects
  projects: Project[] = [
    { name: "Work", todo: [] },
    { name: "Personal", todo: [] },
    { name: "Fitness", todo: [] },
    { name: "Hobby", todo: [] },
    { name: "Travel", todo: [] }
  ];

// Create todos and assign to projects
    todos: Todo[] = [
    {
      title: "Finish project proposal",
      project: this.projects[0], // Work
      priority: "High",
      date: new Date('November 25, 2024 03:24:00'),
      details: "Complete and submit the project proposal to the manager.",
      isEditing: false
    },
    {
      title: "Organize closet",
      project: this.projects[1], // Personal
      priority: "Medium",
      date: new Date(),
      details: "Clean and reorganize the closet for the new season.",
      isEditing: false
    },
    {
      title: "Go for a morning jog",
      project: this.projects[2], // Fitness
      priority: "High",
      date: new Date(),
      details: "Run a 5K to improve stamina and endurance.",
      isEditing: false
    },
    {
      title: "Complete painting project",
      project: this.projects[3], // Hobby
      priority: "Low",
      date: new Date(),
      details: "Finish the watercolor painting started last week.",
      isEditing: false
    },
    {
      title: "Research vacation destinations",
      project: this.projects[4], // Travel
      priority: "Medium",
      date: new Date(),
      details: "Look up destinations and activities for the summer trip.",
      isEditing: false
    },
    {
      title: "Prepare for team meeting",
      project: this.projects[0], // Work
      priority: "High",
      date: new Date(),
      details: "Gather slides and data for tomorrow's meeting.",
      isEditing: false
    },
    {
      title: "Buy groceries",
      project: this.projects[1], // Personal
      priority: "Medium",
      date: new Date(),
      details: "Purchase items for the week, including fruits and snacks.",
      isEditing: false
    },
    {
      title: "Schedule yoga session",
      project: this.projects[2], // Fitness
      priority: "Low",
      date: new Date(),
      details: "Book a slot at the nearby yoga studio for the weekend.",
      isEditing: false
    },
    {
      title: "Learn guitar chords",
      project: this.projects[3], // Hobby
      priority: "Medium",
      date: new Date(),
      details: "Practice the new set of guitar chords learned in class.",
      isEditing: false
    },
    {
      title: "Book hotel for vacation",
      project: this.projects[4], // Travel
      priority: "High",
      date: new Date(),
      details: "Confirm and book the hotel for the upcoming trip.",
      isEditing: false
    }
  ];
}
