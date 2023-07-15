<template>
        <VForm @submit.prevent="submit" >
    <VRow>
 

      <!-- 👉 start date -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.start_date"
          label="Debut"
          placeholder="Debut"
    
        />
      </VCol>

      <!-- 👉 end date-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin"
          placeholder="Fin"
     
        />
      </VCol>


        
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Fltrer
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
