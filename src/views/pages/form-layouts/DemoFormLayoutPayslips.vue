<script lang="ts" setup>
import {  payslipsService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});


const form = reactive({
  start_date: null,
    end_date: null,

    formErrors: {
      start_date: false,
      end_date: false,
  },
});


const submit = () => {
  //
  console.log(form)

  payslipsService.createPayslips(form)
      .then((res: any) => {
        form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          
        toast.value = {
        show: true,
        text: 'Généré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {
  
if(error.response.data['message']){

form.formErrors.start_date = true;
toast.value = {
show: true,
text: error.response.data['message'],
color: 'red', 
};
}

if(error.response.data['start_date']){

form.formErrors.start_date = true;
toast.value = {
show: true,
text: error.response.data['start_date'],
color: 'red', 
};
}else{

form.formErrors.start_date = false;

} if(error.response.data['end_date']){

form.formErrors.end_date = true;
toast.value = {
show: true,
text: error.response.data['end_date'],
color: 'red', 
};
} 
else{

form.formErrors.end_date = false;
}
 
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


    
      <!-- 👉 debut -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="date"
          v-model="form.start_date"
          label="Debut"
          placeholder="Debut"
          :error="form.formErrors.start_date"
        />
      </VCol>

      <!-- 👉 end -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin"
          placeholder="Fin"
          :error="form.formErrors.end_date"
        />
      </VCol>

    
    
 <!--shoxw toats message-->
 <VSnackbar 
      v-model="toast.show" 
      :timeout="3000" 
      :color="toast.color"
      top='top' >
    {{ toast.text }}
    <template #action="{ attrs }">
      <VBtn text v-bind="attrs" @click="toast.show = false">
        <VIcon>mdi-close</VIcon>
      </VBtn>
    </template>
  </VSnackbar>
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Générer
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
