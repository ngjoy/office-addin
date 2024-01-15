
export namespace WorkbookActions {
  export class Loading {
    static readonly type = '[Workbook] Set As Loading';
  }

  export class Working {
    static readonly type = '[Workbook] Set As Working';
  }

  export class Done {
    static readonly type = '[Workbook] Set As Done';
  }

  export class Initialize {
    static readonly type = '[Workbook] Initialize';
  }
    // example of an action
  export class ApplyCommand {
    static readonly type = '[Workbook] Apply Command';
  }

  export class ApproveExample {
    static readonly type = '[Workbook] Approve Example';
  }
 
}


