import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersService } from '../../shared/service/users.service';
import { lastValueFrom } from 'rxjs';
import { iUser } from '../../shared/interfaces/iUser';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  resultsLength = 0;
  isLoadingResults = false;
  displayedColumns: string[] = ['usuID', 'nombre'];
  dataSource = new MatTableDataSource<iUser>([]);
  sortedDataSource!: iUser[];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UsersService, private _snack: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  async getListUsers() {
    try {
      this.isLoadingResults = true;
      const requestListUsers = await lastValueFrom(
        this.userService.getListUsers()
      );
      this.dataSource.data = [];
      if (requestListUsers.data.length > 0)
        this.dataSource.data = requestListUsers.data.map((user) => ({
          usuID: user.usuID,
          nombre: `${user.nombre} ${user.apellido}`,
        }));
    } catch (error) {
      this.dataSource.data = [];
      console.log(error);
      this._snack.open('No fue posible obtener los usuarios', 'Ok');
    } finally {
      this.isLoadingResults = false;
    }
  }

  sortData(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
