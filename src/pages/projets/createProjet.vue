<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutProjet from '@/views/pages/form-layouts/DemoFormLayoutProjet.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter un projet">
          <VCardText>
            <DemoFormLayoutProjet />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
