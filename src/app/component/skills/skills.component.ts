import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/dataServices/model/skill';
import { SkillsService } from 'src/app/dataServices/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:Skill[]=[];
  constructor(private skillsService:SkillsService) { }

  ngOnInit() {
    this.skills = this.skillsService.skills;
  }


}
