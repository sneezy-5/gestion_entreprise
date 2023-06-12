<script setup lang="ts">
import DemoFormLayoutCompteEdit from '@/views/pages/form-layouts/DemoFormLayoutCompteEdit.vue';
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer compte">
          <VCardText>
            <DemoFormLayoutCompteEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
