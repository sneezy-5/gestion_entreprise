<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutPrimeEdit from '@/views/pages/form-layouts/DemoFormLayoutPrimeEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer Prime">
          <VCardText>
            <DemoFormLayoutPrimeEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
