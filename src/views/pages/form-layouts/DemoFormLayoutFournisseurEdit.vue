<script lang="ts" setup>
import { fournisseurService } from '@/_services';
import { useMainStore } from '@/stores/main';


const router = useRouter();

const routeParam = router.currentRoute.value.params.id;

const toast = ref({
  show: false,
  text: '',
  color: '',
});


const form = reactive({
    name: null,
    address: null,
    contact_person: null,
   
    formErrors: {
      name: false,
      address: false,
      contact_person:false,
   
  },
});

fournisseurService.getFournisseur(routeParam)
      .then(res => {
        form.id =res.data.id  
    form.name = res.data.name;
    form.address = res.data.address;
    form.contact_person = res.data.contact_person;
        console.log(res)
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     })

const submit = () => {
  //
  console.log(form)

  fournisseurService.updateFournisseur(form)
      .then((res: any) => {
          form.formErrors.name = false;
          form.formErrors.address = false;
          form.formErrors.contact_person = false;
       
        toast.value = {
        show: true,
        text: 'Modifié avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['name']){

form.formErrors.name = true;
toast.value = {
show: true,
text: error.response.data['name'],
color: 'red', 
};
}else{

form.formErrors.name = false;

} if(error.response.data['address']){

form.formErrors.address = true;
toast.value = {
show: true,
text: error.response.data['address'],
color: 'red', 
};
} 
else{

form.formErrors.address = false;
}if(error.response.data['contact_person']){

form.formErrors.contact_person = true;
toast.value = {
show: true,
text: error.response.data['contact_person'],
color: 'red', 
};
} 
else{

form.formErrors.contact_person = false;
}
       console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>

    
      <!-- 👉 Nom -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="text"
          v-model="form.name"
          label="Nom"
          placeholder="Nom"
          :error="form.formErrors.name"
        />
      </VCol>

      <!-- 👉 adress -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="text"
          v-model="form.address"
          label="Adresse"
          placeholder="Adresse"
          :error="form.formErrors.address"
        />
      </VCol>

 <!-- 👉 contact_person -->
 <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.contact_person"
          label="Contact personnel"
          placeholder="Contact personnel"
          :error="form.formErrors.contact_person"
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
