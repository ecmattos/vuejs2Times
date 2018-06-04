import Vue from 'vue'
import {Time} from './time'

new Vue({
  el: '#app',
  data: {
  	times: [
  		new Time("America MG", require('./assets/america-mg.png')),
  		new Time("America RJ", require('./assets/america-rj.png')),
  		new Time("Atletico GO", require('./assets/atletico-go.png')),
  		new Time("Atletico MG", require('./assets/atletico-mg.png')),
  		new Time("Atletico PR", require('./assets/atletico-pr.png')),
  		new Time("Avai", require('./assets/avai.png')),
  		new Time("Bahia", require('./assets/bahia.png')),
  	]
  }
})