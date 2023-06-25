<script setup lang="ts">
import {  accountService, balanceService } from '@/_services';
import router from '@/router';


const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10),
  account:null,
  formErrors: {
    start_date: false,
    end_date: false,
    account:false
    
  },
});







let ids = ref(0)
const desserts: any[] = reactive([

])



let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&page=${page.value}&start_date=${form.start_date}&end_date=${form.end_date}&account=${form.account}`
  balanceService.getBalanceByfiter(filter)
      .then((res: { data: { data: any; }; }) => {
        const data = res.data
        form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          form.formErrors.account = false;
        desserts.pop()
        desserts.push(res.data)
        console.log(desserts, data)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =401){
                    //console.error(error.response.data.message);
                   
    if(error.response.data['message']){

form.formErrors.account = true;

}else{

form.formErrors.account = false;

} 
         
            }
     
     })

}

const openBalance = () => {
      const url = `/src/assets/balance.html?start_date=${form.start_date}&end_date=${form.end_date}`;
      window.open(url);
    }



getAll()
const numPages = computed(() => Math.ceil(desserts[0]?.count / 5));

const downloadExcel = () => {


  const url = `http://127.0.0.1:8000/api/v0/balanc/download-excel/?start_date=${form.start_date}&end_date=${form.end_date}&account=${form.account}`;

  fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+accountService.getToken(), 
      'database': accountService.getDatabase(),
    },
  })
  .then(response => response.blob())
  .then(blob => {
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'balance.xlsx';
    link.click();
    URL.revokeObjectURL(downloadUrl);
  })
  .catch(error => {
    console.error('Erreur lors du téléchargement du fichier :', error);
  });
};



</script>

<template>

<div class="flex-start">
     
     <VBtn @click="openBalance()" color="success">Imprimer
       <VIcon icon="mdi-cloud-download"></VIcon>
       <VIcon icon="mdi-pdf"></VIcon>
       </VBtn>
</div>



    <div class="flex-end">
     
      
      <VForm @submit.prevent="getAll" >
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
          :error="form.formErrors.start_date"
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
          :error="form.formErrors.end_date"
        />
      </VCol>


  
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Filtrer
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
    </div>
  <VTable density="compact">
    <thead>
      <tr>


        
        <th class="text-uppercase text-center">
          Compte
        </th>
        <th class="text-uppercase text-center">
          Debit
        </th>
           <th class="text-uppercase text-center">
          Crédit
        </th>
          <th class="text-uppercase text-center">
          solde
        </th>
        <!-- <th class="text-uppercase text-center">
          Action
        </th> -->
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts[0]?.data"
        :key="item.id"
      >

        <td class="text-center">
          {{ item.account }}
        </td>
        <td class="text-center">
          {{ item.debits }}
        </td>
          <td class="text-center">
          {{ item.credits }}
        </td>
         <td class="text-center">
          {{ item.balance }}
        </td>
        <!-- <td class="text-center">
          <button @click="openBalance()">
            <VIcon icon="mdi-eye"></VIcon>
         
          </button>
        </td> -->

      </tr>
    </tbody>
  </VTable>

      <div class="text-xs-center">

    <v-pagination v-model="page" :length="numPages" circle  @click="getAll" />
  </div>
</template>


<style scoped>
/* stylelint-disable-next-line block-opening-brace-space-before */
.flex-end{
  display: flex;
  justify-content: end;
  margin-right: 10px;
}

.flex-start{
  display: flex;
  justify-content: start;
  margin-left: 30px;
}
</style>
