import {Component} from 'angular2/core';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS}  from 'angular2/router';
import {HeroDetailComponent} from './hero-detail.component';
import {AddHeroComponent} from './addHero.component';

@Component({

    selector: 'my-app',
    template: `
  
    <h1>{{title}}</h1>
    <nav>
   <a [routerLink] ="['Heroes']">Heroes</a><br>
                <a [routerLink]="['Dashboard']">Dashboard</a>
</nav>

     <router-outlet></router-outlet>  
    `,
    
    styles:[
        `h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited, a:link {
  color: #607D8B;
}
nav a:hover {
  color: #039be5;
  background-color: #CFD8DC;
}
nav a.router-link-active {
  color: #039be5;
}`
    ],
    directives: [ROUTER_DIRECTIVES],

    providers: [ROUTER_PROVIDERS, HeroService]


})

@RouteConfig([

    {

        path: '/iamawesome',
        name: 'Heroes',
        component: HeroesComponent
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {

        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {

        path: '/addhero',
        name: 'AddHero',
        component: AddHeroComponent
    }


])

export class AppComponent {

    title = "Tours of Heroes";
}