import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, SidenavComponent, PrivateLayoutComponent, PublicLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
