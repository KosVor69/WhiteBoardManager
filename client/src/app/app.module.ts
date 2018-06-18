import { ContainerApi } from './../sdk/services/custom/Container';
import { UserApi } from './../sdk/services/custom/User';
import { ErrorHandler } from './../sdk/services/core/error.service';
import { TimelineApi } from './../sdk/services/custom/Timeline';
import { ShiftApi } from './../sdk/services/custom/Shift';
import { CustomerApi } from './../sdk/services/custom/Customer';
import { JSONSearchParams } from './../sdk/services/core/search.params';
import { InternalStorage } from './../sdk/storage/storage.swaps';
import { LoopBackAuth } from './../sdk/services/core/auth.service';
import { SocketDriver } from './../sdk/sockets/socket.driver';
import { SocketConnection } from './../sdk/sockets/socket.connections';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component' ;
import { MainService } from './service/main.service';
import {NgxMaskModule} from 'ngx-mask';
import { LineApi } from './../sdk/services/custom/Line';
import { SDKModels, StorageBrowser } from '../sdk/index';
import { SettingsComponent } from './settings/settings.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule
  , MatCheckboxModule
  , MatToolbarModule
  , MatIconModule
  , MatListModule
  , MatFormFieldModule
  , MatInputModule
  , MatSelectModule
  , MatSlideToggleModule,
  MatCardModule,
  MatChipsModule} from '@angular/material';
import { validateConfig } from '@angular/router/src/config';
import { CustomerDialogComponent} from './forms/customer-form.component';
import { LineDialogComponent} from './forms/line-form.component';
import { ShiftDialogComponent} from './forms/shift-form.component';
import { CdkTableModule } from '@angular/cdk/table';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'board', component: BoardComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent
    , BoardComponent
    , HomeComponent
    , SettingsComponent
    , CustomerDialogComponent
    , LineDialogComponent
    , ShiftDialogComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    ,  RouterModule.forRoot(appRoutes, {useHash: true})
    , FormsModule
    , ReactiveFormsModule
    , HttpModule
    , BrowserAnimationsModule
    , MatButtonModule
    , MatCheckboxModule
    , MatToolbarModule
    , MatIconModule
    , MatListModule
    , MatFormFieldModule
    , MatInputModule
    , MatSelectModule
    , MatSlideToggleModule
    , MatCardModule
    , CdkTableModule
    , MatDialogModule
    , MatChipsModule
    ,  NgxMaskModule.forRoot()
  ],
  providers: [
    MainService
    , SocketConnection
    , SocketDriver
    , SDKModels
    , LoopBackAuth
    , InternalStorage
    , StorageBrowser
    , JSONSearchParams
    , ErrorHandler
    , LineApi
    , CustomerApi
    , ShiftApi
    , TimelineApi
    , UserApi
    , ContainerApi ],
    entryComponents: [
      CustomerDialogComponent
      , LineDialogComponent
      , ShiftDialogComponent
  ],
  bootstrap: [AppComponent]
  , exports: [ RouterModule ]
})
export class AppModule { }
