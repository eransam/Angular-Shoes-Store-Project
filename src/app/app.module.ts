import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrandsComponent } from './Components/home-area/brands/brands.component';
import { ClockComponent } from './Components/home-area/clock/clock.component';
import { DiscountComponent } from './Components/home-area/discount/discount.component';
import { HomeComponent } from './Components/home-area/home/home.component';
import { NumOfShoesComponent } from './Components/home-area/num-of-shoes/num-of-shoes.component';
import { OpinionComponent } from './Components/home-area/opinion/opinion.component';
import { YoutubeVideoComponent } from './Components/home-area/youtube-video/youtube-video.component';
import { FooterComponent } from './Components/layout-area/footer/footer.component';
import { HeaderComponent } from './Components/layout-area/header/header.component';
import { LayoutComponent } from './Components/layout-area/layout/layout.component';
import { MenuComponent } from './Components/layout-area/menu/menu.component';


@NgModule({
  declarations: [
      //פה אנו מזמנים את כל הקומפוננטות שיצרנו למודול שלנו
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    YoutubeVideoComponent,
    NumOfShoesComponent,
    ClockComponent,
    DiscountComponent,
    BrandsComponent,
    OpinionComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  //פה אנו קובעים את הקומפוננטה הראשית של הפרוייקט שלנו וכך שאנו רושמים את שם המחלקה של אותה קומפוננטה
  bootstrap: [LayoutComponent]
})
export class AppModule { }
