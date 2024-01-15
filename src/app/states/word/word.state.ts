/// <reference path="../../../../node_modules/@types/office-js/index.d.ts" />
import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWordStateModel } from './word.model';
import { WordActions } from './word.actions';
import { MatXtndConfirmationDialogService, MatXtndSnackbarSuccessService } from '@ngjoy/mat-xtnd';
import { EMPTY, tap, mergeMap } from 'rxjs';


@State<IWordStateModel>({
  name: 'word',
  defaults: <IWordStateModel>{
    loading: false,
    busy: false,
  }
})
@Injectable()
export class WordState {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackSuccess: MatXtndSnackbarSuccessService,
    private readonly confirmationDialog: MatXtndConfirmationDialogService
  ) { }


  @Selector()
  static IsLoading(state: IWordStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static IsWorking(state: IWordStateModel): boolean {
    return state.busy;
  }

  @Action(WordActions.Done)
  onDone(ctx: StateContext<IWordStateModel>) {
    ctx.patchState({
      loading: false,
      busy: false
    });
  }
  @Action(WordActions.Loading)
  onLoading(ctx: StateContext<IWordStateModel>) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(WordActions.Working)
  onWorking(ctx: StateContext<IWordStateModel>) {
    ctx.patchState({
      busy: true
    });
  }

  @Action(WordActions.Initialize)
  onInitialize(ctx: StateContext<IWordStateModel>) {
    return ctx.dispatch(new WordActions.Loading()).pipe(
      mergeMap(() => ctx.dispatch(new WordActions.ApplyCommand())),
      tap(() => ctx.dispatch(new WordActions.Done()))
    )
  }

  @Action(WordActions.ApplyCommand)
  async onApplyCommand(ctx: StateContext<IWordStateModel>) {
    return await Word.run(async context => {
      const paragraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);
      paragraph.font.color = "blue";
      await context.sync();
    });
  }



}
