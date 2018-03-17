import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { PreviewComponent } from './preview/preview.component';

import { SearchService } from './search.service';
import { MapkeysPipe } from './mapkeys.pipe';
import { DetailComponent } from './detail/detail.component';
import { DataServiceService } from './data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    SearchComponent,
    PreviewComponent,
    MapkeysPipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
