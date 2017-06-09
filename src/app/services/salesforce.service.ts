import { Injectable } from '@angular/core';

export interface RemotingOptions {
	buffer?: boolean,
	escape?: boolean,
	timeout?: number
}

@Injectable()
export class SalesforceService {

    constructor() { }

    public execute(controller: string, method: string, params: Array<any>, config?: RemotingOptions): Promise<any> {
		// Set ctrl to the Visualforce Remoting controller

		let ctrl: any = window[controller] || {};
		let self = this;

		config = config || { escape: false }

		// Make sure the controller has the method we're attempting to call
		if (ctrl.hasOwnProperty(method)) {

			let methodFunc = ctrl[method];
			let directCfg = methodFunc.directCfg;

			return new Promise((resolve, reject) => {
				// The wrong number of parameters were included
				if (params.length !== directCfg.method.len) {
					reject('Wrong number of parameters included');
					return;
				}

				let callback = function(res, err) {
					if (res) {
						resolve(res);
					} else {
						reject(err.message);
					}
				}

				params.push(callback);
				params.push(config);
				ctrl[method].apply(null, params);
			});
		} else {
			return new Promise((resolve, reject) => {
				reject('The requested method does not exist on ' + controller);
			});
		}
	}    
}