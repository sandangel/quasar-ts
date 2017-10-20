import {fromPromise} from 'rxjs/observable/fromPromise'
import axios, {AxiosRequestConfig} from 'axios'

import Vue, {PluginFunction, PluginObject} from 'vue'

const install: PluginFunction<any> = function(Vue) {
  Vue.prototype.$http = {
    get(url: string, config?: AxiosRequestConfig | undefined) {
      return fromPromise(axios.get(url, config))
    }
  }
}

const HTTP: PluginObject<any> = {
  install
}

export default HTTP
