<script lang="ts" setup>
import {  supplierService } from '@/_services';
import router from '@/router';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});

const form = reactive({
    name: "",
    address: "",
    phone: "",

    formErrors: {
      name: false,
     address: false,
     phone: false,
   
  },
});

const routeParam = router.currentRoute.value.params.id;


supplierService.getSuplier(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.name = res.data.name;
    form.address = res.data.address;
    form.phone = res.data.phone;
   
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

  supplierService.createSuplier(form)
      .then((res: any) => {
        form.formErrors.name = false;
          form.formErrors.address = false;
          form.formErrors.phone = false;
        
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
      }  if(error.response.data['phone']){

      form.formErrors.phone = true;
      toast.value = {
        show: true,
        text: error.response.data['phone'],
        color: 'danger', 
      };
      }if(error.response.data['address']){

      form.formErrors.address = true;
      toast.value = {
        show: true,
        text: error.response.data['address'],
        color: 'danger', 
      };
      }
   
         
         console.log(errors)
        
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
          label="Nom de fournisseur"
          placeholder="Non du fournisseur"
          :error="form.formErrors.name"
        />
      </VCol>



      <!-- 👉 Rue -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.address"
          type="text"
          label="Adresse"
          placeholder="Adresse"
          :error="form.formErrors.address"
        />
      </VCol>

      <!-- 👉 quantity -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.phone"
          type="number"
          label="Phone"
          placeholder="Phone"
          :error="form.formErrors.phone"
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
