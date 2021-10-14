<template>
  <q-page padding>
    <div class="center row">

      <!-- Lado esquerdo da tela -->
      <div class="col">
        <div class="text-weight-medium" style="font-size: 34px; color: #474747">
          Nós sentiremos sua falta
          <img class="q-pt-xs q-pr-xl" style="height: 50px" src="NovoProjeto1.png">
        </div>

        <div class="descricao q-pt-xl">
          Lamentamos ver você indo embora.<br>
          Para que possamos <b>melhorar nossa comunicação</b>, gostaríamos de <b>saber os motivos</b>
          que o levaram a tomar essa decisão.
        </div>
        <div class="text-weight-medium q-pt-xl" style="font-size: 18px; color: #474747">
          O questionário é opicional.
        </div>
      </div>

      <!-- Lado Direito da tela: -->
      <div class="col">
        <div class="text-weight-medium" style="font-size: 34px; color: #474747">
          Por que você quer se descadastrar?
        </div>
        <div class="descricao q-pt-xl column">
          <div class="q-pb-md" v-for="justificativa in justificativas" :key="justificativa">
            <q-radio v-model="radio" :val="justificativa.id" :label="justificativa.texto" />
          </div>
          <q-radio v-model="radio" val="0" label="Outro:" />
          <div class="q-pl-md">
            <q-input
              v-if="radio==0"
              class="q-pt-xs"
              v-model="justificativa.texto"
              bottom-slots
              counter
              maxlength="150"
              dense
              :rules="[val => !!val || 'Por favor, digite uma justificativa']"
            />
          </div>
        </div>
        <div class="text-weight-medium q-pt-xl" style="font-size: 15px; color: #474747">
          O descadastramento será efetuado para o e-mail:<br>
          <p class="text-blue">nome.sobrenome@pmweb.com.br</p>
        </div>
        <div class="q-pt-sm">
          <q-btn
            type="submit"
            style="width: 200px"
            align="center"
            size="md"
            color="primary"
            label="Descadastrar"
            no-caps
            rounded
          />
        </div>
      </div>
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
      radio: null,
      outro: null,
      justificativa: {
        texto: null,
        checkbox: null
      },
      justificativas: []
    }
  },
  mounted () {
    const item = localStorage.getItem(this.key)
    this.justificativas = JSON.parse(item)
  },
  methods: {
    salvarJustificativa () {
      if (this.justificativa.checkbox == null) {
        this.error('Selecione uma opção no checkbox')
      } else {
        window.localStorage.setItem('justificativas', JSON.stringify(this.justificativa))
        this.success('Justificativa salva com sucesso')
      }
    },
    onReset () {
      this.justificativa = null
    },
    myRule (val) {
      if (val == null) {
        return val || 'Por favor, selecione uma das duas opções.'
      }
    }
  }
}
</script>

<style>
.center {
  margin: auto;
  width: 75%;
  padding: 70px 0;
}
.descricao {
  text-align: justify;
  line-height: 1.8;
  font-size: 18px;
  color: #474747;
  width: 575px;
}
p {
  text-decoration: underline;
}
</style>
