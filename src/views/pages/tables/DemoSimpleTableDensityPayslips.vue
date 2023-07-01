<script setup lang="ts">
import {  payslipsService } from '@/_services';
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
  router.push({name: 'edit-payslip', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  payslipsService.getAllPayslips(filter)
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
  payslipsService.deletePayslips(ids.value)
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

const openBulletin = (id) => {
      const url = `Formulaire de paie/formulairePAIE2.html?id=${id}`;
      window.open(url);
    }

getAll()
const numPages = computed(() => Math.ceil(desserts[0]?.count / 5));



</script>

<template>

  <v-dialog v-model="showDialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">Confirmation de suppression</v-card-title>

      <v-card-text>
        Êtes-vous sûr de vouloir supprimer ces données ?
      </v-card-text>

      <v-card-actions>
        <v-btn  @click="deleteEl" style="color: red;">Confimer</v-btn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


    <div class="flex-end">
      <VBtn to="/create-payslip" style="margin-right: 10px;">Ajouter</VBtn>
      <VBtn to="/payslip-generate">Générer</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Date d'émisstion
        </th>
        <th class="text-uppercase">
          Employe
        </th>
        <th class="text-uppercase text-center">
          Net a payer
        </th>
       
        <th class="text-uppercase text-center">
          Methode de payement
        </th>
        <th class="text-uppercase text-center">
          Date de payement
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
          {{ item.issuanceDate }}
        </td>
        <td>
          {{ item.employee?.firstName }}
        </td>
        <td class="text-center">
          {{ item.netToPay }}
        </td>
        <td class="text-center">
          {{ item.paymentMethod }}
        </td>
        <td class="text-center">
          {{ item.paymentDate }}
        </td>
       
       
        <td class="text-center">
          <button @click="openBulletin(item.id)">
            <VIcon icon="mdi-eye"></VIcon>
         
        </button>
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
</style>
