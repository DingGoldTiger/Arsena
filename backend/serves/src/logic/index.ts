import { think } from 'thinkjs';

export default class extends think.Logic {
  indexAction() {
    this.allowMethods = 'post';
  }
}
