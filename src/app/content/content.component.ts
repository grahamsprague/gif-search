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
  search_value = 'trends';
  search_service;
  @Output() change = new EventEmitter();

  constructor(service: SearchService, private data: DataServiceService) {
    // read from serice file

    // create a handle for the service
    this.search_service = service;

    // get the data
    const results = JSON.parse(service.getData(this.search_value)) ;

    // refocus to just the data we care about and store it in this component
    this.image_data = results['data'];

    // log so we can see what is happening here
    console.log( 'ContentComponent constructor{}: ' + this.search_value );

  }
// need to find a way to capture the changes to search value;
  ngOnInit() {
    this.data.searchComponentMessage.subscribe(
      message => {
        this.search_value = message;
        console.log('ContentComponent search_value changed:' + this.search_value);
        this.image_data = JSON.parse(this.search_service.getData(this.search_value))
        this.image_data = this.image_data['data'] ;
    });
  }
  // capture clicks on the preview
  onPreviewClicked(myargs) {
    // console.log(myargs);
    // this.change.emit(myargs);
    this.data.changeMessagePreview(myargs);
  }


}
