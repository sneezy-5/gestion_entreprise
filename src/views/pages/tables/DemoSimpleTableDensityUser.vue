<script setup lang="ts">
import {  userService } from '@/_services';
import router from '@/router';

let ids = ref(0)
const desserts: any[] = reactive([

])


const toast = ref({
  show: false,
  text: '',
  color: '',
});
const showDialog = ref(false);
const showDialogEditPass = ref(false);
const openDialog = (id:number) => {
  ids.value =id
  showDialog.value = true;
};

const openDialogEdtpass = (id:number) => {
  ids.value =id
  showDialogEditPass.value = true;
};
const closeDialog = () => {
  showDialog.value = false;
};


let goEdit = (id: number)=>{
  router.push({name: 'edit-user', params:{id:id}})
};

let page = ref(1);
const limit = 5;
const getAll =()=>{
  console.log(page)
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  userService.getAllUsers(filter)
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
  userService.deleteUser(ids.value)
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
const form = reactive({
  newpassword:"",

  formErrors: {
    newpassword: false,
     
    
  },
});

const editpass = () => {
  console.log(ids)
  userService.changePasswordUser(form,ids.value)
      .then(res => {
        console.log(res)
    
        toast.value = {
        show: true,
        text: 'Modifié avec succès',
        color: 'green',
      };
    })
    .catch((error) => {
         if (error.response.status == 400) {
            console.error(error)
         }
         if(error.response.data['newpassword']){

form.formErrors.newpassword = true;
toast.value = {
show: true,
text: error.response.data['newpassword'],
color: 'red', 
};
}else{

form.formErrors.newpassword = false;

}
     });
   
     showDialogEditPass.value = false;

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
        <v-btn  @click="deleteEl" color="danger">Confimer</v-btn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showDialogEditPass" max-width="500px">
    <v-card>
      <v-card-title class="headline">Changer mot de passe</v-card-title>
      <div style="min-width: 700px; margin-left:  18px;" >
        <!-- 👉 password -->
        <VForm @submit.prevent="editpass">
                      <VRow>
              <VCol
                cols="12"
                md="6"
              >
              <VTextField
                  type="text"
                  v-model="form.newpassword"
                  label="Nouveau Mot de passe"
                  placeholder="Nouveau Mot de passe"
                  :error="form.formErrors.newpassword"
                />
              </VCol>

     
            </VRow>
            <v-card-actions>
        <v-btn  type="submit" color="danger">Confimer</v-btn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
          </VForm>
      </div>
            


    </v-card>
  </v-dialog>


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


    <div class="flex-end">
      <VBtn to="/create-user">Ajouter</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Employe
        </th>
        <th class="text-uppercase text-center">
          Username
        </th>
        <th class="text-uppercase text-center">
          Email
        </th>
        <th class="text-uppercase text-center">
          Dernière connexion
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
          {{ item?.employee?.firstName }}   {{ item?.employee?.lastName }}
        </td>
        <td class="text-center">
          {{ item.username }}
        </td>
        <td class="text-center">
          {{ item.email }}
        </td>
        <td class="text-center">
          {{ item.last_login }}
        </td>
       
       
        <td class="text-center">
          <button @click="goEdit(item.id)">
            <VIcon icon="mdi-edit"></VIcon>

        </button>
        <button @click="openDialogEdtpass(item.id)">
          <VIcon icon="mdi-key-outline"></VIcon>
        </button>
        <button @click="openDialog(item.id)" >
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
