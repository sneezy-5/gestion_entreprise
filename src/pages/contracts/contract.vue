<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityContract from '@/views/pages/tables/DemoSimpleTableDensityContract.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Contrats">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityContract />
      </VCard>
    </VCol>

   
  </VRow>
</template>
