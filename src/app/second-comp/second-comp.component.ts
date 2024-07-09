import { Component,Input,EventEmitter } from '@angular/core';
import { FirstCompComponent } from '../first-comp/first-comp.component';
@Component({
  selector: 'app-second-comp',
  standalone: true,
  imports: [],
  templateUrl: './second-comp.component.html',
  styleUrl: './second-comp.component.css'
})
export class SecondCompComponent {
  @Input() public User2 :any;
  
}
