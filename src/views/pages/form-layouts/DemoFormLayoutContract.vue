<script lang="ts" setup>
import { employeesService, contractService } from '@/_services';
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
    contract_type: "CDD",
    position: "",
    baseSalary: "",
    extrapay: "",
    transportationAllowance: "",
    signingDate: "",
    startDate: "",
    endDate: "",
    employee:'',

    formErrors: {
      contract_type: false,
      position: false,
      baseSalary: false,
      extrapay: false,
      transportationAllowance: false,
      signingDate: false,
      startDate: false,
      endDate: false,
      employee: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  contractService.createContracts(form)
      .then((res: any) => {
        form.formErrors.contract_type = false;
          form.formErrors.position = false;
          form.formErrors.baseSalary = false;
          form.formErrors.extrapay = false;
          form.formErrors.transportationAllowance = false;
          form.formErrors.signingDate = false;
          form.formErrors.startDate = false;
          form.formErrors.endDate = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'success',
      };

    form.contract_type = "";
    form.position = "";
    form.baseSalary = "";
    form.extrapay = "";
    form.transportationAllowance = "";
    form.signingDate = "";
    form.startDate = "";
    form.endDate = "";
    form.employee = "";
    })
    .catch((error) => {


if(error.response.data['contract_type']){

form.formErrors.contract_type = true;
toast.value = {
show: true,
text: error.response.data['contract_type'],
color: 'danger', 
};
}else{

form.formErrors.contract_type = false;

} if(error.response.data['position']){

form.formErrors.position = true;
toast.value = {
show: true,
text: error.response.data['position'],
color: 'danger', 
};
} 
else{

form.formErrors.position = false;
}
 if(error.response.data['baseSalary']){

form.formErrors.baseSalary = true;
toast.value = {
show: true,
text: error.response.data['baseSalary'],
color: 'danger', 
};
} else{

form.formErrors.baseSalary = false;

} if(error.response.data['extrapay']){

form.formErrors.extrapay = true;
toast.value = {
show: true,
text: error.response.data['extrapay'],
color: 'danger', 
};
} else{

form.formErrors.extrapay = false;

}if(error.response.data['transportationAllowance']){

form.formErrors.transportationAllowance = false;

} else{

form.formErrors.transportationAllowance = false;

}if(error.response.data['signingDate']){

form.formErrors.signingDate = true;
toast.value = {
show: true,
text: error.response.data['signingDate'],
color: 'danger', 
};
}else{

form.formErrors.signingDate = false;

}if(error.response.data['startDate']){

form.formErrors.startDate = true;
toast.value = {
show: true,
text: error.response.data['startDate'],
color: 'danger', 
};
} else{

form.formErrors.startDate = false;

} if(error.response.data['endDate']){

form.formErrors.endDate = true;
toast.value = {
show: true,
text: error.response.data['endDate'],
color: 'danger', 
};
}else{

form.formErrors.endDate = false;

}   if(error.response.data['employee']){

form.formErrors.employee = true;
toast.value = {
show: true,
text: error.response.data['employee'],
color: 'danger', 
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
          <!-- 👉 type de contrat-->
          <VCol
        cols="12"
        md="6"
      >
      <VSelect
                  v-model="form.contract_type"
                  label="Contrat"
                  :items="['CDD', 'CDI', 'STAGE']"
                  :error="form.formErrors.contract_type"
                />
  
      </VCol>
      <!-- 👉 position -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.position"
          label="Poste"
          placeholder="Poste"
          :error="form.formErrors.position"
        />
      </VCol>

      <!-- 👉 salaire de base -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.baseSalary"
          label="Salaire de base"
          placeholder="Salaire de base"
          :error="form.formErrors.baseSalary"
        />
      </VCol>

      <!-- 👉 extra paie -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.extrapay"
          label="Sur salaie"
          placeholder="Sur salaire"
          :error="form.formErrors.extrapay"
        />
      </VCol>

      <!-- 👉 transport -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.transportationAllowance"
          label="Transport"
          placeholder="Transport"
          :error="form.formErrors.transportationAllowance"
        />
      </VCol>

      <!-- 👉 debut -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.startDate"
          label="Debut contrat"
          placeholder="Debut"
          :error="form.formErrors.startDate"
        />
      </VCol>

      <!-- 👉 fin -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.endDate"
          label="Fin contrat"
          placeholder="Fin"
          :error="form.formErrors.endDate"
        />
      </VCol>

    

 <!-- 👉 signature -->
 <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.signingDate"
          label="Signature"
          placeholder="Signature"
          :error="form.formErrors.signingDate"
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
