<script lang="ts" setup>
import { compteService } from '@/_services';
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
    number:null,
    balance: null,
   
    formErrors: {
      name: false,
      balance: false,
      number:false,
   
  },
});

compteService.getCompte(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.name = res.data.name;
    form.balance = res.data.balance;
    form.number = res.data.number;

    form.formErrors.number = false;
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

  compteService.updateCompte(form)
      .then((res: any) => {
        form.formErrors.name = false;
          form.formErrors.balance = false;
       
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
};
}else{

form.formErrors.balance = false;

} if(error.response.data['balance']){

form.formErrors.balance = true;
toast.value = {
show: true,
text: error.response.data['balance'],
color: 'danger', 
};
} 
else{

form.formErrors.balance = false;
} if(error.response.data['number']){

form.formErrors.number = true;
toast.value = {
show: true,
text: error.response.data['number'],
color: 'danger', 
};
} 
else{

form.formErrors.balance = false;
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
          label="Libellé"
          placeholder="Libellé"
          :error="form.formErrors.name"
        />
      </VCol>

      <!-- 👉 numero -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.number"
          label="Numéro"
          placeholder="Numéro"
          :error="form.formErrors.number"
        />
      </VCol>

   <!-- 👉 amount -->
   <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.balance"
          label="Montant"
          placeholder="Montant"
          :error="form.formErrors.balance"
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
