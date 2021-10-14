import { Notify } from 'quasar'

Notify.setDefaults({
  position: 'top-right',
  timeout: 10000,
  textColor: 'white'
})

export default {
  name: 'notificacoes-principal',
  data () {
    return {}
  },
  methods: {
    alert (mensagem) {
      Notify.create({
        message: mensagem,
        position: 'bottom',
        color: 'yellow',
        textColor: 'black',
        icon: 'warning',
        progress: true,
        actions: [{
          icon: 'close',
          color: 'black',
          round: true,
          dense: true
        }]
      })
    },

    error (mensagem) {
      Notify.create({
        message: mensagem,
        position: 'bottom',
        color: 'red',
        progress: true,
        icon: 'fas fa-skull-crossbones',
        actions: [{
          icon: 'close',
          color: 'white',
          round: true,
          dense: true
        }]
      })
    },

    info (mensagem) {
      Notify.create({
        message: mensagem,
        position: 'bottom',
        color: 'blue',
        icon: 'info',
        progress: true,
        actions: [{
          icon: 'close',
          color: 'white',
          round: true,
          dense: true
        }]
      })
    },

    success (mensagem) {
      Notify.create({
        message: mensagem,
        position: 'bottom',
        color: 'green',
        icon: 'done',
        progress: true,
        actions: [{
          icon: 'close',
          color: 'white',
          round: true,
          dense: true
        }]
      })
    }
  }
}
