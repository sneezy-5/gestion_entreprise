<script setup lang="ts">
import DemoFormLayoutConge from '@/views/pages/form-layouts/DemoFormLayoutConge.vue';
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Créé congé">
          <VCardText>
            <DemoFormLayoutConge />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
