import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VotingIntegrationComponent } from './integration-testing/voting-integration/voting-integration.component';
import { UserDetailsComponent } from './integration-testing/user-details/user-details.component';
import { UsersComponent } from './integration-testing/users/users.component';
import { HomeComponent } from './integration-testing/home/home.component';
import { HighlightDirective } from './integration-testing/highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    FormsComponent,
    ServicesComponent,
    VotingIntegrationComponent,
    UserDetailsComponent,
    UsersComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
