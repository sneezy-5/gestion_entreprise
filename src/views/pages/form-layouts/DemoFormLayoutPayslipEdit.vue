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
    grossIncomeDetails: {hs15: "", hs50: "", hs75: "", conge: "", hs100: "", sursal: "", hstotal: "", seniority: "", salairBase: "", sommeprime: "", sursalaire: "", ancienneteInYR: "", brutImposableFiscal: "", brutImposableSocial: ""},
    nonDeductibleIncome: {totalprime: "", primetransport: ""},
    companyDeductions: {is: "", total: "", cnpsPat: "", taxForm: "", taxtApp: ""},
    employeeDeductions: {IS:"", cn: "", IGR:"", cmu:"", cnps: "", payday: 0, totret:""},
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
    form.employeeDeductions = res.data.employeeDeductions;
    form.grossIncomeDetails = res.data.grossIncomeDetails
    form.matricule = res.data.matricule;
        console.log(res,form)
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });

const submit = () => {
  //
  console.log(form)

  payslipsService.updatePayslips(form)
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
        color: 'success',
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

      <!-- 👉 Révznu brut -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.grossIncome"
          label="Révenu brut"
          placeholder="Révenu"
          :error="form.formErrors.grossIncome"
        />
      </VCol>

      <!-- 👉 date de payement -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.paymentDate"
          label="Date de payement"
          :error="form.formErrors.paymentDate"
        />
      </VCol>

      <!-- 👉 Total deduction -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.TotalPayDeduction"
          label="Total deduction"
          :error="form.formErrors.TotalPayDeduction"
        />
      </VCol>

    <!-- 👉 Payement method -->
    <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="text"
          v-model="form.paymentMethod"
          label="Method de payement"
          :error="form.formErrors.paymentMethod"
        />
      </VCol>

          <!-- 👉 issuance date -->
          <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.issuanceDate"
          label="Issuance date"
          :error="form.formErrors.issuanceDate"
        />
      </VCol>

            <!-- 👉 CNPS Patronal -->
            <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.companyDeductions.cnpsPat"
          label="Employeur CNPS Patronal"
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 is -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.companyDeductions.is"
          label="Deduction employeur IS"
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 CNPS Patronal -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.companyDeductions.taxForm"
          label="Deduction employeur tax"
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 taxtapp -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.companyDeductions.taxtApp"
          label="Deduction employeur taxtapp"
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 total -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.companyDeductions.total"
          label="Deduction employeur total"
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 IGR -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.IGR"
          label="employé deduction IGR"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>

       <!-- 👉 Employé deduction  IS-->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.IS"
          label="employé deduction IS"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>

       <!-- 👉 CMU -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.cmu"
          label="Employé CMU"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>

       <!-- 👉 CN -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.cn"
          label="Employé CN"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>
      
       <!-- 👉 CNPS  -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.cnps"
          label="employé CNPS "
          :error="form.formErrors.companyDeductions"
        />
      </VCol>

       <!-- 👉 payday -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.employeeDeductions.payday"
          label="Avance Sur Salaire"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>

       <!-- 👉 totret -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="text"
          v-model="form.employeeDeductions.totret"
          label="Employé total rétenu"
          :error="form.formErrors.employeeDeductions"
        />
      </VCol>

       <!-- 👉 prime transport -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.nonDeductibleIncome.primetransport"
          label="prime transport"
          :error="form.formErrors.nonDeductibleIncome"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.nonDeductibleIncome.totalprime"
          label="Total prime"
          :error="form.formErrors.nonDeductibleIncome"
        />
      </VCol>

       <!-- 👉 heure sub 15-->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.hs15"
          label="Heure sup 15"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>


       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.hs50"
          label="Heure sup 50"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Heure sup 50 -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.hs75"
          label="Heure sup 75"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Heure sup 100 -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.hs100"
          label="Heure sup 100"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 annciennete  -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.ancienneteInYR"
          label="Anciènneté en année"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 brutimposable -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.brutImposableFiscal"
          label="Brut imposable Fiscal"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 brut impo social -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.brutImposableSocial"
          label="Brut Imposable Social"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.conge"
          label="Congé"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.hstotal"
          label="Heure sup Total"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.salairBase"
          label="Salaire de base"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.seniority"
          label="anciennete"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Total prime -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.sommeprime"
          label="Somme prime"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 sur sal -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.sursal"
          label="Sur salaire"
          :error="form.formErrors.grossIncomeDetails"
        />
      </VCol>

       <!-- 👉 Sur salaire -->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.grossIncomeDetails.sursalaire"
          label="Sur salaire"
          :error="form.formErrors.grossIncomeDetails"
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
