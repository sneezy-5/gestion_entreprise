<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityTransactions from '@/views/pages/tables/DemoSimpleTableDensityTransactions.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Journal">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityTransactions />
      </VCard>
    </VCol>

   
  </VRow>
</template>
