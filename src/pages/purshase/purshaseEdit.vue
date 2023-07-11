<script setup lang="ts">
import DemoFormLayoutProductEdit from '@/views/pages/form-layouts/DemoFormLayoutProductEdit.vue';
import DemoFormLayoutPurshaseEdit from '@/views/pages/form-layouts/DemoFormLayoutPurshaseEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Créé un produit">
          <VCardText>
            <DemoFormLayoutPurshaseEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
