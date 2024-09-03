import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UsersService } from '../../shared/service/users.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit() {}

  private async getListUsers() {
    try {
      const requestListUsers = await lastValueFrom(
        this.userService.getListUsers()
      );
      console.log(requestListUsers);
    } catch (error) {
      console.log(error);
    }
  }
}
