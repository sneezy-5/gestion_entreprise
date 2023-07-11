<script setup lang="ts">
import { categoryService } from '@/_services';
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
  router.push({name: 'edit-category', params:{id:id}})
};


let page = ref(1);
const limit = 5;
const getAll =()=>{
  const offset = (page.value - 1) * limit;
  const filter =`limit=${limit}&offset=${offset}`
  categoryService.getAllCategorie(filter)
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
  categoryService.deleteCategory(ids.value)
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
    <div class="flex-end">
      <VBtn to="/create-categorie">Ajouter</VBtn>
    </div>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
        Nom
        </th>
       
        <th class="text-uppercase text-center">
          Action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts[0]?.results"
        :key="item.dessert"
      >
        <td>
          {{ item.name }}
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
  <v-pagination v-model="page" :length="numPages" circle @click="getAll" />
</template>


<style scoped>
.flex-end{
  display: flex;
  justify-content: end;
  margin-right: 10px;
}
</style>
