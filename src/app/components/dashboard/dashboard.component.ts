import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../../services/workspace.service';
import { Workspace } from '../../models/workspace.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  workspaces: Workspace[]
  newWorkspace: Workspace = {
  	owner: 0,
  	title: "",
  	members:[]
  }

  constructor(
  	private workspaceService: WorkspaceService,
  ) { }

  ngOnInit() {
  	this.workspaceService.getAll().subscribe(
        (result) => {
        console.log(result);
        this.workspaces = result;
    });
  }
  newWorkSpace(){
  	this.workspaceService.create(this.newWorkspace)
  }
}
