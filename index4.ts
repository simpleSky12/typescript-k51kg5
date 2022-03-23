type MyClassDecortaor = <T>(targetClass: new (...args: any[]) => T) => void;

function Controller(rootPath: string): MyClassDecortaor {
  return function (targetClass) {};
}

// MyClassDecortaor 是 Controller 函数 返回值类型的 定义

// function Controller2(rootPath: string) {
//   return function <T>(targetClass: new (...args: any[]) => T) {};
// }
