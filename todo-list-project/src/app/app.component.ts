import { Component } from '@angular/core';
type Todo = {title: string, project: Project, priority: any, date: any, details: string};
type Project = {todo: Todo[], name: string}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  todoSelector : string = "Home";






selectProject(name:string){
  this.todoSelector = name;
}
selectToday(){

}
selectWeek(){

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
      date: new Date(),
      details: "Complete and submit the project proposal to the manager."
    },
    {
      title: "Organize closet",
      project: this.projects[1], // Personal
      priority: "Medium",
      date: new Date(),
      details: "Clean and reorganize the closet for the new season."
    },
    {
      title: "Go for a morning jog",
      project: this.projects[2], // Fitness
      priority: "High",
      date: new Date(),
      details: "Run a 5K to improve stamina and endurance."
    },
    {
      title: "Complete painting project",
      project: this.projects[3], // Hobby
      priority: "Low",
      date: new Date(),
      details: "Finish the watercolor painting started last week."
    },
    {
      title: "Research vacation destinations",
      project: this.projects[4], // Travel
      priority: "Medium",
      date: new Date(),
      details: "Look up destinations and activities for the summer trip."
    },
    {
      title: "Prepare for team meeting",
      project: this.projects[0], // Work
      priority: "High",
      date: new Date(),
      details: "Gather slides and data for tomorrow's meeting."
    },
    {
      title: "Buy groceries",
      project: this.projects[1], // Personal
      priority: "Medium",
      date: new Date(),
      details: "Purchase items for the week, including fruits and snacks."
    },
    {
      title: "Schedule yoga session",
      project: this.projects[2], // Fitness
      priority: "Low",
      date: new Date(),
      details: "Book a slot at the nearby yoga studio for the weekend."
    },
    {
      title: "Learn guitar chords",
      project: this.projects[3], // Hobby
      priority: "Medium",
      date: new Date(),
      details: "Practice the new set of guitar chords learned in class."
    },
    {
      title: "Book hotel for vacation",
      project: this.projects[4], // Travel
      priority: "High",
      date: new Date(),
      details: "Confirm and book the hotel for the upcoming trip."
    }
  ];

}
