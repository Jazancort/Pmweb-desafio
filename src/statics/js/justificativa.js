import notificacao from 'src/boot/notify.js'
export default {
  mixins: [
    notificacao
  ],
  data () {
    return {
      key: 'justificativa',
      justificativa: {
        texto: null,
        checkbox: null,
        id: 1
      },
      justificativas: [],
      storage: []
    }
  },
  mounted () {
    // Pegar sempre o último valor do id no localStorage
    const item = localStorage.getItem(this.key)
    if (item != null) {
      this.storage = JSON.parse(item)
      const id = item.charAt(item.length - 3)
      this.justificativa.id = parseInt(id)
      this.justificativa.id++
    }
  },
  methods: {
    // Salvar uma nova justificativa
    salvarJustificativa () {
      if (this.justificativa.checkbox == null) {
        this.error('Selecione uma opção no checkbox')
      } else {
        const itemJustificativa = localStorage.getItem(this.key)
        if (itemJustificativa) {
          const justificativaExistente = JSON.parse(itemJustificativa)
          justificativaExistente.push(this.justificativa)
          const novoItem = JSON.stringify(justificativaExistente)
          localStorage.setItem(this.key, novoItem)
          this.success('Justificativa salva com sucesso')
          this.justificativa.id++
        } else {
          const novaJustificativa = JSON.stringify([this.justificativa])
          localStorage.setItem(this.key, novaJustificativa)
          this.success('Justificativa salva com sucesso')
          this.justificativa.id++
        }
        document.getElementById('reset').click()
      }
    },
    onReset () {
      this.justificativa.texto = null
      this.justificativa.checkbox = null
    }
  }
}
