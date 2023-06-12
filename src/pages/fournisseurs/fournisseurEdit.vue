<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutFournisseurEdit from '@/views/pages/form-layouts/DemoFormLayoutFournisseurEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer">
          <VCardText>
            <DemoFormLayoutFournisseurEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
