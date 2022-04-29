import { NgModule } from '@angular/core';
import { ListComponent } from '../components/issue/list/list.component';
import { FormComponent } from '../components/issue/form/form.component';
import { DetailComponent } from '../components/issue/detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
  },
  {
    path: "issues",
    component: ListComponent,
  },
  {
    path: "issues/new",
    component: FormComponent,
  },
  {
    path: "issues/:id",
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
