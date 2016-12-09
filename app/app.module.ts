import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { IntroComponent} from './components/intro/intro.component';
import {ThemeCardComponent} from './components/theme-card/theme-card.component';
import {ThemeListComponent} from './components/theme-list/theme-list.component';
import {HomeComponent} from './components/home/home.component';
import {QuestionCardComponent} from './components/question-card/question-card.component';
import {QuestionListComponent} from './components/question-list/question-list.component';
import {ThemeStoreService} from './services/theme-store/theme-store.service';
import {QuestionStoreService} from './services/question-store/question-store.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule, 
                  MaterialModule.forRoot(), 
                  HttpModule, 
                  JsonpModule,
                  RouterModule.forRoot([
                    {
                      path:'',
                      component: HomeComponent
                    },
                    {
                      path:'questions',
                      component: QuestionListComponent
                    }
                  ]) ],
  declarations: [ AppComponent, IntroComponent, ThemeCardComponent, HomeComponent,ThemeListComponent, 
                  QuestionCardComponent, 
                  QuestionListComponent ],
  providers: [ThemeStoreService, QuestionStoreService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
