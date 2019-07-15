import { Injectable } from '@angular/core';
import { Skill } from './model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
 private _skills:Skill[]=[
   {name:'html5',progress:'80%'},
   {name:'css3',progress:'80%'},
   {name:'bootstarp',progress:'90%'},
   {name:'ionic',progress:'85%'},
   {name:'javascript',progress:'80%'},
   {name:'Angular',progress:'85%'},
   {name:'jquery',progress:'70%'},
   {name:'json',progress:'90%'},
   {name:'Cordova & Capacitor',progress:'80%'},
   {name:'PHP',progress:'70%'},
   {name:'OOP Concept',progress:'85%'},
   {name:'git / github',progress:'80%'},
   
 ];
  constructor() { }
 get skills(){
   return this._skills;
 }
}
