import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>()
  @Output() thumbsUp = new EventEmitter<boolean>();
  @Output() thumbsDown= new EventEmitter<boolean>();


  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  addLike(plus:boolean){
    this.thumbsUp.emit(plus);
  }

  dissLike(minus:boolean){
    this.thumbsDown.emit(minus);
  }
  constructor() { }

  ngOnInit() {
  }

}
