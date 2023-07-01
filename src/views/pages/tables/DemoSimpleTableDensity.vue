<script setup lang="ts">
import { accountService, employeesService } from '@/_services';
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
  router.push({name: 'edit-employe', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  employeesService.getAllEmployees(filter)
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
  employeesService.deleteEmploye(ids.value)
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


const url = `http://127.0.0.1:8000/api/v0/employes/download-excel/`;

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
  link.download = 'employee.xlsx';
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


    <div class="flex-end">
      <VBtn to="/create-employee" style="margin-right: 10px;">Ajouter</VBtn>

<!-- <VBtn @click="downloadExcel" color="success">Importer model à remplir
  <VIcon icon="mdi-cloud-download"></VIcon>
  <VIcon icon="mdi-microsoft-excel"></VIcon>
  </VBtn> -->
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
         Matricule
        </th> 
        <th class="text-uppercase">
         Nom
        </th> 
        <th class="text-uppercase text-center">
          Prénom
        </th>
        <th class="text-uppercase text-center">
          Civilité
        </th>
        <th class="text-uppercase text-center">
          Poste
        </th>
        <th class="text-uppercase">
         Date de naissance
        </th> 
        <th class="text-uppercase">
         Lieu de naissance
        </th> 
        <th class="text-uppercase">
         Nationnalité
        </th> 
        <th class="text-uppercase">
         Phone
        </th> 
        <th class="text-uppercase">
         CMU
        </th>
        <th class="text-uppercase">
         CNPS
        </th>  
        <th class="text-uppercase">
         Rue
        </th>
        <th>
          Quartier
        </th> 
        <th>
          ville
        </th> 
        <th>
          Pays
        </th> 
        <th class="text-uppercase">
         Stutus Matrimonial
        </th> 
        <th class="text-uppercase">
         Nombre de part
        </th> 
        <th class="text-uppercase">
         Nombre de charge
        </th>
        <th class="text-uppercase">
         Ancièneté
        </th> 
        <th class="text-uppercase">
         Date d'embauche
        </th> 
        <th class="text-uppercase">
         Départ
        </th> 
        <th class="text-uppercase">
         Email
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
          {{ item.matricule }}
        </td>
        <td>
          {{ item.firstName }}
        </td>
        <td class="text-center">
          {{ item.lastName }}
        </td>
        <td class="text-center">
          {{ item.civility }}
        </td>
        <td class="text-center">
          {{ item.currentPosition }}
        </td>
        <td>
          {{ item.birthdate }}
        </td>
        <td>
          {{ item.birthplace }}
        </td>
        <td>
          {{ item.nationality}}
        </td>
        <td>
          {{ item.phonenumbers }}
        </td>
        <td>
          {{ item.CMUnumber }}
        </td>
        <td>
          {{ item.CNPSnumber }}
        </td>
        <td>
          {{ item.street }}
        </td>
        <td>
          {{ item.neighborhood }}
        </td>
        <td>
          {{ item.city }}
        </td>
        <td>
          {{ item.country }}
        </td>
        <td>
          {{ item.maritalStatus }}
        </td>
        <td>
          {{ item.NbrOfParts }}
        </td>
        <td>
          {{ item.numberOfDependents }}
        </td>
        <td>
          {{ item.seniority }}
        </td>
        <td>
          {{ item.hiringDate }}
        </td>
        <td>
          {{ item.exitDate }}
        </td>
        <td>
          {{ item.email }}
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
