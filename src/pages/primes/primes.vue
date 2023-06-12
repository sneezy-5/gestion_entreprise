<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityPrime from '@/views/pages/tables/DemoSimpleTableDensityPrime.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Primes">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityPrime />
      </VCard>
    </VCol>

   
  </VRow>
</template>
