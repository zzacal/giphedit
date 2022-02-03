export class Persist {
  persistence = sessionStorage;
  set = (key, value) => {
    this.persistence.setItem(key, value);
    return this.persistence.getItem(key);
  }
  get = (key) => this.persistence.getItem(key);
}
