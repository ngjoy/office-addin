
export namespace WordActions{
  export class Loading {
    static readonly type = '[Word] Set As Loading';
  }

  export class Working {
    static readonly type = '[Word] Set As Working';
  }
  
  export class Done {
    static readonly type = '[Word] Set As Done';
  }

  export class Initialize {
    static readonly type = '[Word] Initialize';
  }

  // example of an action
  export class ApplyCommand {
    static readonly type = '[Word] Do Action';
  }
  
 
}


