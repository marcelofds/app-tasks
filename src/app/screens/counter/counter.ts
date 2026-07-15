import { Component, signal } from '@angular/core';
import { Title } from "../../components/shared/title/title";

@Component({
  selector: 'app-counter',
  imports: [Title],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal<number>(0);

  add() {
    this.count.set(this.count() + 1);
  }

  sub() {
    this.count.update((n: number) => {
      if (n > 0) {
        return n - 1;
      }
      return n;
    });
  }
}
