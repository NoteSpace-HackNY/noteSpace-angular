import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Card } from '../models/card.model';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class CardService {

  constructor(
    private apiService: ApiService,
  ) { }

  getAll(workspace_id: number): Observable<Card[]> {
    return this.apiService.get<Card[]>('api/card/', [{
      key: 'workspace_id', value: workspace_id.toString()
    }]);
  }

  get(card_id: number): Observable<Card> {
    return this.apiService.get<Card>(`api/card/${card_id}/`)
  }

  create(card: Card): Observable<Card> {
    return this.apiService.post<Card>('api/card/', card);
  }

  update(card: Card): Observable<Card> {
    return this.apiService.put<Card>('api/card/', card);
  }

  delete(card_id: number): Observable<any> {
    return this.apiService.delete(`api/card/${card_id}/`);
  }

}
