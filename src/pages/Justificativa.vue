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

<script src="src/statics/js/justificativa.js"> </script>
