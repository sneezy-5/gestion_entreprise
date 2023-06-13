<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityGrandlivre from '@/views/pages/tables/DemoSimpleTableDensityGrandlivre.vue';
import DemoSimpleTableDensityTransactions from '@/views/pages/tables/DemoSimpleTableDensityTransactions.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Grand livre">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityGrandlivre />
      </VCard>
    </VCol>

   
  </VRow>
</template>
