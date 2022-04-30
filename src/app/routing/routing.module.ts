import { NgModule } from '@angular/core';
import { IssueListComponent } from '../components/issue/issue-list/issue-list.component';
import { IssueDetailComponent } from '../components/issue/issue-detail/issue-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { IssueFormComponent } from '../components/issue/issue-form/issue-form.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'issues',
    component: IssueListComponent,
  },
  {
    path: 'issues/new',
    component: IssueFormComponent,
  },
  {
    path: 'issues/:id',
    component: IssueDetailComponent,
  },
  {
    path: 'issues/:id/edit',
    component: IssueFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
