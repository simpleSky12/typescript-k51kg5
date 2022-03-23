let value: any;
value.name;
value.toFixed();

let value2: unknown;

// 交叉类型  同时具备这几个连接起来的类型的属性
const merge = <T, U>(arg1: T, arg2: U): T & U => {
  let res = <T & U>{};
  Object.assign(res, arg1, arg2);
  return res;
};

const info1 = {
  name: 'lison',
};

const info2 = {
  age: 18,
};

// 联合类型 只能符合联合类型中任意一种类型

const lisonInfo = merge(info1, info2);

const getLength = (content: string | number): number => {
  //  类型保护
  if (typeof content === 'string') return content.length;
  else return content.toString().length;
};
