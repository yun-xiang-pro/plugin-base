export interface Plugin {
    init():void;
    activate():void;
    deactivate():void;
    dispose():void
}

export class Plugin {
     init(){
        console.log('init')

     };
    activate(){
        console.log('active')
    };
    deactivate(){};
    dispose(){}

}

export  class PluginManager {
    private plugins = new Map<string, Plugin>();
    // 注册插件
    loadPlugin(name: string, plugin: Plugin) {
        plugin.init()
        this.plugins.set(name, plugin);
    }
   // 激活插件
   activatePlugin(name:string) {
    const plugin = this.plugins.get(name);
    if (plugin) {
        plugin.activate()
    }

   }
   // 失活插件 

   deactivatePlugin(name:string) {
     const plugin = this.plugins.get(name);
    if (plugin) {
        plugin.deactivate()
    }

   }
   // 卸载插件
   unloadPlugin(name:string) {
    const plugin = this.plugins.get(name);
    if (plugin) {
        plugin.dispose()
        this.plugins.delete(name)
    }

   }
}

