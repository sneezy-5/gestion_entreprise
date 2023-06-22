<script setup lang="ts">
import { dashboardService, tresorieService } from '@/_services';
import triangleDark from '@images/misc/triangle-dark.png'
import triangleLight from '@images/misc/triangle-light.png'
import trophy from '@images/misc/trophy.png'
import { useTheme } from 'vuetify'

const { global } = useTheme()
const triangleBg = computed(() => global.name.value === 'light' ?  triangleLight : triangleDark)


const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10),
  chffre_affaire: 0,
});


const updateTresorerie = () =>{
  tresorieService.getTresorerie(form.start_date, form.end_date)
      .then(res => {
        
        console.log(res.data)
        const data = res.data
        form.chffre_affaire = data.chffre_affaire
    })
}
updateTresorerie()
const submit = () => {
  //
updateTresorerie()
};
</script>

<template>

  <VCard
    title="Chiffre d'affaire"
    subtitle="Chiffre d'affaire du mois"
    class="position-relative"
  >
    <VCardText>
      <VForm @submit.prevent="submit" >
    <VRow>
 

      <!-- 👉 start date -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.start_date"
          label="Debut"
          placeholder="Debut"
    
        />
      </VCol>

      <!-- 👉 end date-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin"
          placeholder="Fin"
     
        />
      </VCol>


        
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Fltrer
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
      <h5 class="text-2xl font-weight-medium text-primary">
        {{ form.chffre_affaire }}
      </h5>
      <p>🚀</p>
      <!-- <VBtn size="small">
        View Sales
      </VBtn> -->
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg flip-in-rtl"
    />

    <!-- Trophy -->
    <VImg
      :src="trophy"
      class="trophy"
    />
  </VCard>
</template>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutsMixins;

.v-card .triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.v-card .trophy {
  position: absolute;
  inline-size: 4.9375rem;
  inset-block-end: 2rem;
  inset-inline-end: 2rem;
}
</style>
