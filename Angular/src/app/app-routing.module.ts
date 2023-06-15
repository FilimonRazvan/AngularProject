import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'create', component: AddComponent},
  { path: 'edit/:id', component: EditComponent}
];

@NgModule({
  imports: [
            RouterModule.forRoot(routes),
            ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
