<script setup lang="ts">
import DemoFormLayoutEmployee from '@/views/pages/form-layouts/DemoFormLayoutEmployee.vue'
import DemoFormLayoutPresenceEdit from '@/views/pages/form-layouts/DemoFormLayoutPresenceEdit.vue';


</script>

<template>
  <div>
    <VRow>

      
        
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Editer Présence">
          <VCardText>
            <DemoFormLayoutPresenceEdit />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
