import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
    name: 'App',

    data() {
        return {
            num1: 0,
            num2: 0,
            operator: 'sum',
        };
    },

    computed: {
        result() {
          const allResults = {
            sum: () => this.num1 + this.num2,
            subtract: () => this.num1 - this.num2,
            multiply: () => this.num1 * this.num2,
            divide: () => this.num1 / this.num2
          }
          return allResults[this.operator]()
        }
      }
})

const app = createApp(App);

app.mount('#app');