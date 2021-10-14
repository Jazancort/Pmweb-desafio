import notificacao from 'src/boot/notify.js'
export default {
  mixins: [
    notificacao
  ],
  data () {
    return {
      key: 'justificativa',
      keyDescadastramento: 'decadastramento',
      descadastramento: {
        texto: null,
        id: null
      },
      justificativas: []
    }
  },
  mounted () {
    // Pegar items cadastrados do localStorage
    const item = localStorage.getItem(this.key)
    this.justificativas = JSON.parse(item)
  },
  methods: {
    // Salvar descadastramento
    salvarDescadastramento () {
      if (this.id !== null) {
        this.success('Descadastramento realizado com sucesso.')
        const novoDescadastramento = JSON.stringify([this.descadastramento])
        localStorage.setItem(this.keyDescadastramento, novoDescadastramento)
      } else if (this.id === 0 && this.descadastramento === null) {
        this.error('Por favor, adicione uma justificativa')
      } else {
        this.error('Por favor, selecione uma das opções acima para poder realizar o descadastramento.')
      }
      document.getElementById('reset').click()
    },
    onReset () {
      this.descadastramento.texto = null
      this.descadastramento.id = null
    }
  }
}
