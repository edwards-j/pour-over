import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  yield: number;
  gramsWater: number;
  strength: number;
  dose: number;
  brewTime: number;


  constructor() { }
}
