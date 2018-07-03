import {Person} from './models/person';
import {validateTrigger, ValidationController, ValidationControllerFactory} from 'aurelia-validation';

export class Welcome {
  person = new Person();

  static inject = [ValidationControllerFactory];
  constructor(controllerFactory) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.validateTrigger = validateTrigger.changeOrBlur;
  }
  attached() {
    console.log('focusing')
    this.hasFocus = false;
    setTimeout(() => {
      console.log('again')
      this.hasFocus = true;
    }, 1)
  }
}
