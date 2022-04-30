import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { IndexComponent } from './components/index/index.component';
import { IssueListComponent } from './components/issue/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue/issue-detail/issue-detail.component';
import { IssueFormComponent } from './components/issue/issue-form/issue-form.component';
import { RoutingModule } from './routing/routing.module';
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IssueNewComponent } from './components/issue/issue-new/issue-new.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IssueListComponent,
    IssueDetailComponent,
    IssueFormComponent,
    StatusFilterComponent,
    IssueNewComponent
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
