<script lang="ts" setup>
import { projetService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});


const form = reactive({
  name: null,
    description: null,
   

    formErrors: {
      name: false,
      description: false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  projetService.createProeject(form)
      .then((res: any) => {
        form.formErrors.name = false;
          form.formErrors.description = false;
         
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
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
};
}else{

form.formErrors.name = false;

} if(error.response.data['description']){

form.formErrors.description = true;
toast.value = {
show: true,
text: error.response.data['description'],
color: 'danger', 
};
} 
else{

form.formErrors.description = false;
}
 
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" >
    <VRow>



    
      <!-- 👉 title-->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="text"
          v-model="form.name"
          label="Titre"
          placeholder="Description"
          :error="form.formErrors.name"
        />
      </VCol>

      <!-- 👉 description-->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="text"
          v-model="form.description"
          label="Description"
          placeholder="Description"
          :error="form.formErrors.description"
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
          Enregistré
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
