<script setup lang="ts">
import { accountService, projetService } from '@/_services';
import router from '@/router';
import AnalyticsWeeklyOverviewProjet from '@/views/dashboard/AnalyticsWeeklyOverviewProjet.vue';

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
  router.push({name: 'edit-projet', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  projetService.getProjects(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results
        desserts.pop()
        desserts.push(res.data)
        const series = [{name: 'tâche', data: [100,19,22,80,45,99,56,97,99,23,88,78,66,95] }]
   
        for( var i =0; i<data.length;i++){
          series[0].data.push(data[i])

        }
        console.log(series, data)
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
  projetService.deleteProejct(ids.value)
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


const role = accountService.getRole()
const groups = accountService.getGroups()
const groupsArray = [groups];
const formattedArray: string[] = groupsArray[0].split(",").filter(item => item !== "");

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


    <div class="flex-end"  v-if="role === 'true' || formattedArray.includes('admin')">
      <VBtn to="/create-projet">Ajouter</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Nom
        </th>
        <th class="text-uppercase text-center">
          Description
        </th>
        <th class="text-uppercase text-center">
          Progression
        </th>
        <th class="text-uppercase text-center">
          Gantt
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
          {{ item.name }}
        </td>
        <td class="text-center">
          {{ item.description }}
        </td>
        <td>
          
          <v-progress-linear v-model="item.progresion" color="success"></v-progress-linear>

        </td>
        <td class="text-center">
          <AnalyticsWeeklyOverviewProjet :model-value="item.taks"/>
        </td>
        <td class="text-center">
          <button @click="goEdit(item.id)" v-if="role === 'true' || formattedArray.includes('admin')">
            <VIcon icon="mdi-edit"></VIcon>
         
        </button>
          <button @click="openDialog(item.id)" v-if="role === 'true' || formattedArray.includes('admin')">
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
