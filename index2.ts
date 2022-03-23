class CommercialBank1 {
  public address: string = 'beijing';
  public name: string = 'wangwu';

  constructor(name: string, address: string) {
    this.address = address;
    this.name = name;
  }

  test(): CommercialBankType {
    return;
  }
}

//  类构造函数对象变量
// 创建类对象的一个类型

function CommercialBank_(name: string, address: string) {}

// 在 ts 中不能 直接new 一个 函数 来创建实例对象
// new 后面的 是 构造函数 的类型
type CommercialBankType = new (...arg: any) => CommercialBank;

// 工厂函数类型: 代表 任意一个类的构造函数 的 函数类型
type FactoryType = new (...arg: any) => any;
