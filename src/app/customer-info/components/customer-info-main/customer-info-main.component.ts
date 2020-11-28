import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerInfoModel} from '../../models/customer-info-model';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {CustomerInfoViewComponent} from '../customer-info-view/customer-info-view.component';
import {CustomerInfoService} from '../../services/customer-info.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-info-main',
  templateUrl: './customer-info-main.component.html',
  styleUrls: ['./customer-info-main.component.scss']
})
export class CustomerInfoMainComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator', {static: false}) paginator: MatPaginator;

  displayedColumns: string[] = ['index', 'firstName', 'email', 'mobile', 'birthday', 'action'];
  dataSource = new MatTableDataSource<CustomerInfoModel>([]);


  constructor(
    private router: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private customerInfoService: CustomerInfoService
  ) { }

  ngOnInit(): void {
    this.dataSource.data = [{
      id: 1,
      lastName: 'last',
      email: 'werwr',
      phone: '3234234',
      mobile: '234234234',
      address: 'fsdgsdfasdfasdfa',
      city: 'dfasdfag',
      state: 'sfdfsa',
      zipCode: 'sdfadsf',
      birthday: new Date(),
      firstName: 'first'
    }];
    this.cdr.detectChanges();

    this.listenToNewlyAddedInfo();
    this.listenToUpdatedInfo();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onAddNewCustomer(): void {

    this.customerInfoService.tableLength = this.dataSource.data.length;

    this.router.navigate(['/customer-info/add']);
  }

  onViewCustomer(selectedRow: CustomerInfoModel): void {
    const dialogRef = this.dialog.open(CustomerInfoViewComponent, {
      width: '50rem',
      data: selectedRow
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onUpdateCustomer(selectedRow: CustomerInfoModel): void {

    this.customerInfoService.tableLength = this.dataSource.data.length;

    this.customerInfoService.passInfoToEdit.next(selectedRow);
    this.router.navigate(['/customer-info/update', selectedRow.id]);
  }

  private listenToNewlyAddedInfo(): void {
    this.customerInfoService.addNewInfo.subscribe(
      newInfo => {
        if (newInfo) {
          this.dataSource.data.push(newInfo);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          this.cdr.detectChanges();
        }
      }
    );
  }

  private listenToUpdatedInfo(): void {
    this.customerInfoService.updateInfo.subscribe(
      updatedInfo => {
        if (updatedInfo) {
          this.dataSource.data[this.dataSource.data.findIndex(info => info.id === updatedInfo.id)] = updatedInfo;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource._updateChangeSubscription();
        }
      }
    );
  }

}
