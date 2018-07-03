import {DOM} from 'aurelia-pal';
import {TaskQueue} from 'aurelia-task-queue';

export class ControlBase {
  taskQueue: TaskQueue;
  element;
  focused = false;

  static inject = [Element, TaskQueue];
  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    element.focus = this.focus;
    element.blur = this.blur;
  }

  bind() {
    this.element.addEventListener('focus', this.handleFocusEvent, true);
    this.element.addEventListener('blur', this.handleFocusEvent, true);
  }

  unbind() {
    this.element.removeEventListener('focus', this.handleFocusEvent);
    this.element.removeEventListener('blur', this.handleFocusEvent);
  }

  focus = () => {
    const input = this.element.querySelector('input');
    input.focus();
    this.syncFocus();
  }

  blur = () => {
    const input = this.element.querySelector('input:focus');
    if (!input) {
      return;
    }
    input.blur();
    this.syncFocus();
  }

  handleFocusEvent = event => {
    if (!event.isTrusted) {
      return;
    }
    this.taskQueue.queueMicroTask(this.syncFocus);
  }

  syncFocus = () => {
    const focused = this.element.querySelector(':focus');
    if (this.focused === focused) {
      return;
    }
    this.focused = focused;
    this.element.dispatchEvent(DOM.createCustomEvent(focused ? 'focus' : 'blur', {}));
  }
}
