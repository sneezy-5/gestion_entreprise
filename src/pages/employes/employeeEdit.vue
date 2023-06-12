<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutEmployeeEdit from '@/views/pages/form-layouts/DemoFormLayoutEmployeeEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Créé un employé">
          <VCardText>
            <DemoFormLayoutEmployeeEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
