import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchService } from '../search.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {
  image_data;
  @Output() change = new EventEmitter();

  constructor(service: SearchService, private data: DataServiceService) {
    // read from serice file
    this.image_data = JSON.parse(service.getData()) ;
    this.image_data = this.image_data['data'];
    console.log( this.image_data[0] );

  }

  ngOnInit() {
  }
  // capture clicks on the preview
  onPreviewClicked(myargs) {
    // console.log(myargs);
    // this.change.emit(myargs);
    this.data.changeMessage(myargs);
  }

}
