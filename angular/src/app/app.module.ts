import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { StudioComponent } from './studio/studio.component';
import { HomeComponent } from './home/home.component';
import { AddvideoComponent } from './addvideo/addvideo.component';
import{HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EditvideoComponent } from './editvideo/editvideo.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    StudioComponent,
    HomeComponent,
    AddvideoComponent,
    EditvideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
