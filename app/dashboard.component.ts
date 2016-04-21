import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import { Router } from 'angular2/router';


@Component({
    selector:'my-dashboard',
    template:`
<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <div *ngFor="#hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>  


`
})


export class DashboardComponent implements OnInit{
    
    heroes:Hero[]= [];
    constructor(private _heroService:HeroService, private _router:Router){
        
    }
    
    ngOnInit(){
        
        this._heroService.getHeroes().then(heroes=>this.heroes=heroes);
    }
    
    gotoDetail(hero){
         let link = ['HeroDetail', { id: hero.id }];
         this._router.navigate(link);
    }
    
}