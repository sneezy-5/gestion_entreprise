<script lang="ts" setup>
import {  productService, purshaseService, supplierService } from '@/_services';
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


     //get all supplier
     supplierService.getAllSupliers()
      .then(res => {
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          fournisseurs.push( {state:data[i].name,abbr:data[i].id});
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
  supplier: null,
  quantity: null,
  purchase_date: null,
  purchase_price:null,

    formErrors: {
      product: false,
      supplier: false,
      quantity: false,
      purchase_date: false,
      purchase_price:false
   
  },
});


const submit = () => {
  //
  console.log(form)

  purshaseService.createPursharse(form)
      .then((res: any) => {
        form.formErrors.product = false;
          form.formErrors.supplier = false;
          form.formErrors.quantity = false;
          form.formErrors.purchase_date = false;
          form.formErrors.purchase_price = false;
          toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'success',
      };
        //sucess.value ="Create successfuly"

    })
    .catch((error) => {

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
      }else{
        form.formErrors.quantity = false;
      }if(error.response.data['purchase_date']){

      form.formErrors.purchase_date = true;
      toast.value = {
        show: true,
        text: error.response.data['purchase_date'],
        color: 'danger', 
      };
      }else{
        form.formErrors.purchase_date = false;
      } if(error.response.data['purchase_price']){

      form.formErrors.purchase_price = true;
      toast.value = {
        show: true,
        text: error.response.data['purchase_price'],
        color: 'danger', 
      };
      }else{
        form.formErrors.purchase_price = false;
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

<!-- <v-select
    v-model="form.product"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line>
  </v-select> -->
      </VCol>

             <!-- 👉 Fournisseur -->
             <VCol
        cols="12"
        md="6"
      >
<VSelect
  v-model="form.supplier"
  label="Fournisseurs"
  :items="fournisseurs"
  item-title="state"
    item-value="abbr"
    persistent-hint

    single-line
  :error="form.formErrors.product"
  
  
/>
</VCol>
      <!-- 👉 Prix -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.purchase_price"
          type="number"
          label="Prix"
          placeholder="Prix"
          :error="form.formErrors.purchase_price"
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
          v-model="form.purchase_date"
          type="date"
          label="Date d'approvisionnent"
          placeholder="Date d'approvisionnent"
          :error="form.formErrors.purchase_date"
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
