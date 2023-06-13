<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutUser from '@/views/pages/form-layouts/DemoFormLayoutUser.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Ajouter un utlisateur">
          <VCardText>
            <DemoFormLayoutUser />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
