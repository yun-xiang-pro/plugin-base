<script setup lang="ts">
import { Plugin, PluginManager } from '../plugin-manager'
import { Caculator } from '../calculator';

import {run} from "../actions"

const pluginManager = new PluginManager()
class DevPlugin extends Plugin {
  constructor() {
    super();
    console.log('devPlugin')
  }
  init(){
    console.log('dev init')

  };
    activate(){
        console.log('active')
    };
    deactivate(){};
    dispose(){}
}

class ProdPlugin extends Plugin {
  constructor() {
    super();
    console.log('devPlugin')
  }
  init(){
    console.log('prod init')

  };
  activate(){
      console.log('active')
  };
  deactivate(){};
  dispose(){}
}

pluginManager.loadPlugin('dev', new DevPlugin())

pluginManager.loadPlugin('prod', new ProdPlugin())

const addPlugin = {
    name:"add",
    applay:(a:number,b:number) => a+b
}

const subPlugin = {
    name:"sub",
    applay:(a:number,b:number) => a-b
}

const vaculator = new Caculator()
vaculator.use(addPlugin)
vaculator.use(subPlugin)
console.log(vaculator.applay('add',1,2)) // 3
console.log(vaculator.applay('sub',1,2)) // 3

run()



</script>

<template>
  <div class="ticks"></div>
</template>
