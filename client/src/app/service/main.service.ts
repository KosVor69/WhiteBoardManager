// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class MainService {
  constructor(private httpClient: HttpClient) { }

 public getLines() {
      return this.httpClient.get('http://10.152.5.93:3030/api/line');
    }

public getShifts(lineId: string) {
      return this.httpClient.get('http://10.152.5.93:3030/api/line/' + lineId + '/shifts');
    }

public getTimeLines(shiftID: string) {
      return this.httpClient.get('http://10.152.5.93:3030/api/shift/' + shiftID + '/timelines');
    }


}





