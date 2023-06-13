<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityProjet from '@/views/pages/tables/DemoSimpleTableDensityProjet.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Projets">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityProjet />
      </VCard>
    </VCol>

   
  </VRow>
</template>
