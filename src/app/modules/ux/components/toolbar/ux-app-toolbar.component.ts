import { Component } from '@angular/core';
import { MatXtndThemeColorFinderService } from '@ngjoy/mat-xtnd';
import { Select } from '@ngxs/store';
import { ConfigState } from '@states/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'ux-app-toolbar',
  templateUrl: 'ux-app-toolbar.component.html',
  styleUrls: [`ux-app-toolbar.component.scss`]
})
export class UxAppToolbarComponent {

  @Select(ConfigState.getAppTitle) title$: Observable<string> | undefined;
  @Select(ConfigState.getAppIcon) icon$: Observable<string> | undefined;

  constructor(private readonly materialColorFinder: MatXtndThemeColorFinderService) {}
} 
