import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class TaskServices {

	result: any;

	constructor(private _http: Http) {

	}

	getTasks() {
		return this._http.get("/api/tasks")
			.map(result => this.result = result.json());
	}


}