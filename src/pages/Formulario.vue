<template>
  <q-page padding>
    <div class="center-form row">

      <!-- Lado esquerdo da tela -->
      <div class="col col-md-6">
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
          O questionário é opcional.
        </div>
      </div>

      <!-- Lado Direito da tela: -->
      <div class="col q-pl-xl">
        <div class="text-weight-medium" style="font-size: 34px; color: #474747">
          Por que você quer se descadastrar?
        </div>
        <q-form
          @submit="salvarDescadastramento"
          @reset="onReset"
          class="q-gutter-md"
        >
          <div class="descricao q-pt-xl column">
            <!-- For para pegar todos as justificativas cadastradas -->
            <div class="q-pb-md" v-for="justificativa in justificativas" :key="justificativa">
              <q-radio v-model="descadastramento.id" :val="justificativa.id" :label="justificativa.texto" />
            </div>
            <q-radio v-model="descadastramento.id" val="0" label="Outro:" />
            <div class="q-pl-md">
              <q-input
                v-if="descadastramento.id==0"
                class="q-pt-xs"
                v-model="descadastramento.texto"
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
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script src="src/statics/js/formulario.js"></script>
