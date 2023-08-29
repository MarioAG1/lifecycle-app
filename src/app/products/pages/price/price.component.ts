import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price-page',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente Hijo:  ngOnInit')
    this.interval$ = interval(1000).subscribe(value => console.log(`Tick: ${value}`))
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente Hijo:  ngOnChanges')
    console.log(changes)
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo:  ngOnDestroy')
    this.interval$?.unsubscribe()
  }



}
