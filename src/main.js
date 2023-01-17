import './style.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { store } from './Store/store'

const app= createApp(App)
app.use(store)
app.use(router)
app.mount('#app')



// app.config.errorHandler = (err) => {
//     console.log(err);
//   };

// app.config.errorHandler = err => {
//     console.log('Exception: ', err)
//   }
  
// app.config.errorHandler = function (err, vm, info) {
//     airbrake.notify({
//       error: err,
//       params: {info: info}
//     });
//   }