import { Component, OnInit, Input } from '@angular/core';

import { ContentComponent } from '../content/content.component';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  myimage;
  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.myimage = message);

     console.log(this.myimage);

  }


}
