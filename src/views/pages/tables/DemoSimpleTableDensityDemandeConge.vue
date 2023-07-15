<script setup lang="ts">
import {  accountService, demandeCongeService } from '@/_services';
import router from '@/router';

const GENERAL_NOTIFICATION_INTERVAL =10000
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




let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  demandeCongeService.getAllDeamndeConges(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results
   
        desserts.pop()
        desserts.push(res.data)
        console.log(desserts[0].results, data)
    })
    .catch((error: { status: string; }) => {
         // error.response.status Check status code
            if(error.status =="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

}


const deleteEl = () => {
  demandeCongeService.deleteDemandeConge(ids.value)
      .then((res: { data: { results: any; }; }) => {
        getAll()
    })
    .catch((error: { status: string; }) => {
         // error.response.status Check status code
            if(error.status =="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })
   
     showDialog.value = false;

};


getAll()
// refresh all demande congé
setInterval(getAll, GENERAL_NOTIFICATION_INTERVAL)

//accepte permission
const accept = (ids) => {
  demandeCongeService.updateDemandeConge({status:"Accorder"},ids)
      .then(res => {
        console.log(res)
        getAll()
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });

 

};

//decline demande permission 
const decline = (ids) => {
  demandeCongeService.updateDemandeConge({status:"Refuser"},ids)
      .then(res => {
        console.log(res)
        getAll()
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });

 

};

const numPages = computed(() => Math.ceil(desserts[0]?.count / 5));


const role = accountService.getRole()
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


    <div class="flex-end" v-if="role=='false'">
      <VBtn to="/create-demande-permission">Faire une demande</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Employe
        </th>
        <th class="text-uppercase">
          Motif
        </th>
        <th class="text-uppercase text-center">
          Debut
        </th>
        <th class="text-uppercase text-center">
          Fin
        </th>
        <th class="text-uppercase text-center">
          Status
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
          {{ item?.employee.firstName }}   {{ item?.employee?.lastName }}
        </td>
        <td class="text-center">
          {{ item.motif_demande }}
        </td>
        <td class="text-center">
          {{ item.start_date }}
        </td>
        <td class="text-center">
          {{ item.end_date }}
        </td>
        <td  >
          {{ item.status  }}
        </td>
       
        <td class="text-center">
          <button @click="accept(item.id)"
          v-if="item.status!=='Accorder' && item.status!=='Refuser' && role=='true'"
          style="color: rgb(9, 179, 37); margin: 10px;">
            <!-- <VIcon icon="mdi-edit"></VIcon> -->
         Accepter
        </button>
        <button @click="decline(item.id)"
          v-if="item.status!=='Accorder' && item.status!=='Refuser' && role=='true'"
          style="color: red;">
            <!-- <VIcon icon="mdi-edit"></VIcon> -->
         Refuser
        </button>
          <button    v-if="item.status!=='Accorder' && item.status!=='Refuser'&& role=='false'" @click="openDialog(item.id)">
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
