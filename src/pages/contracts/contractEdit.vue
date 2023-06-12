<script setup lang="ts">
import DemoFormLayoutContractEdit from '@/views/pages/form-layouts/DemoFormLayoutContractEdit.vue';
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter contrat">
          <VCardText>
            <DemoFormLayoutContractEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
