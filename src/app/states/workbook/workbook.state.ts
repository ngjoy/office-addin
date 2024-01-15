/// <reference path="../../../../node_modules/@types/office-js/index.d.ts" />
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWorkbookStateModel } from './workbook.model';
import { WorkbookActions } from './workbook.actions';
import { filter, mergeMap, tap } from 'rxjs';
import {
  MatXtndConfirmationDialogActionTypes,
  MatXtndConfirmationDialogService,
  MatXtndSnackbarSuccessService,
} from '@ngjoy/mat-xtnd';
import '@extensions/index';

@State<IWorkbookStateModel>({
  name: 'workbook',
  defaults: <IWorkbookStateModel>{
    loading: false,
    busy: false,
  },
})
@Injectable()
export class WorkbookState {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly snackSuccess: MatXtndSnackbarSuccessService,
    private readonly confirmationDialog: MatXtndConfirmationDialogService,
    private readonly ngZone: NgZone
  ) {}

  @Selector()
  static IsLoading(state: IWorkbookStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static IsWorking(state: IWorkbookStateModel): boolean {
    return state.busy;
  }

  @Action(WorkbookActions.Done)
  onDone(ctx: StateContext<IWorkbookStateModel>) {
    ctx.patchState({
      loading: false,
      busy: false,
    });
  }

  @Action(WorkbookActions.Loading)
  onLoading(ctx: StateContext<IWorkbookStateModel>) {
    ctx.patchState({
      loading: true,
    });
  }

  @Action(WorkbookActions.Initialize)
  onInitialize(ctx: StateContext<IWorkbookStateModel>) {
    return ctx.dispatch(new WorkbookActions.Working()).pipe(
      mergeMap(() => ctx.dispatch(new WorkbookActions.ApplyCommand())),
      tap(() => ctx.dispatch(new WorkbookActions.Done()))
    );
  }

  @Action(WorkbookActions.ApplyCommand)
  async onApplyCommand(ctx: StateContext<IWorkbookStateModel>) {
    // eslint-disable-next-line no-undef
    return await Excel.run(async (context) => {
      const ws = context.workbook.worksheets.getActiveWorksheet();
      await context.sync();
      const firstCell = ws.getCell(0, 0);
      firstCell.values = [['Hello World']];
      firstCell.markAppearanceAsInvalid(); // extension example
    });
  }

  @Action(WorkbookActions.ApproveExample)
  onApproveExample(ctx: StateContext<IWorkbookStateModel>) {
    return this.confirmationDialog
      .OnOkOrCancel({
        message: 'Are you sure you would like to approve this worksheet',
      })
      .pipe(
        filter(
          (response) => response == MatXtndConfirmationDialogActionTypes.OK
        ),
        tap(() => this.snackSuccess.Open(`Approved`))
      );
  }
}
