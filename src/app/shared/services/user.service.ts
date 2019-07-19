import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    getUserByEmail(email: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?email=${email}`).pipe(map((res: User[]) => res[0] ? res[0] : undefined));
    }

    createNewUser(user: User): Observable<User> {
        return this.http.post('http://localhost:3000/users', user).pipe(map((res: User) => res));
    }

}
