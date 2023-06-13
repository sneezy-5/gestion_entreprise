<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutUserEdit from '@/views/pages/form-layouts/DemoFormLayoutUserEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer">
          <VCardText>
            <DemoFormLayoutUserEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
