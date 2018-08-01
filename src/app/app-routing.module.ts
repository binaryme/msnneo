import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessengerComponent } from './pages/messenger/messenger.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: MessengerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: MessengerComponent },
  { path: 'mensajes/:user', component: MessengerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
