// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// 通用函数类型
type commonFunc = (...args: any) => any;

interface commonFunc2 {
  (...args: any): any;
}

interface commonFunc3 {
  eat: (...args: any) => any;
}

let func1: commonFunc = function (count: string, money: number): void {
  console.log(count, money);
};

let func2: commonFunc2 = (count, money) => {
  console.log(count, money);
};

let func3: commonFunc3['eat'] = function (count: string, money: number): void {
  console.log(count, money);
};
