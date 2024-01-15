import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfigStateModel } from './config.model';
import { ConfigActions } from './config.actions';
import { MatXtndConfirmationDialogService, MatXtndSnackbarSuccessService } from '@ngjoy/mat-xtnd';
import { EMPTY, tap, mergeMap } from 'rxjs';
import { stat } from 'fs/promises';


@State<IConfigStateModel>({
  name: 'config',
  defaults: <IConfigStateModel>{
    loading: false,
    busy: false,
    appTitle: 'Amazing Add-In',
    appIcon: 'vertical_split'
  }
})
@Injectable()
export class ConfigState {

  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackSuccess: MatXtndSnackbarSuccessService,
    private readonly confirmationDialog: MatXtndConfirmationDialogService
  ) { }


  @Selector()
  static IsLoading(state: IConfigStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static IsWorking(state: IConfigStateModel): boolean {
    return state.busy;
  }

  @Selector()
  static getAppTitle(state: IConfigStateModel): string {
    return state.appTitle;
  }

  @Selector()
  static getAppIcon(state: IConfigStateModel): string {
    return state.appIcon;
  }
 

  @Action(ConfigActions.Done)
  onDone(ctx: StateContext<IConfigStateModel>) {
    ctx.patchState({
      loading: false,
      busy: false
    });
  }
  @Action(ConfigActions.Loading)
  onLoading(ctx: StateContext<IConfigStateModel>) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(ConfigActions.Working)
  onWorking(ctx: StateContext<IConfigStateModel>) {
    ctx.patchState({
      busy: true
    });
  }

  @Action(ConfigActions.LoadConfiguration)
  onLoadConfiguration(ctx: StateContext<IConfigStateModel>) {
  }

}
