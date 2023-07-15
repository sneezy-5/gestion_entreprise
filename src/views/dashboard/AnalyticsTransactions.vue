<script setup lang="ts">
import { tresorieService } from '@/_services';


import { reactive } from 'vue';

const tresorerie = reactive({
  total_charge_fixe: 0,
  total_charge_variable: 0,
  total_transaction: 0,
  total_depense: 0,
  total_revenu: 0,
  chffre_affaire: 0
});

const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10)
});

const updateTresorerie = () => {
  tresorieService.getTresorerie(form.start_date, form.end_date)
    .then(res => {
      console.log(res);
      const data = res.data;

      tresorerie.total_charge_fixe = data.total_charge_fixe;
      tresorerie.total_charge_variable = data.total_charge_variable;
      tresorerie.total_transaction = data.total_transaction;
      tresorerie.total_depense = data.total_depense;
      tresorerie.total_revenu = data.total_revenu;
      tresorerie.chffre_affaire = data.chffre_affaire;
    });
};

const statistics = reactive([
  {
    title: 'Charges Fixes',
    stats: () => tresorerie.total_charge_fixe,
    icon: 'mdi-trending-up',
    color: 'primary',
  },
  {
    title: 'Charges Variables',
    stats: () => tresorerie.total_charge_variable,
    icon: 'mdi-cart',
    color: 'success',
  },
  {
    title: 'Dépense',
    stats: () => tresorerie.total_depense,
    icon: 'mdi-cellphone-link',
    color: 'warning',
  },
  {
    title: 'Revenu',
    stats: () => tresorerie.total_revenu,
    icon: 'mdi-currency-usd',
    color: 'info',
  },
]);
updateTresorerie()
const submit = () => {
  updateTresorerie();
};

</script>

<template>


  <VCard>
    <VCardItem>
      <VCardTitle>Transactions</VCardTitle>

      <!-- <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template> -->
    </VCardItem>

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
      <h6 class="text-sm font-weight-medium mb-12">
        <!-- <span>Total 48</span> -->
        <span class="font-weight-regular"> ce mois</span>
      </h6>

      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          sm="3"
        >
          <div class="d-flex align-center">
            <div class="me-3">
              <VAvatar
                :color="item.color"
                rounded
                size="42"
                class="elevation-1"
              >
                <VIcon
                  size="24"
                  :icon="item.icon"
                />
              </VAvatar>
            </div>

            <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.title }}
              </span>
              <span class="text-h6">{{ item.stats() }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
