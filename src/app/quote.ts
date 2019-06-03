export class Quote {

  public showPublisher:boolean;
  constructor(public quote:string, public author:string, public publisher:string, public publishDate:Date, public upVote=0,public downVote=0 ){
      this.showPublisher=false
  }
}
