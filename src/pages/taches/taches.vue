<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityTache from '@/views/pages/tables/DemoSimpleTableDensityTache.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Taches">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityTache />
      </VCard>
    </VCol>

   
  </VRow>
</template>
