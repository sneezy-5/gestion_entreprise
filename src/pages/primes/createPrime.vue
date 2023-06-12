<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutPrime from '@/views/pages/form-layouts/DemoFormLayoutPrime.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter prime">
          <VCardText>
            <DemoFormLayoutPrime />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
