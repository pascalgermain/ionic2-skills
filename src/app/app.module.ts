import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { FocuserDirective } from '../shared/directives';
import { PluralizePipe } from '../shared/pipes';
import { SelectPopoverComponent } from '../shared/components/select-popover';
import { AppComponent } from './app.component';
import { SkillsPage } from '../pages/skills/skills';
import { SkillPage } from '../pages/skill/skill';

@NgModule({
  declarations: [
    FocuserDirective,
    PluralizePipe,
    SelectPopoverComponent,
    AppComponent,
    SkillsPage,
    SkillPage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SelectPopoverComponent,
    AppComponent,
    SkillsPage,
    SkillPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
