<script lang="ts" setup>
import { employeesService, primeService } from '@/_services';
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
    title: "",
    amount: null,
    code: "",
    employee:null,

    formErrors: {
      title: false,
      amount: false,
      code: false,
      employee: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  primeService.createPrime(form)
      .then((res: any) => {
        form.formErrors.title = false;
          form.formErrors.amount = false;
          form.formErrors.code = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['RequestDate']){

form.formErrors.title = true;
toast.value = {
show: true,
text: error.response.data['title'],
color: 'red', 
};
}else{

form.formErrors.title = false;

} if(error.response.data['amount']){

form.formErrors.amount = true;
toast.value = {
show: true,
text: error.response.data['amount'],
color: 'red', 
};
} 
else{

form.formErrors.amount = false;
}
 if(error.response.data['code']){

form.formErrors.code = true;
toast.value = {
show: true,
text: error.response.data['code'],
color: 'red', 
};
} else{

form.formErrors.code = false;

} 
         console.log(error)
        
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
    
      <!-- 👉 titre -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="text"
          v-model="form.title"
          label="Titre"
          placeholder="Titre"
          :error="form.formErrors.title"
        />
      </VCol>

      <!-- 👉 amount -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.amount"
          label="Montant"
          placeholder="Montant"
          :error="form.formErrors.amount"
        />
      </VCol>

      <!-- 👉 code -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="text"
          v-model="form.code"
          label="Code"
          placeholder="Code"
          :error="form.formErrors.code"
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
