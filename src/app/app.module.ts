import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { FocuserDirective } from '../shared/directives';
import { PluralizePipe } from '../shared/pipes';
import { SelectPopoverComponent } from '../shared/components/select-popover';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    FocuserDirective,
    PluralizePipe,
    SelectPopoverComponent,
    AppComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
