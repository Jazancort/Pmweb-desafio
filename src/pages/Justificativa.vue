<template>
  <q-page padding>
    <div class="center">
      <div class="text-weight-medium" style="font-size: 34px; color: #474747">
        Adicionar nova justificativa
      </div>
      <div class="q-pt-xl" style="font-size: 18px; color: #474747">
          Justificativa
      </div>
      <q-form
        @submit.prevent="salvarJustificativa"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          class="q-pt-xs"
          v-model="justificativa.texto"
          bottom-slots
          label="Digite um motivo para fazer opt out"
          counter
          maxlength="150"
          dense
          clearable
          clear-icon="close"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor, digite uma justificativa']"
        />
        <q-checkbox
          v-model="justificativa.checkbox"
          label="Permitir que o usuário informe uma observação"
        />
        <div class="q-pt-xs">
          <q-btn
            class="float-right"
            type="submit"
            style="width: 200px"
            align="center"
            size="md"
            color="primary"
            label="Salvar alterações"
            no-caps
            rounded
          />
          <q-btn id="reset" type="reset" color="primary" flat class="q-ml-sm" style="display: none;" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
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
      justificativas: []
    }
  },
  methods: {
    salvarJustificativa () {
      if (this.justificativa.checkbox == null) {
        this.error('Selecione uma opção no checkbox')
      } else {
        const item = localStorage.getItem(this.key)
        if (item) {
          const itemsExistente = JSON.parse(item)
          itemsExistente.push(this.justificativa)
          const novoItem = JSON.stringify(itemsExistente)
          localStorage.setItem(this.key, novoItem)
          this.success('Justificativa salva com sucesso')
          this.justificativa.id++
        } else {
          const novaJustificativa = JSON.stringify([this.justificativa])
          localStorage.setItem(this.key, novaJustificativa)
          console.log(novaJustificativa)
          console.log(this.justificativa)
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
</script>

<style>
.center {
  margin: auto;
  width: 85%;
  padding: 200px 0;
}
</style>
