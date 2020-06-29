import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StorageServiceModule } from 'angular-webstorage-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalctestComponent } from './calctest/calctest.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// import { Balance } from './calctest/shared/balance.model';
import { CalcInputComponent } from './calctest/calc-input/calc-input.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoInputComponent } from './todo-app/todo-input/todo-input.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: AboutComponent },
  { path: 'studentloancalc', component: CalctestComponent },
  { path: 'todolist', component: TodoAppComponent },
  // { path: 'servers', component: ServersComponent },
  // { path: 'servers/:id/edit', component: EditServerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalctestComponent,
    AboutComponent,
    HomeComponent,
    CalcInputComponent,
    TodoAppComponent,
    TodoInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
