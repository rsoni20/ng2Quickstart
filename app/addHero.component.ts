import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';


 
@Component({
    selector:'my-addHero',
    template:`
  <br>
 <div>
 <h1>Add new Hero</h1>
 <h3>{{addHero.name}} Hero</h3>
<label >Name</label>
      <input type="text" placeholder="enter hero name"[(ngModel)]="addHero.name" />
<br><br>
      <button (click)="save()">Save</button>

      <button (click)="goBack()">Back</button>
    
 </div>

  

    `
    
})

export class AddHeroComponent implements OnInit{
     @Input() hero: Hero;
  addHero: Hero = <Hero>{};
 
  
   constructor(private _heroService:HeroService){
       
   }
   
    ngOnInit(){
      

    }

    goBack(){
        window.history.back();
    }
    
    save(){
        this.addHero.id = 21;
        this._heroService.addHeroe(this.addHero);
        window.history.back();
    }

}
