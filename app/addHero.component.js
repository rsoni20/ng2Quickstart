System.register(['angular2/core', './hero.service', './hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, hero_1;
    var AddHeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            AddHeroComponent = (function () {
                function AddHeroComponent(_heroService) {
                    this._heroService = _heroService;
                    this.addHero = {};
                }
                AddHeroComponent.prototype.ngOnInit = function () {
                };
                AddHeroComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AddHeroComponent.prototype.save = function () {
                    this.addHero.id = 21;
                    this._heroService.addHeroe(this.addHero);
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', hero_1.Hero)
                ], AddHeroComponent.prototype, "hero", void 0);
                AddHeroComponent = __decorate([
                    core_1.Component({
                        selector: 'my-addHero',
                        template: "\n  <br>\n <div>\n <h1>Add new Hero</h1>\n <h3>{{addHero.name}} Hero</h3>\n<label >Name</label>\n      <input type=\"text\" placeholder=\"enter hero name\"[(ngModel)]=\"addHero.name\" />\n<br><br>\n      <button (click)=\"save()\">Save</button>\n\n      <button (click)=\"goBack()\">Back</button>\n    \n </div>\n\n  \n\n    "
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], AddHeroComponent);
                return AddHeroComponent;
            }());
            exports_1("AddHeroComponent", AddHeroComponent);
        }
    }
});
//# sourceMappingURL=addHero.component.js.map