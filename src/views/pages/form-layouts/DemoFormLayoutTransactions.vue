<script lang="ts" setup>
import { compteService, transactionService, fournisseurService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});

const comptes = reactive([]);


compteService.getAllComptes()
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

     const fournisseurs = reactive([]);


fournisseurService.getAllFournisseurs()
      .then(res => {
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          fournisseurs.push( {state:data[i].firstName,abbr:data[i].id});
        }   
        
        console.log(fournisseurs)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });

const form = reactive({
  transaction_type: null,
  account: null,
  transaction_category: null,
  transaction_date:null,
  description:null,
  supplier:null,
  amount:null,

    formErrors: {
      transaction_type: false,
      account: false,
      transaction_category: false,
      transaction_date: false,
      description: false,
      supplier: false,
      amount: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  transactionService.createTransation(form)
      .then((res: any) => {
        form.formErrors.transaction_type = false;
          form.formErrors.account = false;
          form.formErrors.transaction_category = false;
          form.formErrors.transaction_date = false;
          form.formErrors.description = false;
          form.formErrors.amount = false;
          form.formErrors.supplier = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['transaction_type']){

form.formErrors.transaction_type = true;
toast.value = {
show: true,
text: error.response.data['transaction_type'],
color: 'red', 
};
}else{

form.formErrors.transaction_type = false;

} if(error.response.data['account']){

form.formErrors.account = true;
toast.value = {
show: true,
text: error.response.data['account'],
color: 'red', 
};
} 
else{

form.formErrors.account = false;
}
 if(error.response.data['transaction_category']){

form.formErrors.transaction_category = true;
toast.value = {
show: true,
text: error.response.data['transaction_category'],
color: 'red', 
};
} else{

form.formErrors.transaction_category = false;

} if(error.response.data['transaction_date']){

form.formErrors.transaction_date = true;
toast.value = {
show: true,
text: error.response.data['transaction_date'],
color: 'red', 
};
} else{

form.formErrors.transaction_date = false;

}if(error.response.data['description']){

form.formErrors.description = false;

} else{

form.formErrors.description = false;

} if(error.response.data['amount']){

form.formErrors.amount = true;
toast.value = {
show: true,
text: error.response.data['amount'],
color: 'red', 
};
} else{

form.formErrors.amount = false;

} if(error.response.data['supplier']){

form.formErrors.supplier = true;
toast.value = {
show: true,
text: error.response.data['supplier'],
color: 'red', 
};
} else{

form.formErrors.supplier = false;

} 
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


      
    
      <!-- 👉 transaction_type -->
      <VCol
        cols="12"
        md="6"
      >
      <VSelect
                  v-model="form.transaction_type"
                  label="Civilité"
                  :items="['Achat', 'Transfert','Décaissements','Vente']"
                  :error="form.formErrors.civility"
                />
  
      </VCol>

      <!-- 👉 amount request-->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="date"
          v-model="form.transaction_date"
          label="Date de la transaction"
          placeholder="MDate de la transaction"
          :error="form.formErrors.transaction_date"
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

      <!-- 👉 account -->
            
              <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.account"
  label="Comptes"
  :items="comptes"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.account"
  
  
/>

            <!-- 👉 fournisseur -->
            <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.supplier"
  label="Fournisseur"
  :items="fournisseurs"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.supplier"
  
  
/>

     
        
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
