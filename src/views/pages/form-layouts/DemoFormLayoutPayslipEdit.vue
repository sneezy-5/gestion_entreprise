<script lang="ts" setup>
import { payslipsService } from '@/_services';
import { useMainStore } from '@/stores/main';

const router = useRouter();

const routeParam = router.currentRoute.value.params.id;

const toast = ref({
  show: false,
  text: '',
  color: '',
});


const form = reactive({
    issuanceDate: null,
    paymentMethod: null,
    paymentDate: null,
    netToPay: null,
    grossIncome: null,
    TotalPayDeduction: null,
    daysWorked: null,
    hoursWorked: null,
    grossIncomeDetails: null,
    nonDeductibleIncome: null,
    companyDeductions: null,
    employeeDeductions: {IS:null,cn:null},
    matricule: null,

    formErrors: {
      issuanceDate: false,
      paymentMethod: false,
      paymentDate: false,
      netToPay: false,
      grossIncome: false,
      TotalPayDeduction: false,
      daysWorked: false,
      hoursWorked: false,
      grossIncomeDetails: false,
      nonDeductibleIncome: false,
      companyDeductions: false,
      employeeDeductions: false,
    
  },
});


payslipsService.getPayslips(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.issuanceDate = res.data.issuanceDate;
    form.paymentMethod = res.data.paymentMethod;
    form.paymentDate = res.data.paymentDate;
    form.TotalPayDeduction = res.data.TotalPayDeduction;
    form.netToPay = res.data.netToPay;
    form.grossIncome = res.data.grossIncome;
    form.companyDeductions = res.data.companyDeductions;
    form.nonDeductibleIncome = res.data.nonDeductibleIncome;
    form.employeeDeductions.IS = res.data.employeeDeductions.IS;
    form.matricule = res.data.matricule;
        console.log(res)
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });

const submit = () => {
  //
  console.log(form)

  payslipsService.updateConge(form)
      .then((res: any) => {
        form.formErrors.issuanceDate = false;
          form.formErrors.paymentMethod = false;
          form.formErrors.paymentDate = false;
          form.formErrors.netToPay = false;
          form.formErrors.grossIncome = false;
          form.formErrors.companyDeductions = false;
          form.formErrors.nonDeductibleIncome = false;
          form.formErrors.employeeDeductions = false;
        toast.value = {
        show: true,
        text: 'Modifé avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['issuanceDate']){

form.formErrors.issuanceDate = true;
toast.value = {
show: true,
text: error.response.data['issuanceDate'],
color: 'red', 
};
}else{

form.formErrors.issuanceDate = false;

} if(error.response.data['paymentMethod']){

form.formErrors.paymentMethod = true;
toast.value = {
show: true,
text: error.response.data['paymentMethod'],
color: 'red', 
};
} 
else{

form.formErrors.paymentMethod = false;
}
 if(error.response.data['TotalPayDeduction']){

form.formErrors.TotalPayDeduction = true;
toast.value = {
show: true,
text: error.response.data['TotalPayDeduction'],
color: 'red', 
};
} else{

form.formErrors.TotalPayDeduction = false;

} 
if(error.response.data['netToPay']){

form.formErrors.netToPay = true;
toast.value = {
show: true,
text: error.response.data['netToPay'],
color: 'red', 
};
} else{

form.formErrors.netToPay = false;

} if(error.response.data['grossIncome']){

form.formErrors.grossIncome = true;
toast.value = {
show: true,
text: error.response.data['grossIncome'],
color: 'red', 
};
} else{

form.formErrors.grossIncome = false;

}  if(error.response.data['companyDeductions']){

form.formErrors.companyDeductions = true;
toast.value = {
show: true,
text: error.response.data['companyDeductions'],
color: 'red', 
};
} else{

form.formErrors.nonDeductibleIncome = false;

} if(error.response.data['nonDeductibleIncome']){

form.formErrors.nonDeductibleIncome = true;
toast.value = {
show: true,
text: error.response.data['nonDeductibleIncome'],
color: 'red', 
};
} else{

form.formErrors.nonDeductibleIncome = false;

}    if(error.response.data['employeeDeductions']){

form.formErrors.employeeDeductions = true;
toast.value = {
show: true,
text: error.response.data['employeeDeductions'],
color: 'red', 
};
} else{

form.formErrors.employeeDeductions = false;

}      console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


      
      <!-- 👉 netToPay -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="number"
          v-model="form.netToPay"
          label="Net à payer"
          placeholder="Net à payer"
          :error="form.formErrors.netToPay"
        />
      </VCol>

      <!-- 👉 amount -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.grossIncome"
          label="Gross In Come"
          placeholder="Gross In come"
          :error="form.formErrors.grossIncome"
        />
      </VCol>

      <!-- 👉 code -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.paymentDate"
          label="Jour pris"
          placeholder="Jour pris"
          :error="form.formErrors.paymentDate"
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
