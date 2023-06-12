<script lang="ts" setup>
import { employeesService, avanceService } from '@/_services';
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
    RequestDate: null,
    amountRequested: null,
    paymentDate: null,
    paymentMethod: "",
    ReimbursmentDate: null,
    employee:null,

    formErrors: {
      RequestDate: false,
      amountRequested: false,
      paymentDate: false,
      paymentMethod: false,
      ReimbursmentDate: false,
      employee: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  avanceService.createAvance(form)
      .then((res: any) => {
        form.formErrors.RequestDate = false;
          form.formErrors.amountRequested = false;
          form.formErrors.paymentDate = false;
          form.formErrors.paymentMethod = false;
          form.formErrors.ReimbursmentDate = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['RequestDate']){

form.formErrors.RequestDate = true;
toast.value = {
show: true,
text: error.response.data['RequestDate'],
color: 'red', 
};
}else{

form.formErrors.RequestDate = false;

} if(error.response.data['amountRequested']){

form.formErrors.amountRequested = true;
toast.value = {
show: true,
text: error.response.data['amountRequested'],
color: 'red', 
};
} 
else{

form.formErrors.amountRequested = false;
}
 if(error.response.data['paymentDate']){

form.formErrors.paymentDate = true;
toast.value = {
show: true,
text: error.response.data['paymentDate'],
color: 'red', 
};
} else{

form.formErrors.paymentDate = false;

} if(error.response.data['paymentMethod']){

form.formErrors.paymentMethod = true;
toast.value = {
show: true,
text: error.response.data['paymentMethod'],
color: 'red', 
};
} else{

form.formErrors.paymentMethod = false;

}if(error.response.data['ReimbursmentDate']){

form.formErrors.ReimbursmentDate = false;

} else{

form.formErrors.ReimbursmentDate = false;

} if(error.response.data['employee']){

form.formErrors.employee = true;
toast.value = {
show: true,
text: error.response.data['employee'],
color: 'red', 
};
} else{

form.formErrors.employee = false;

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
    
      <!-- 👉 request date -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="date"
          v-model="form.RequestDate"
          label="Date de la demande"
          placeholder="Date de la demande"
          :error="form.formErrors.RequestDate"
        />
      </VCol>

      <!-- 👉 amount request-->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.amountRequested"
          label="Montant demandé"
          placeholder="Montant demandé"
          :error="form.formErrors.amountRequested"
        />
      </VCol>

      <!-- 👉 epaymentDate -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.paymentDate"
          label="Date de paie"
          placeholder="Date de paie"
          :error="form.formErrors.paymentDate"
        />
      </VCol>

      <!-- 👉 methode de paie -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="text"
          v-model="form.paymentMethod"
          label="methode de paie"
          placeholder="methode de paie"
          :error="form.formErrors.paymentMethod"
        />
      </VCol>

      <!-- 👉 remboursement -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.ReimbursmentDate"
          label="Date de remboursement"
          placeholder="Date de remboursement"
          :error="form.formErrors.ReimbursmentDate"
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
