import {bindable} from 'aurelia-templating';
import {ControlBase} from './base-control';
import {TaskQueue} from 'aurelia-task-queue';

export class TextControl extends ControlBase {
  @bindable value = '';
  @bindable func = function () { console.log('func called')};
  @bindable errors = [];

  constructor(element: Element, taskQueue: TaskQueue) {
    super(element, taskQueue);
  }
}
