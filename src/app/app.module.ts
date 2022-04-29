import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { IndexComponent } from './components/index/index.component';
import { ListComponent } from './components/issue/list/list.component';
import { DetailComponent } from './components/issue/detail/detail.component';
import { FormComponent } from './components/issue/form/form.component';
import { RoutingModule } from './routing/routing.module';
import { GlinkComponent } from './components/glink/glink.component';
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    IndexComponent,
    ListComponent,
    DetailComponent,
    FormComponent,
    GlinkComponent,
    StatusFilterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
