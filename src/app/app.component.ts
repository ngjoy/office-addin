import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var Office: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'office-excel';
  constructor(
    private readonly router: Router,
  ) {

  }

  ngOnInit() {
    this.run();
  }

  run() {
    switch (Office.context.host) {
      case Office.HostType.Excel: {
        this.router.navigate(['excel']);
        return;
      }
      case Office.HostType.Word: {
        this.router.navigate(['word']);
        return;
      }
      case Office.HostType.OneNote: {
        this.router.navigate(['onenote']);
        return;
      }
      case Office.HostType.Outlook: {
        this.router.navigate(['outlook']);
        return;
      }
      case Office.HostType.PowerPoint: {
        this.router.navigate(['powerpoint']);
        return;
      }
      case Office.HostType.Project: {
        this.router.navigate(['project']);
        return;
      }
     
    }
  }

 


}
