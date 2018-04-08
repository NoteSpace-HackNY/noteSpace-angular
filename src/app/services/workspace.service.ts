import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Workspace } from '../models/workspace.model';
import { Observable } from 'rxjs';

@Injectable()
export class WorkspaceService {

  constructor(
    private apiService: ApiService,
  ) { }

  getAll(): Observable<Workspace[]> {
    return this.apiService.get<Workspace[]>("api/workspace/");
  }
  
  get(id: number): Observable<Workspace> {
    return this.apiService.get<Workspace>(`api/workspace/${id}`);
  }

  create(workspace: Workspace): Observable<Workspace> {
    return this.apiService.post<Workspace>('api/workspace/', workspace);
  }

  update(workspace: Workspace): Observable<Workspace> {
    return this.apiService.put<Workspace>('api/workspace/', workspace);
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`api/workspace/${id}`);
  }

}
