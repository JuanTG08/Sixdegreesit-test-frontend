import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { constHttpOptions } from '../constant/http.constant';
import { iResponseApi } from '../interfaces/iResponse';
import { iUser } from '../interfaces/iUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private path: string = '/Usuarios';
  private url: string = environment.urlApi + this.path;
  constructor(private httpClient: HttpClient) {}

  getListUsers() {
    return this.httpClient.get<iResponseApi<iUser[]>>(
      this.url,
      constHttpOptions
    );
  }
}
