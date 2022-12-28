export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = x;
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof x !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = x;
  }

  get students() {
    return this._students;
  }

  set students(x) {
    x.forEach((data) => {
      if (typeof data !== 'string') {
        throw new TypeError('Student must be an array of string');
      }
    });
    this._students = x;
  }
}
