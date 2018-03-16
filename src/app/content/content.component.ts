import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  image_data;
  active_image;
  constructor(service: SearchService) {

    // read from serice file
    this.image_data = JSON.parse(service.getData()) ;
    this.image_data = this.image_data['data'];
    console.log( this.image_data[0] );




  }

  ngOnInit() {
  }



}
