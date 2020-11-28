import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CustomerInfoModel} from '../models/customer-info-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {

  addNewInfo = new BehaviorSubject<CustomerInfoModel>(null);
  updateInfo = new BehaviorSubject<CustomerInfoModel>(null);
  passInfoToEdit = new BehaviorSubject<CustomerInfoModel>(null);

  tableLength = 0;

  constructor() { }
}
