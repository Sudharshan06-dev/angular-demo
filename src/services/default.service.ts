import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  public showSidebar : boolean = false

  constructor() { }
}
