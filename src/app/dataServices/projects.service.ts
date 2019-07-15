import { Injectable } from '@angular/core';
import { Project } from './model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
private _projects:Project[]=[
     {imgUrl:'../../../assets/img/projects/cv1.PNG',
     title:'Web Design',
     technologies:['HTML','Bootstarp'],
     codeUrl:"",
     demoUrl:"http://www.chessneeds.com"},
     
     {imgUrl:'../../../assets/img/projects/page1.PNG',
     title:'Web Design',
     technologies:['HTML','css','jquery' ,'Bootstarp'],
     codeUrl:"http://www.chessneeds.com",
     demoUrl:"https://github.com/Abdofcih/chessneeds"},

     {imgUrl:'../../../assets/img/projects/cv2.PNG',
     title:'Front-End development',
     technologies:['HTML','css','jquery' ,'Bootstarp',"Angular"],
     codeUrl:"",
     demoUrl:"http://www.chessneeds.com/cv/updated"},

     {imgUrl:'../../../assets/img/projects/note.PNG',
     title:'ionic note app',
     technologies:['HTML','Css','Ionic','local Storage' ,'Angular'],
     codeUrl:"https://github.com/Abdofcih/ion-Notes",
     demoUrl:""},

     {imgUrl:'../../../assets/img/projects/news1.PNG',
     title:'ionic news v1',
     technologies:['HTML','Css','Ionic' ,'Angular'],
     codeUrl:"",
     demoUrl:"http://chessneeds.com/cv/ion-newsv1/"},

     {imgUrl:'../../../assets/img/projects/news2.PNG',
     title:'ionic news v2',
     technologies:['HTML','Css','Ionic' ,'Angular'],
     codeUrl:"",
     demoUrl:"http://chessneeds.com/cv/ion-newsv2/"},

     {imgUrl:'../../../assets/img/projects/rform.PNG',
     title:'Reactive Forms',
     technologies:['HTML','Css','Bootstrap' ,'Angular'],
     codeUrl:" https://github.com/Abdofcih/AngularReactiveForm-signIn-signUP-",
     demoUrl:"http://chessneeds.com/cv/angular-reactiveforms"},

     {imgUrl:'../../../assets/img/projects/tform.PNG',
     title:'Template Form',
     technologies:['HTML','Css','Bootstrap' ,'Angular'],
     codeUrl:"",
     demoUrl:"http://chessneeds.com/cv/angular-templatDrivenForms"},
];
  constructor() { }
  get projects(){
    return this._projects;
  }
}
