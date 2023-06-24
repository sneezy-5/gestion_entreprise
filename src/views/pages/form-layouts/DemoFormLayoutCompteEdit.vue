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
    balance: null,
   
    formErrors: {
      name: false,
      balance: false,
   
  },
});

compteService.getCompte(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.name = res.data.name;
    form.balance = res.data.balance;
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


if(error.response.data['RequestDate']){

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
          :error="form.formErrors.balance"
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
          label="Balance"
          placeholder="Balance"
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
