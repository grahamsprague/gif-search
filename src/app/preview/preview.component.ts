import { Component, OnInit } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() myimage;

  
  constructor() { }

  ngOnInit() {
  }



}
