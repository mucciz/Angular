import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-main',
  templateUrl: './quote-main.component.html',
  styleUrls: ['./quote-main.component.css']
})
export class QuoteMainComponent implements OnInit {
  quotes = [

      ]
    showDetails(index){
      this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
    }
    addNewQuote(quote){
      let quotelength = this.quotes.length;
      quote.id= quotelength+1;
      quote.publishDate = new Date(quote.publishDate)
      this.quotes.push(quote)
    }
      addLike(thumbsUp,index){
        if(thumbsUp){
          this.quotes[index].upVote +=1;
        }
      }

      dissLike(thumbsDown,index){
        if(thumbsDown){
          this.quotes[index].downVote +=1;
        }
      }

    deleteQuote(isComplete,index){
      if(isComplete){
        this.quotes.splice(index,1)
      }
    }

  constructor() { }

  ngOnInit() {
  }

}
