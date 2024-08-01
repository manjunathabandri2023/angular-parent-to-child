import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  
  childMessage: string | undefined;
  parentMessage: string | undefined;

  receiveMessage(message: string) {
    this.childMessage = message;
  }

  ngOnInit(): void {
    this.parentMessage = "Message from parent!";
  }

}
