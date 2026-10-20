//the static keyword allows you to create properties and methods that belong to the class itself
//rather than to the objects created from that class.

class MathUtil {
  static PI = 3.13159;

  static getDiameter(radius) {
    return radius * 2;
  }
}

//we do not need an instance
//let myMath = new MathUtil() //NOT NECESSARY

console.log(MathUtil.PI); //accessing a static property
console.log(MathUtil.getDiameter(5));

class User {
  static usercount = 0;
  constructor(username) {
    this.username = username;
    User.usercount++;
  }

  sayHello() {
    console.log(`Hello, my name is  ${this.username}`);
  }
  static getUserCount() {
    return User.usercount;
  }
}

let user = new User("aidan");
let user2 = new User("aidan");
let user3 = new User("aidan");
let user4 = new User("aidan");
let user5 = new User("aidan");

console.log(User.getUserCount());
