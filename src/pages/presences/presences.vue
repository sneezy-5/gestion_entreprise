<script setup lang="ts">
import DemoSimpleTableDensity from '@/views/pages/tables/DemoSimpleTableDensity.vue'
import DemoSimpleTableDensityPresence from '@/views/pages/tables/DemoSimpleTableDensityPresence.vue';

</script>

<template>
  <VRow>


    <VCol cols="12">
      <VCard title="Présences">
        <!-- <VCardText>
          You can show a dense version of the table by using the <code>density</code> prop.
        </VCardText> -->
        <DemoSimpleTableDensityPresence />
      </VCard>
    </VCol>

   
  </VRow>
</template>
