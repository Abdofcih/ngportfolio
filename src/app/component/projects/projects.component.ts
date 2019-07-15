import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/dataServices/model/project';
import { ProjectsService } from 'src/app/dataServices/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:Project[]=[];
  constructor(private projectsService : ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;

  }

}
