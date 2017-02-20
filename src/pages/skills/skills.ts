import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { Skill } from '../../app/app.types';
import { SelectPopoverComponent, SelectOption } from '../../shared/components/select-popover';
import { SkillPage } from '../skill/skill';

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html'
})
export class SkillsPage {
  items: Skill[] = [
    {name: 'Yii', image: 'php', language: 'PHP', type: 1, level: 2, tags: 'web, framework, mvc', logo: 'yii.png', url: 'www.yiiframework.com'},
    {name: 'Symfony', image: 'php', language: 'PHP', type: 1, level: 1, tags: 'web, framework, mvc, twig', logo: 'symfony.svg', url: 'symfony.com'},
    {name: 'Laravel', image: 'php', language: 'PHP', type: 1, level: 0, tags: 'web, framework, mvc, blade', logo: 'laravel.png', url: 'laravel.com'},
    {name: 'Node.js', image: 'js', language: 'JavaScript', type: 1, level: 1, tags: 'web', logo: 'nodejs.png', url: 'nodejs.org'},
    {name: 'Express', image: 'js', language: 'JavaScript', type: 1, level: 1, tags: 'web', logo: 'express.jpg', url: 'expressjs.com'},
    {name: 'MySQL', image: 'default', language: 'SQL', type: 1, level: 2, tags: 'base de données, sql', logo: 'mysql.svg', url: 'www.mysql.com'},
    {name: 'MongoDB', image: 'default', language: '', type: 1, level: 0, tags: 'base de données, nosql', logo: 'mongodb.png', url: 'mongodb.com'},
    {name: 'VueJS 2', image: 'js', language: 'JavaScript', type: 2, level: 1, tags: 'web, librairie, mvvm', logo: 'vuejs.png', url: 'vuejs.org'},
    {name: 'Ionic 2', image: 'js', language: 'JavaScript', type: 2, level: 2, tags: 'mobile, web, framework, mvvm', logo: 'ionic.png', url: 'ionicframework.com'},
    {name: 'Angular 2', image: 'js', language: 'JavaScript', type: 2, level: 2, tags: 'web, framework, mvvm', logo: 'angular.svg', url: 'angular.io'},
    {name: 'React Native', image: 'js', language: 'JavaScript', type: 2, level: 1, tags: 'mobile, librairie, mvvm', logo: 'react.svg', url: 'facebook.github.io/react-native'},
    {name: 'React', image: 'js', language: 'JavaScript', type: 2, level: 2, tags: 'web, librairie, mvvm', logo: 'react.svg', url: 'facebook.github.io/react'},
    {name: 'Appcelerator Titanium', image: 'js', language: 'JavaScript', type: 2, level: 2, tags: 'mobile, web, framework, mvc', logo: 'appcelerator-titanium.png', url: 'appcelerator.com'},
    {name: 'jQuery', image: 'js', language: 'JavaScript', type: 2, level: 2, tags: 'web, librairie', logo: 'jquery.png', url: 'jquery.com'},
    {name: 'Bootstrap', image: 'html', language: 'CSS', type: 2, level: 2, tags: 'web, framework, design', logo: 'bootstrap.png', url: 'getbootstrap.com'},
    {name: 'SASS', image: 'html', language: 'CSS', type: 2, level: 1, tags: 'web, design', logo: 'sass.svg', url: 'sass-lang.com'},
    {name: 'LESS', image: 'html', language: 'CSS', type: 2, level: 2, tags: 'web, design', logo: 'less.png', url: 'lesscss.org'},
    {name: 'Stylus', image: 'html', language: 'CSS', type: 2, level: 2, tags: 'web, design', logo: 'stylus.svg', url: 'stylus-lang.com'},
    {name: 'TypeScript', image: 'js', language: 'JavaScript', type: 3, level: 1, tags: 'compilation, transpilation', logo: 'typescript.png', url: 'www.typescriptlang.org'},
    {name: 'Babel', image: 'js', language: 'JavaScript', type: 3, level: 2, tags: 'compilation, transpilation', logo: 'babel.png', url: 'babeljs.io'},
    {name: 'Webpack', image: 'js', language: 'JavaScript', type: 3, level: 1, tags: 'build', logo: 'webpack.png', url: 'webpack.github.io'},
    {name: 'Gulp', image: 'js', language: 'JavaScript', type: 3, level: 2, tags: 'build', logo: 'gulp.png', url: 'gulpjs.com'},
    {name: 'Grunt', image: 'js', language: 'JavaScript', type: 3, level: 2, tags: 'build', logo: 'grunt.jpg', url: 'gruntjs.com'},
    {name: 'Git', image: 'default', language: '', type: 3, level: 2, tags: 'versioning', logo: 'github.png', url: 'github.com'}
  ];

  itemsOrig: Skill[] = [];
  displaySearch: boolean = false;
  searchQuery: string = '';
  types: string[] = [
    'Tous',
    'Backend',
    'Frontend',
    'Outils / Infra'
  ];
  type: number = 0;
  levels: string[] = [
    'Initié',
    'Intermédiaire',
    'Avancé'
  ];

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) {}

    ngOnInit(): void {
      this.itemsOrig = this.items;
    }

    typeHeader(item: Skill, itemIndex: number, items: Skill[]): any {
      if (itemIndex === 0 || item.type !== items[itemIndex - 1].type) return this.types[item.type];
      return null;
    }

    filterItems(resetSearch: boolean = false): void {
      if (resetSearch) this.searchQuery = '';
      if (this.searchQuery === '' && this.type === 0) {
        this.items = this.itemsOrig;
        return;
      }

      this.items = this.itemsOrig.filter((item: Skill): boolean => (this.type === 0 || item.type === this.type)
        && (this.searchQuery === ''
          || item.name.toLowerCase().indexOf(this.searchQuery) !== -1
          || item.tags.toLowerCase().indexOf(this.searchQuery) !== -1));
    }

    searchItems(event): void {
      if (!(this.displaySearch && this.itemsOrig && this.itemsOrig.length)) return;
      if (event.target.value === undefined) {
        this.filterItems(true);
        return;
      }
      this.searchQuery = event.target.value.toLowerCase();
      this.filterItems();
    }

    toggleSearch(): void {
      this.displaySearch = !this.displaySearch;
      if (!this.displaySearch) this.filterItems(true);
    }

    presentPopover(event): void {
      const options = this.types.map((type: string, index: number): SelectOption => ({
        label: type,
        value: index
      }));
      const popover = this.popoverCtrl.create(SelectPopoverComponent, {
        title : 'Filtrer',
        options: options,
        value: this.type
      });
      popover.onDidDismiss((type: any): void => {
        if (type === null) return;
        this.type = type;
        this.filterItems();
      });
      popover.present({ev: event});
    }

    itemTapped(item: Skill): void {
      this.navCtrl.push(SkillPage, {item: item});
    }
}
