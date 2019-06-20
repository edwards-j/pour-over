import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  yield: number;
  strength: string;
  dose: number;


  constructor() { }
}
