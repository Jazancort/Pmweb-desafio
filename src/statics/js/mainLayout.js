const menuList = [
  {
    icon: 'fas fa-user',
    label: 'Formulário',
    router: 'formulario'
  },
  {
    icon: 'fas fa-user-tie',
    label: 'Justificativa',
    router: 'justificativa'
  }
]
export default {
  name: 'MainLayout',
  data () {
    return {
      drawer: false,
      menuList
    }
  },
  methods: {
    customBtn () {
      this.$q.dialog({
        title: 'Limpar localStorage',
        message: 'Você tem certeza que deseja limpar todos os dados do localStorage?',
        ok: {
          push: true,
          label: 'sim'
        },
        cancel: {
          push: true,
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        window.localStorage.clear()
        this.$router.push('/formulario')
        this.drawer = false
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
