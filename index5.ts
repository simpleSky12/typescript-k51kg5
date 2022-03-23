type ObjType1 = {
  username: string;
  age: number;
};

type ObjType2 = {
  username: string;
  address: number;
  phone: string;
};

let obj1: ObjType1 | ObjType2 = { username: '小米', age: 19 };

let obj2: ObjType1 | ObjType2 = {
  username: '小红',
  age: 20,
  address: 120,
  phone: 'string',
};

obj1.age;
obj2.age;
