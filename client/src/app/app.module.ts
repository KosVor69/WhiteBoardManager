import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component' ;
import { MainService } from './service/main.service';

const appRoutes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent, BoardComponent, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [ MainService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
