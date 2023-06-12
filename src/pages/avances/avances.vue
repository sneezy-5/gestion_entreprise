<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityAvance from '@/views/pages/tables/DemoSimpleTableDensityAvance.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Avance sur salaire">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityAvance />
      </VCard>
    </VCol>

   
  </VRow>
</template>
