<script lang="ts" setup>
import { employeesService, payslipsService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);


employeesService.getAllEmployees()
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
      employee:null,
    formErrors: {
      start_date: false,
      end_date: false,
      employee:false,
  },
});

const submit = () => {
  //
  console.log(form)

  payslipsService.createPayslipsOne(form)
      .then((res: any) => {
        form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
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
} if(error.response.data['employee']){

form.formErrors.employee = true;
toast.value = {
show: true,
text: error.response.data['employee'],
color: 'danger', 
};
} 
else{

form.formErrors.employee = false;
}
    });

  };
</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


        <!-- 👉 Employe -->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.employee"
  label="Employés"
  :items="employe"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.employee"
  
  
/>

      </VCol>
    
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
          Enregistré
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
