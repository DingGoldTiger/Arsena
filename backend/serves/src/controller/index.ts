import Base from './base.js';
export default class extends Base {
  async indexAction() {
    const user = this.model('Persons')
    const data = await user.select();
    this.success(data,'success');
  }
}
