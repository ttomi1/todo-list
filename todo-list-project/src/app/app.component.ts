import { Component } from '@angular/core';
import {describe} from 'node:test';

import priority = module
import * as module from 'module';

type Todo = {title: string, project: string, priority: any, date: Date, details: string, isEditing: boolean};
type Project = {todo: Todo[], name: string}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoSelector : string = "Home";

  isAddNewProject : boolean = false;

  isAddNewTodo : boolean = false;
  formattedDate : string = '';

  newProject : Project = {
    todo: [],
    name: ''
  };

  newTodo : Todo = {
    title: '',
    project: '',
    priority: '',
    date: new Date(),
    details: '',
    isEditing: false
  };
  saveTodo(){
    this.newTodo.title = this.newTodo.title.trim();
    this.newTodo.details = this.newTodo.details.trim();
    this.newTodo.project = this.todoSelector;
    this.todos.push(this.newTodo);
    this.newTodo = {
      title: '',
      project: '',
      priority: '',
      date: new Date(),
      details: '',
      isEditing: false
    };
    this.formattedDate = '';
    console.log('Save called', this.isAddNewTodo);
    this.isAddNewTodo = false;
    console.log('Save called', this.isAddNewTodo);
  }
  onDateChange(value : string){
    this.newTodo.date = new Date(value);
  }
  cancelTodo(){
    this.newTodo = {
      title: '',
      project: '',
      priority: '',
      date: new Date(),
      details: '',
      isEditing: false
    };

    this.isAddNewTodo = false;
  }
  cancelProject(){
    this.isAddNewProject = false;
  }
saveProject(){
  this.newProject.name.trim();
  this.projects.push(this.newProject);
  this.newProject = {todo: [], name: ''};
  this.isAddNewProject = false;
}
addNewTodo(){
    this.isAddNewTodo = true;
}
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
      project: this.projects[0].name, // Work
      priority: "High",
      date: new Date('November 25, 2024 03:24:00'),
      details: "Complete and submit the project proposal to the manager.",
      isEditing: false
    },
    {
      title: "Organize closet",
      project: this.projects[1].name, // Personal
      priority: "Medium",
      date: new Date(),
      details: "Clean and reorganize the closet for the new season.",
      isEditing: false
    },
    {
      title: "Go for a morning jog",
      project: this.projects[2].name, // Fitness
      priority: "High",
      date: new Date(),
      details: "Run a 5K to improve stamina and endurance.",
      isEditing: false
    },
    {
      title: "Complete painting project",
      project: this.projects[3].name, // Hobby
      priority: "Low",
      date: new Date(),
      details: "Finish the watercolor painting started last week.",
      isEditing: false
    },
    {
      title: "Research vacation destinations",
      project: this.projects[4].name, // Travel
      priority: "Medium",
      date: new Date(),
      details: "Look up destinations and activities for the summer trip.",
      isEditing: false
    },
    {
      title: "Prepare for team meeting",
      project: this.projects[0].name, // Work
      priority: "High",
      date: new Date(),
      details: "Gather slides and data for tomorrow's meeting.",
      isEditing: false
    },
    {
      title: "Buy groceries",
      project: this.projects[1].name, // Personal
      priority: "Medium",
      date: new Date(),
      details: "Purchase items for the week, including fruits and snacks.",
      isEditing: false
    },
    {
      title: "Schedule yoga session",
      project: this.projects[2].name, // Fitness
      priority: "Low",
      date: new Date(),
      details: "Book a slot at the nearby yoga studio for the weekend.",
      isEditing: false
    },
    {
      title: "Learn guitar chords",
      project: this.projects[3].name, // Hobby
      priority: "Medium",
      date: new Date(),
      details: "Practice the new set of guitar chords learned in class.",
      isEditing: false
    },
    {
      title: "Book hotel for vacation",
      project: this.projects[4].name, // Travel
      priority: "High",
      date: new Date(),
      details: "Confirm and book the hotel for the upcoming trip.",
      isEditing: false
    }
  ];

  protected readonly priority = priority;
}
