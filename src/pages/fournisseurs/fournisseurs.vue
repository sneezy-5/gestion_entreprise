<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityFournisseur from '@/views/pages/tables/DemoSimpleTableDensityFournisseur.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Fournisseurs">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityFournisseur />
      </VCard>
    </VCol>

   
  </VRow>
</template>
