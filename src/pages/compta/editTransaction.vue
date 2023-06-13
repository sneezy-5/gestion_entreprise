<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutTransactionEdit from '@/views/pages/form-layouts/DemoFormLayoutTransactionEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer">
          <VCardText>
            <DemoFormLayoutTransactionEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
