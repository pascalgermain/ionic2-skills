import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Skill } from '../../app/app.types';

@Component({
  selector: 'skill',
  templateUrl: 'skill.html'
})
export class SkillPage {
  selectedItem: Skill;
  types: string[] = [
    'Tous',
    'Backend',
    'Frontend',
    'Outils / Infra'
  ];
  levels: string[] = [
    'Initié',
    'Intermédiaire',
    'Avancé'
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ngOnInit(): void {
    this.selectedItem = this.navParams.get('item');
  }
}
