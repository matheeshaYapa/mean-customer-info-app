import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerInfoService} from '../../services/customer-info.service';
import {CustomerInfoModel} from '../../models/customer-info-model';

@Component({
  selector: 'app-customer-info-add-update',
  templateUrl: './customer-info-add-update.component.html',
  styleUrls: ['./customer-info-add-update.component.scss']
})
export class CustomerInfoAddUpdateComponent implements OnInit {

  infoForm: FormGroup;

  isUpdate: boolean;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private customerInfoService: CustomerInfoService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    if (this.activatedRoute.snapshot.params.customerId) {
      this.isUpdate = true;
      this.customerInfoService.passInfoToEdit.subscribe(
        infoToBeEdited => {
          if (infoToBeEdited) {
            this.setDefaultValues(infoToBeEdited);
          }
        }
      );
    }
  }

  get formControls() {
    return this.infoForm.controls;
  }

  get currentDate() {
    return new Date();
  }

  onSubmit(): void {
    if (this.infoForm.invalid) {
      this.snackBar.open('Form is not valid', 'Ok', {duration: 2000});
      return;
    }

    if (this.isUpdate) {
      this.customerInfoService.updateInfo.next({...this.infoForm.value, id: +this.activatedRoute.snapshot.params.customerId});
    } else {
      this.customerInfoService.addNewInfo.next({...this.infoForm.value, id: this.customerInfoService.tableLength + 1});
    }
    this.router.navigate(['/customer-info']);
  }

  private initializeForm(): void {
    this.infoForm = new FormGroup({
      firstName: new FormControl(null, {validators: [Validators.required]}),
      lastName: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      address: new FormControl(null, {validators: [Validators.required]}),
      city: new FormControl(null, {validators: [Validators.required]}),
      state: new FormControl(null, {validators: []}),
      zipCode: new FormControl(null, {validators: []}),
      phone: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^((0)[0-9]{9})$/m)]}),
      mobile: new FormControl(null, {validators: [Validators.required, Validators.pattern(/^((?!(0))[0-9]{9})$/m)]}),
      birthday: new FormControl(null, {validators: [Validators.required]})
    });
  }

  private setDefaultValues(info: CustomerInfoModel): void {
    this.infoForm.patchValue({
      firstName: info.firstName,
      lastName: info.lastName,
      email: info.email,
      address: info.address,
      city: info.city,
      state: info.state,
      zipCode: info.zipCode,
      phone: info.phone,
      mobile: info.mobile,
      birthday: new Date(info.birthday)
    });
  }

}
