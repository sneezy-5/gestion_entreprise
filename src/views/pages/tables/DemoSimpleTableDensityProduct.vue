<script setup lang="ts">
import { productService } from '@/_services';
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
  router.push({name: 'edit-product', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  productService.getAllProducts(filter)
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
  productService.deleteProduct(ids.value)
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
        <VBtn @click="deleteEl" color="warning">Confimer</VBtn>
        <v-btn  @click="closeDialog">Annuler</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>


    <div class="flex-end">
      <VBtn to="/create-product">Ajouter</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Nom
        </th>
        <th class="text-uppercase text-center">
          Prix
        </th>
        <th class="text-uppercase text-center">
          Quantité
        </th>
        <th class="text-uppercase text-center">
          Stock alert
        </th>
        <th class="text-uppercase text-center">
          Catégorie
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
          {{ item.price }}
        </td>
        <td class="text-center" :class="{ 'text-red': item.quantity <= item.stock_alert }">
          {{ item.quantity }} 
        </td>

        <td class="text-center">
          {{ item.stock_alert }}
        </td>
        <td class="text-center">
          {{ item?.category?.name }}
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

    <v-pagination v-model="page" :length="numPages" circle @click="getAll" />
  </div>
</template>


<style scoped>
/* stylelint-disable-next-line block-opening-brace-space-before */
.flex-end{
  display: flex;
  justify-content: end;
  margin-right: 10px;
}


.text-red {
  animation: blink 1s infinite;
}

@keyframes blink {
  0% {
    color: red;
  }

  50% {
    color: transparent;
  }

  100% {
    color: red;
  }
}



</style>
