<script setup lang="ts">
import DemoFormLayoutAvance from '@/views/pages/form-layouts/DemoFormLayoutAvance.vue';
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter avance">
          <VCardText>
            <DemoFormLayoutAvance />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
