import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  highlightElement () {
    this.el.nativeElement.style.backgroundColor = 'cyan'
    this.el.nativeElement.style.backgroundColor = '#bf5f82'
  }
  ngOnInit(){
    this.highlightElement();
  }
}
