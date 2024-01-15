import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { WorkbookState, WorkbookActions, ConfigState } from '@states/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.scss'],
})
export class ExcelComponent implements OnInit {
  @Select(ConfigState.getAppTitle) appTitle$: Observable<string> | undefined;
  @Select(WorkbookState.IsLoading) loading$: Observable<boolean> | undefined;
  @Select(WorkbookState.IsWorking) busy$: Observable<boolean> | undefined;

  constructor(private readonly store: Store) {}

  ngOnInit() {}

  applyAction() {
    this.store.dispatch(new WorkbookActions.Initialize());
  }

  approve() {
    this.store.dispatch(new WorkbookActions.ApproveExample());
  }
}
