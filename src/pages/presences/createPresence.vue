<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutPresence from '@/views/pages/form-layouts/DemoFormLayoutPresence.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Créé un employé">
          <VCardText>
            <DemoFormLayoutPresence />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
