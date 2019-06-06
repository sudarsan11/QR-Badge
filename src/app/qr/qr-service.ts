import { Injectable } from '@angular/core';
import * as constants from '../constants';
import { HttpClient } from '@angular/common/http';
const url = constants.URL.url;


@Injectable({providedIn: 'root'})
export class QrService {

  constructor(private http: HttpClient) {}


  // When user submits the qr form
  createQr(qrValues: object) {
    console.log(qrValues);
    this.http.post<{message: string}>(url + 'api/qr/generate', qrValues)
      .subscribe(res => {

      }, err => {

      });
  }

}
