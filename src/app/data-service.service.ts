import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataServiceService {

  private previewComponent = new BehaviorSubject<string>('default message');
  previewComponentMessage = this.previewComponent.asObservable();

  private searchComponent = new BehaviorSubject<string>('default message');
  searchComponentMessage = this.searchComponent.asObservable();

  constructor() { }

  changeMessagePreview(message: string) {
    this.previewComponent.next(message);
  }

  changeMessageSearch(message: string) {
    this.searchComponent.next(message);
  }

}
