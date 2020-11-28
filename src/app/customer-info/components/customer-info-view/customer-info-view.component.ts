import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerInfoModel} from '../../models/customer-info-model';

@Component({
  selector: 'app-customer-info-view',
  templateUrl: './customer-info-view.component.html',
  styleUrls: ['./customer-info-view.component.scss']
})
export class CustomerInfoViewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CustomerInfoViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerInfoModel
  ) { }

  ngOnInit(): void {
  }

}
