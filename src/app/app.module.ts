import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Convalent
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdGridListModule,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

// Router
import { appRoutes, appRoutingProviders } from './app.routes';
import { AuthGuardService } from './auth-guard.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optisuonal) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentExpansionPanelModule,
    // router import 
    appRoutes,
    // Material
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdButtonModule,
  ],
  providers: [
    appRoutingProviders,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
