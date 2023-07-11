<script setup lang="ts">
import DemoFormLayoutEditCategory from '@/views/pages/form-layouts/DemoFormLayoutEditCategory.vue';
import DemoFormLayoutProductEdit from '@/views/pages/form-layouts/DemoFormLayoutProductEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer une catégorie">
          <VCardText>
            <DemoFormLayoutEditCategory />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
