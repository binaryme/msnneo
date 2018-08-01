import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RightbarComponent } from './components/rightbar/rightbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserlistComponent } from './components/userlist/userlist.component';
import { DropdownsettingsComponent } from './components/dropdownsettings/dropdownsettings.component';
import { OnlineofflineDirective } from './directivas/onlineoffline.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    RightbarComponent,
    UserlistComponent,
    FilterPipe,
    DropdownsettingsComponent,
    OnlineofflineDirective
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
