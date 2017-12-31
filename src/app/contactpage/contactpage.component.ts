import { Component, OnInit } from '@angular/core';

import { TaskServices } from '../services/app.task.services';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss']
})
export class ContactpageComponent implements OnInit {

	taskList: Array<any>;

	constructor(private _taskSrv: TaskServices) { }

	ngOnInit() {

		this._taskSrv.getTasks()
			.subscribe( res => this.taskList = res);

	}

}
