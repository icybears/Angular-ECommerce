import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Client } from './client/client.interface';

const rootUrl: string = 'http://localhost:8080/PFA'
const PROFILE_API: string = `${rootUrl}/api/v1/profile`;
const CLIENT_API: string = `${rootUrl}/api/v1/clients`;

@Injectable()
export class UserProfileService {

  constructor(private http: Http) { }

  getAuthenticatedClient(JWTtoken): Observable<Client> {

    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWTtoken}`
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .get(PROFILE_API, options)
      .map((response: Response) => response.json());
  }

  updateClientDetails(client: Client, JWTtoken):Observable<Client> {
    let headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${JWTtoken}`
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${CLIENT_API}/${client.id}`,client, options)
      .map((response: Response) => response.json());
  }
}
