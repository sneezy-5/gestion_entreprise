<script lang="ts" setup>
import { categoryService, productService } from '@/_services';


const router = useRouter();
const routeParam = router.currentRoute.value.params.id;

const toast = ref({
  show: false,
  text: '',
  color: '',
});





const form = reactive({
    name: "",
   
    formErrors: {
      name: false,
    
   
    // ...
  },
});


categoryService.getCategory(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.name = res.data.name;
   
        console.log(res)
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });


const submit = () => {
  //
  console.log(form)

  categoryService.updateCategory(form)
      .then((res: any) => {
        form.formErrors.name = false;
        
        toast.value = {
        show: true,
        text: 'Modifié avec succès',
        color: 'success',
      };

    })
    .catch((error) => {

      if(error.response.data['name']){

form.formErrors.name = true;
toast.value = {
show: true,
text: error.response.data['name'],
color: 'danger', 
}
}else{
form.formErrors.name = false;
} 

     });
};

</script>

<template>
  <VForm @submit.prevent="submit">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.name"
          label="Nom de catégorie"
          placeholder="Nom de catégorie"
          :error="form.formErrors.name"
        />
      </VCol>

       
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


      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Enregistrer
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
</template>
