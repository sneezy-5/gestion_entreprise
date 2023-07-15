<script setup lang="ts">
import {  accountService, transactionService } from '@/_services';
import router from '@/router';

let ids = ref(0)
const desserts: any[] = reactive([

])
const showDialog = ref(false);
const openDialog = (id:number) => {
  ids.value =id
  showDialog.value = true;
};
const closeDialog = () => {
  showDialog.value = false;
};


let goEdit = (id: number)=>{
  router.push({name: 'edit-transaction', params:{id:id}})
};


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



let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}&start_date=${form.start_date}&end_date=${form.end_date}`
  transactionService.getAllTransactions(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results
   
        desserts.pop()
        desserts.push(res.data)
        console.log(desserts[0].results, data)
    })
    .catch((error: { status: string; }) => {
         // error.response.status Check status code
            if(error.status ="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

}


const deleteEl = () => {
  transactionService.deleteTransation(ids.value)
      .then((res: { data: { results: any; }; }) => {
        getAll()
    })
    .catch((error: { status: string; }) => {
         // error.response.status Check status code
            if(error.status ="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })
   
     showDialog.value = false;

};


getAll()
const numPages = computed(() => Math.ceil(desserts[0]?.count / 5));


const downloadExcel = () => {


const url = `http://127.0.0.1:8000/api/v0/transaction/download-excel/?start_date=${form.start_date}&end_date=${form.end_date}&account=${form.account}`;

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
  link.download = 'transactions.xlsx';
  link.click();
  URL.revokeObjectURL(downloadUrl);
})
.catch(error => {
  console.error('Erreur lors du téléchargement du fichier :', error);
});
};
</script>

<template>

  <v-dialog v-model="showDialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">Confirmation de suppression</v-card-title>

      <v-card-text>
        Êtes-vous sûr de vouloir supprimer ces données ?
      </v-card-text>

      <v-card-actions>
        <v-btn  @click="deleteEl" color="warning">Confimer</v-btn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

    <div class="flex-start">
      <VBtn to="/create-transaction" style="margin-right: 10px;">Ajouter</VBtn>
      <VBtn @click="downloadExcel" color="success">
        <VIcon icon="mdi-cloud-download"></VIcon>
        <VIcon icon="mdi-microsoft-excel"></VIcon>
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
         Fltrer
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
        <th class="text-uppercase">
          Type de transaction
        </th>
        <th class="text-uppercase text-center">
          Compte
        </th>
        <th class="text-uppercase text-center">
          Categorie
        </th>
        <th class="text-uppercase text-center">
          Date de transaction
        </th>
        <th class="text-uppercase text-center">
          Description
        </th>
        <th class="text-uppercase text-center">
          Fournisseur
        </th>
        <th class="text-uppercase text-center">
          Type depense
        </th>
        <th class="text-uppercase text-center">
          Montant
        </th>
        <th class="text-uppercase text-center">
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts[0]?.results"
        :key="item.id"
      >
        <td>
          {{ item.transaction_type }}
        </td>
        <td class="text-center">
          {{ item.account.name }}
        </td>
        <td class="text-center">
          {{ item.transaction_category }}
        </td>
        <td class="text-center">
          {{ item.transaction_date }}
        </td>
        <td class="text-center">
          {{ item.description }}
        </td>
        <td class="text-center">
          {{ item?.supplier?.name }}
        </td>
        <td class="text-center">
          {{ item.depense_category }}
        </td>
        <td class="text-center">
          {{ item.amount }}
        </td>
       
      
        <td class="text-center">
          <button @click="goEdit(item.id)">
            <VIcon icon="mdi-edit"></VIcon>
         
        </button>
          <button @click="openDialog(item.id)">
          <VIcon icon="mdi-trash" style="color: red;"></VIcon>
      </button>
        </td>
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
