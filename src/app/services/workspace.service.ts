import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Workspace } from '../models/workspace.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class WorkspaceService {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
  ) { }

  getAll(): Observable<Workspace[]> {
    return this.apiService.get<Workspace[]>("api/workspace/");
  }
  
  get(id: number): Observable<Workspace> {
    return this.apiService.get<Workspace>(`api/workspace/${id}`);
  }

  create(workspace: Workspace): Observable<Workspace> {
    workspace.owner = this.authService.getUserId()
    return this.apiService.post<Workspace>('api/workspace/', workspace);
  }

  update(workspace: Workspace): Observable<Workspace> {
    return this.apiService.put<Workspace>('api/workspace/', workspace);
  }

  delete(id: number): Observable<any> {
    return this.apiService.delete(`api/workspace/${id}`);
  }

}
