import { Component,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {
  @Input() public User : any;

}
