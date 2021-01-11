import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component : ContactsComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddComponent,
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {id : 0},
  },
  {
    path: 'edit',
    component: EditComponent,
    data: {id : 0},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
