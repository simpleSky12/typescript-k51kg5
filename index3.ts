class CommercialBank {
  public address: string = 'beijing';
  public name: string = 'wangwu';

  constructor(name: string, address: string) {
    this.address = address;
    this.name = name;
  }
}

type ConstructorType = new (...arg: any) => any;
let Constructor: ConstructorType = CommercialBank;
let func = new Constructor('广大银行', '深大');

//  泛型工厂函数
function createInstanceFactory<T>(Constructor: { new (...arg: any): T }) {
  return new Constructor('光大银行', '交大');
}

let con = createInstanceFactory<CommercialBank>(CommercialBank);
