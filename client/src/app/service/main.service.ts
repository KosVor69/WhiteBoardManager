import { RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';
import { Timeline } from './../../sdk/models/Timeline';
import { timeInterval } from 'rxjs/operators/timeInterval';

@Injectable()
export class MainService {
  constructor(private httpClient: HttpClient) { }

  public getCustomers() {
    return this.httpClient.get('http://10.152.5.93:3030/api/customer');
  }

  public getLines(customerId?: string) {
    if (customerId === undefined) {
      return this.httpClient.get('http://10.152.5.93:3030/api/line');
    } else {
      return this.httpClient.get('http://10.152.5.93:3030/api/customer/' + customerId + '/lines');
    }
  }

  public getShifts(lineId: string) {
    return this.httpClient.get('http://10.152.5.93:3030/api/line/' + lineId + '/shifts');
  }

  public getTimeLines(shiftID: string) {
    return this.httpClient.get('http://10.152.5.93:3030/api/shift/' + shiftID + '/timelines');
  }

  public getTimeLine(timelineId: string) {
    return this.httpClient.get('http://10.152.5.93:3030/api/timeline/' + timelineId);
  }

  public updateTimeline(timeline: Timeline) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    /*let timeline: Timeline;
    this.getTimeLine(timelineId).subscribe((t: Timeline) => {
      timeline = t;
    });*/
    return this.httpClient.post('http://10.152.5.93:3030/api/timeline', timeline, { headers: headers}).subscribe((data: Timeline) => {
      console.log(data.from);
    });
  }

  /*public setTimeLine(timelineID: string) {

    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    const body = new HttpParams();
    this.httpClient.post('/api', body, {
        headers: myheader),
      }).subscribe();

    return this.httpClient.post(
      'http://10.152.5.93:3030/api/shift/' + shiftID + '/timelines'
  );
  }*/

}





