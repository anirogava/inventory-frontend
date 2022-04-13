import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { ShellModule } from './shell/shell.module';
import { HttpClientModule } from '@angular/common/http';
import { storeService } from './content/store.service';
import { AuthService, initializeAppFactory } from './auth/service/auth.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule,
    AppRoutingModule,
    ContentModule,
    HttpClientModule,
  ],
  providers: [
    storeService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
