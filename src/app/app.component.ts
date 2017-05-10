import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { Component } from '@angular/core';

import { rootReducer } from './_reducers/rootReducer';
import { IAppState } from './_reducers/types';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [], // middlewares
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );
  }
}
