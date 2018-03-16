import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data;
  constructor(service: SearchService) {
    this.data = service.getData();
  }

  ngOnInit() {
  }



}
