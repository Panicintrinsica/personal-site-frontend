import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gui-footer',
  templateUrl: './gui-footer.component.html',
  styleUrls: ['./gui-footer.component.scss']
})
export class GuiFooterComponent implements OnInit {
  year: any = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
