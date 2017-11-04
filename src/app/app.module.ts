import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Cloudinary } from 'cloudinary-core';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import { SmoothScrollToDirective, SmoothScrollDirective } from 'ng2-smooth-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { WorkService } from './portfolio/work.service';
import { WorkModalComponent } from './work-modal/work-modal.component';
import { WindowSizeService } from './services/window-size.service';

const cloudConfig = {
  cloud_name: 'dzgtgeotp'
};

const cloudinaryLib = {
  Cloudinary: Cloudinary
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    WorkComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    WorkModalComponent
  ],
  imports: [
    CloudinaryModule.forRoot(cloudinaryLib, cloudConfig),
    BrowserModule
  ],
  providers: [
    WorkService,
    WindowSizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
