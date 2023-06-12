<script setup lang="ts">
import { contractService } from '@/_services';
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
  router.push({name: 'edit-contract', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  contractService.getAllContracts(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results
        // for (let i = 0; i < data.length; i++) {
        //   desserts.push(data[i]);
        // } 
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
  contractService.deleteContracts(ids.value)
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
      <VBtn to="/create-contract">Ajouter</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Employé
        </th>
        <th class="text-uppercase text-center">
          Contrat
        </th>
        <th class="text-uppercase text-center">
          Salaire de base
        </th>
        <th class="text-uppercase text-center">
          Sur salaire
        </th>
        <th class="text-uppercase text-center">
          Poste
        </th>
        <th class="text-uppercase text-center">
          Transport
        </th>
        <th class="text-uppercase text-center">
          Debut
        </th>
        <th class="text-uppercase text-center">
          Fin
        </th>
        <th class="text-uppercase text-center">
          Date de signature
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
          {{ item.employee?.firstName }}
        </td>
        <td class="text-center">
          {{ item.contract_type }}
        </td>
        <td class="text-center">
          {{ item.baseSalary }}
        </td>
        <td class="text-center">
          {{ item.extrapay }}
        </td>
        <td class="text-center">
          {{ item.position }}
        </td>
        <td class="text-center">
          {{ item.transportationAllowance }}
        </td>
        <td class="text-center">
          {{ item.startDate }}
        </td>
        <td class="text-center">
          {{ item.endDate }}
        </td>
        <td class="text-center">
          {{ item.signingDate }}
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
</style>
