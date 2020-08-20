import angular = require("angular");

declare module 'angular' {
	export namespace ui {
		interface IState {
			modal?: boolean | string[];
			size?: string;
			animation?: boolean | string;
			backdrop?: boolean | string;
			keyboard?: boolean | string;
			windowClass?: string[];
			windowTopClass?: string[];
		}
	}
}
