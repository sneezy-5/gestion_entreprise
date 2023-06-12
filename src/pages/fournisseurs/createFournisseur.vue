<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutFournisseur from '@/views/pages/form-layouts/DemoFormLayoutFournisseur.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter un fournisseur">
          <VCardText>
            <DemoFormLayoutFournisseur />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
