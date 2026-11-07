

export class Caculator {
  // 先声明，再赋值
  operations: Map<string, Function> = new Map() // 存放操作方法
  result = 0

  constructor() {
    this.operations = new Map()
  }

  use (plugin:any) {
    this.operations.set(plugin.name, plugin.applay)
  }

  applay (name:string,a:number,b:number) {
   const operation = this.operations.get(name)
   if (operation) {
    return operation(a,b)
   }
  }

}




