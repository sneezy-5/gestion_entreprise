<script setup lang="ts">
import DemoFormLayoutCategory from '@/views/pages/form-layouts/DemoFormLayoutCategory.vue';
import DemoFormLayoutProduct from '@/views/pages/form-layouts/DemoFormLayoutProduct.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Créé une categorie">
          <VCardText>
            <DemoFormLayoutCategory />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
