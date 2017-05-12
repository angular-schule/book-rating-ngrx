import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPresentationComponent } from './dashboard-presentation/dashboard-presentation.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './shared/book-store.service';

import { rootReducer } from './_reducers/rootReducer';
import { IAppState } from './_reducers/types';
import { CounterActions } from './_actions/counter.action';
import { BooksActions } from './_actions/books.action';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardPresentationComponent,
    BookComponent,
    CreateBookComponent,
    BookDetailsComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [
    BookStoreService,
    DevToolsExtension,
    CounterActions,
    BooksActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    ngReduxRouter: NgReduxRouter,
    devTools: DevToolsExtension) {

    ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );

    ngReduxRouter.initialize();
  }
}
