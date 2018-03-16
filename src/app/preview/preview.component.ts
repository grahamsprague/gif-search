import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() {
    console.log('constructor fired!' );
  }

  ngOnInit() {
  }



}
