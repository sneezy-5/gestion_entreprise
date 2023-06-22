<script lang="ts" setup>
import { demandeCongeService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);


demandeCongeService.getAllDeamndeConges()
      .then(res => {
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          employe.push( {state:data[i].firstName,abbr:data[i].id});
        }   
        
        console.log(employe)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });

const form = reactive({
  start_date: null,
    end_date: null,
    user: null,
    employee:null,

    formErrors: {
      start_date: false,
      end_date: false,
      user: false,
      employee: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  demandeCongeService.createDemandeConge(form)
      .then((res: any) => {
        form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          form.formErrors.user = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Démande effectué avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['start_date']){

form.formErrors.start_date = true;
toast.value = {
show: true,
text: error.response.data['start_date'],
color: 'danger', 
};
}else{

form.formErrors.start_date = false;

} if(error.response.data['end_date']){

form.formErrors.end_date = true;
toast.value = {
show: true,
text: error.response.data['end_date'],
color: 'danger', 
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


       
    
      <!-- 👉 titre -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="date"
          v-model="form.start_date"
          label="Début des congés"
          placeholder="Début des congés"
          :error="form.formErrors.start_date"
        />
      </VCol>

      <!-- 👉 amount -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin des congés"
          placeholder="Fin des congé"
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
          Envoyer demande
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
