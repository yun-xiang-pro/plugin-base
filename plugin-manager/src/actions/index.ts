import copyAction from "./copyAction";
import sendEmailActions from "./sendEmailActions";
import { SyncHook } from "tapable"
 
/**
 * 生命周期约定
 * 1.动作注册 onInit
 * 2.动作执行 onExecute
 *   2.1动作执行前 beforeExecute
 *   2.2动作执行后 afterExecute
 * 3.动作清楚  onDestory
 */
class ActionEngine {
    queue:any[]
    hooks:any;
    constructor() {
        this.queue = []
        this.hooks = {
            onInit:[], 
            beforeExecute:new SyncHook(["beforeExecute"]),
            afterExecute:new SyncHook(["afterExecute"])
        }

         this.hooks.beforeExecute.tap("beforeExecute", (data:any) => {
            console.log("beforeExecute", data)

        })

        this.hooks.afterExecute.tap("afterExecute", (data:any) => {
            console.log("afterExecute", data)

        })
    }
    addAction (action:any) {
        this.queue.push(action)
    }

    execute (data:any) {
        while(this.queue.length) {
            const action = this.queue.shift();
            this.hooks.beforeExecute.call({name:action.name,data})
            action.applay(this,data)
            this.hooks.afterExecute.call({name:action.name,data})
        }
    }
}

export const run = () => {
    const actionEngine = new ActionEngine()
    actionEngine.addAction(copyAction)
    actionEngine.addAction(sendEmailActions)
    actionEngine.execute({name:'张三',age:18})
}

