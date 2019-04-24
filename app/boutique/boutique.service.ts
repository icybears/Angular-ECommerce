import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Produit} from './produit/produit.interface';
import { Categorie } from './categorie/categorie.interface';

const PRODUIT_API: string = 'http://localhost:8080/PFA/api/v1/produits';
const CATEGORIE_API: string = 'http://localhost:8080/PFA/api/v1/categories'

@Injectable()
export class BoutiqueService {

  constructor(private http: Http) {}

  getProduits(): Observable<Produit[]> {
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({
          headers: headers
    })
    return this.http
      .get(PRODUIT_API)
      .map((response: Response) => response.json());
  }

  getProduitById(id: number):Observable<Produit> {
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({
          headers: headers
    })
    return this.http
      .get(PRODUIT_API+`/${id}`)
      .map((response: Response) => response.json());
  }

  getProduitsByCategorie(id:number): Observable<Produit[]> {
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({
          headers: headers
    })
    return this.http
      .get(CATEGORIE_API+`/${id}/produits`)
      .map((response: Response) => response.json());
  }

getCategories(): Observable<Categorie[]> {
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let options = new RequestOptions({
          headers: headers
    })
    return this.http
      .get(CATEGORIE_API)
      .map((response: Response) => response.json());
  }

}
