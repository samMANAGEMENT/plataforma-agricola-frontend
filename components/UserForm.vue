<template>
  <v-form ref="form" v-model="valid" @submit.prevent="$emit('submit')">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="editedItem.nombre"
          label="Nombre completo*"
          :rules="[rules.required]"
          required 
          outlined
          clearable
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="editedItem.email"
          label="Correo electrónico*"
          :rules="[rules.required, rules.email]"
          required 
          outlined
          clearable
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="editedItem.telefono"
          label="Teléfono"
          outlined
          clearable
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-select
          v-model="editedItem.tipo_id"
          :items="tiposUsuario"
          item-title="text"
          item-value="value"
          label="Tipo de Usuario*"
          :rules="[rules.required]"
          required 
          outlined
        />
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field
          v-model="editedItem.password"
          label="Contraseña*"
          :type="showPassword ? 'text' : 'password'"
          :rules="editedIndex > -1 ? [] : [rules.required, rules.minLength(8)]"
          :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="showPassword = !showPassword"
          :disabled="editedIndex > -1"
          required 
          outlined
        />
      </v-col>

      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="5">
            <v-select
              v-model="editedItem.tipo_doc"
              :items="tiposDocumento"
              item-title="text"
              item-value="value"
              label="Tipo de documento*"
              :rules="[rules.required]"
              required 
              outlined
            />
          </v-col>
          <v-col cols="12" sm="7">
            <v-text-field
              v-model="editedItem.dni"
              label="Número de documento*"
              :rules="[rules.required, rules.numeric]"
              required 
              outlined
              type="text"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="editedItem.direccion"
          label="Dirección"
          outlined
          clearable
        />
      </v-col>

      <v-col cols="12" v-if="editedIndex > -1">
        <v-switch
          v-model="editedItem.estado"
          label="Usuario activo"
          color="green"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import * as rules from '@/utils/validationRules.js'

const showPassword = ref(false)
const valid = ref(false)
const form = ref(null)

defineProps({
  editedItem: Object,
  editedIndex: Number,
  tiposUsuario: Array,
  tiposDocumento: Array
})

defineExpose({ 
  valid,
  form,
  validate: () => form.value.validate()
})

defineEmits(['submit'])
</script>
