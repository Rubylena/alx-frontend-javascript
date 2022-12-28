export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(x) {
    if (typeof x !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = x;
    }
  }

  get length() {
    return this._length;
  }

  set length(x) {
    if (typeof x !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = x;
    }
  }

  get students() {
    return this._students;
  }

  set students(x) {
    x.forEach((data) => {
      if (typeof data !== 'string') {
        throw new TypeError('Student must be an array of string');
      } else {
        this._students = data;
      }
    });
  }
}
