<script lang="ts" setup>
import {  productService, purshaseService, saleService, supplierService } from '@/_services';
import { useMainStore } from '@/stores/main';
const produits:any[] = reactive([]);
const fournisseurs:any[] = reactive([]);
const toast = ref({
  show: false,
  text: '',
  color: '',
});


productService.getList()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          produits.push( {state:data[i].name,abbr:data[i].id});
        }   
        
        console.log(produits)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });


     

const form = reactive({
  product: null,
  quantity: null,
  sale_date: null,

    formErrors: {
      product: false,
      quantity: false,
      sale_date: false,
   
  },
});


const submit = () => {
  //
  console.log(form)

  saleService.createSale(form)
      .then((res: any) => {
        console.log(res)
        form.formErrors.product = false;
          form.formErrors.quantity = false;
          form.formErrors.sale_date = false;
          toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'success',
      };
        //sucess.value ="Create successfuly"

    })
    .catch((error) => {
      if(error.response.data['message']){

      form.formErrors.quantity = true;
      toast.value = {
      show: true,
      text: error.response.data['message'],
      color: 'danger', 
    }
      } 
      if(error.response.data['product']){

        form.formErrors.product = true;
        toast.value = {
        show: true,
        text: error.response.data['product'],
        color: 'danger', 
      };
      } else{
        form.formErrors.product = false;
      } if(error.response.data['quantity']){

      form.formErrors.quantity = true;
      toast.value = {
        show: true,
        text: error.response.data['quantity'],
        color: 'danger', 
      };
      } else{
        form.formErrors.quantity = false;
      }if(error.response.data['sale_date']){

      form.formErrors.sale_date = true;
      toast.value = {
        show: true,
        text: error.response.data['sale_date'],
        color: 'danger', 
      };
      }else{
        form.formErrors.sale_date = false;
      }
         
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit">
    <VRow>

        <!-- 👉 Produit -->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.product"
  label="Produits"
  :items="produits"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.product"
  
  
/>

      </VCol>

           
     
      <!-- 👉 quantity -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.quantity"
          type="number"
          label="Quantité"
          placeholder="Quantité"
          :error="form.formErrors.quantity"
        />
      </VCol>

      <!-- 👉 initial_stock -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.sale_date"
          type="date"
          label="Date de vente"
          :error="form.formErrors.sale_date"
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
