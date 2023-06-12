<script setup lang="ts">
import DemoSimpleTableDensityPayslips from '@/views/pages/tables/DemoSimpleTableDensityPayslips.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Bulletin de paie">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityPayslips />
      </VCard>
    </VCol>

   
  </VRow>
</template>
