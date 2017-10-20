import {AxiosRequestConfig, AxiosResponse} from 'axios'
import {Observable} from 'rxjs/Observable'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface HTTP {
    get: (url: string, config?: AxiosRequestConfig) => Observable<AxiosResponse>
  }
  interface VueConstructor {
    $http: HTTP
  }
}
