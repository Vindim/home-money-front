import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bill} from '../models/bill.model';
import {map} from 'rxjs/operators';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
    constructor(public http: HttpClient) {
        super(http);
    }

    getBill(): Observable<Bill> {
        return this.get('bill');
    }

    getCurrency(base: string = 'rub'): Observable<any> {
        const headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(`http://www.floatrates.com/daily/${base}.json`, {headers}).pipe(
            map((res) => {
                return res;
            })
        );
    }
}
