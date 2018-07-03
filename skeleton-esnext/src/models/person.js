import { ValidationRules } from 'aurelia-validation';

export class Person {
  firstName = '';
  lastName = '';

  rulesCreated = false;

  constructor(data = {}) {
    Object.assign(this, data);
    this.createCustomRules();
  }

  createCustomRules() {
    if (this.rulesCreated) {
      return;
    }
    this.rulesCreated = true;

    ValidationRules
      .ensure((a: Person) => a.firstName).required().withMessage('Errors on first name.')
      .on(Person);
  }
}
