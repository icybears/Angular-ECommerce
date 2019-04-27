import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "quantite",
  template: `
    <div class="input-group input-group-sm" style="width:150px">
      <div class="input-group-prepend">
        <button
          (click)="increment()"
          class="btn btn-outline-success btn-sm "
          type="button"
        >
          <i class="fa fa-plus"></i>
        </button>
      </div>

      <input
        (input)="handleInput($event)"
        type="text"
        class="form-control"
        aria-describedby="basic-addon1"
        [value]="value"
      />
      <div class="input-group-append">
        <button
          (click)="decrement()"
          class="btn btn-outline-secondary btn-sm"
          type="button"
        >
          <i class="fa fa-minus"></i>
        </button>
      </div>
    </div>
  `
})
export class QuantiteComponent implements OnInit {
  value: number = 1;

  @Output()
  quantiteChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {
    this.quantiteChanged.emit(this.value);
  }

  increment() {
    this.value++;
    this.quantiteChanged.emit(this.value);
  }

  decrement() {
    if (this.value > 1) this.value--;
    this.quantiteChanged.emit(this.value);
  }

  handleInput(event) {
    let val = event.target.value;

    this.value = Math.abs(Number(val)) || 1;
    this.quantiteChanged.emit(this.value);

  }

}
