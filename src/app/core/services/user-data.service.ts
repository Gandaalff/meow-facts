import { Injectable, signal } from '@angular/core';
import { UserData } from '../config/user-data.interface';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public userData = signal<UserData | null>(null);
}
