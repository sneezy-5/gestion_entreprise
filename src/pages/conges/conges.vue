<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityConge from '@/views/pages/tables/DemoSimpleTableDensityConge.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Congés">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityConge />
      </VCard>
    </VCol>

   
  </VRow>
</template>
