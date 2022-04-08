import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { IndexComponent } from './components/index/index.component';
import { ListComponent } from './components/issue/list/list.component';
import { DetailComponent } from './components/issue/detail/detail.component';
import { NewComponent } from './components/issue/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
