<script setup lang="ts">
import { accountService, projetService, tacheService } from '@/_services';
import router from '@/router';

let ids = ref(0)
const desserts: any[] = reactive([

])
const projets = reactive([]);

const showDialog = ref(false);
const openDialog = (id:number) => {
  ids.value =id
  showDialog.value = true;
};
const closeDialog = () => {
  showDialog.value = false;
};


let goEdit = (id: number)=>{
  router.push({name: 'edit-tache', params:{id:id}})
};

let goAsigne = (id: number)=>{
  router.push({name: 'edit-taches', params:{id:id}})
};
const form = reactive({
  project:'',
  formErrors: {
    project:false
    
  },
});

projetService.getProjetList ()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          projets.push( {state:data[i].name,abbr:data[i].id});
        }   
        
        console.log(projets)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });

let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}&project=${form.project}`
  tacheService.getAllTaches(filter)
      .then((res: { data: { results: any; }; }) => {
        const data = res.data.results
        form.formErrors.project = false;
        desserts.pop()
        desserts.push(res.data)
        console.log(desserts[0].results, data)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status ="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
            if(error.response.data['message']){

          form.formErrors.project = true;

          }else{

          form.formErrors.project = false;

          } 
              
     })

}


const deleteEl = () => {
  tacheService.deleteTache(ids.value)
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
const models = 20

const downloadExcel = () => {


const url = `http://127.0.0.1:8000/api/v0/taches/download-excel/?start_date=${form.start_date}&end_date=${form.end_date}&account=${form.account}`;

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
  link.download = 'taches.xlsx';
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
        <v-btn  @click="deleteEl" style="color: red;">Confimer</v-btn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

    <div class="flex-start">

      <VBtn  to="/create-tache" style="margin-right: 10px;">Ajouter</VBtn>
      <VBtn @click="downloadExcel" color="success">
        <VIcon icon="mdi-cloud-download"></VIcon>
        <VIcon icon="mdi-microsoft-excel"></VIcon>
        </VBtn>
  </div>
    <div class="flex-end" v-if="role=='true'">
 


      <VForm @submit.prevent="getAll" >
    <VRow>
 

           <!-- 👉 Account -->
           <VCol
              cols="12"
              md="6"
            >
            <VSelect
        v-model="form.project"
        label="Projets"
        :items="projets"
        item-title="state"
          item-value="abbr"
          persistent-hint
          
          single-line
        :error="form.formErrors.project"
        
        
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
          Titre
        </th>
        <th class="text-uppercase text-center">
          Début
        </th>
        <th class="text-uppercase text-center">
         Fin
        </th>
        <th class="text-uppercase text-center">
          Projet
        </th>
        <th class="text-uppercase text-center">
          Raport
        </th>
        <th class="text-uppercase text-center">
          Progression
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
          {{ item.title }}
        </td>
        <td class="text-center">
          {{ item.start_date }}
        </td>
        <td class="text-center">
          {{ item.end_date }}
        </td>
        <td class="text-center">
          {{ item?.project?.name }}
        </td>
        <td class="text-center">
          {{ item.rapport_taks }}
        </td>
        <td class="text-center">
        <!-- <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="item.progress"
      color="success"
    >
      {{ item.progress }}
    </v-progress-circular> -->
    <v-progress-linear v-model="item.progress" color="success"></v-progress-linear>
          {{ item.progess }}
        </td>
        <td class="text-center" >
          <button 
              @click="role=='true' ? goEdit(item.id) : goAsigne(item.id)"
          >
            <VIcon icon="mdi-edit"></VIcon>
         
        </button>
          <button @click="openDialog(item.id)" v-if="role=='true'">
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
