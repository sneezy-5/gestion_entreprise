<script lang="ts" setup>
import { categoryService, productService } from '@/_services';

const categories = reactive([]);

const toast = ref({
  show: false,
  text: '',
  color: '',
});


categoryService.getLst()
      .then(res => {
        console.log(res.data.data)
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          categories.push({state:data[i].name,abbr:data[i].id});
        }   
     
        console.log(categories)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });


const form = reactive({
    name: null,
    category: null,
    price: null,
    quantity: null,
    stock_alert: null,

    formErrors: {
      name: false,
      category: false,
      price: false,
      quantity: false,
      stock_alert: false,
   
    // ...
  },
});

const checkbox = ref(false)

const submit = () => {
  //
  console.log(form)

  productService.createProduct(form)
      .then((res: any) => {
        form.formErrors.name = false;
          form.formErrors.category = false;
          form.formErrors.price = false;
          form.formErrors.quantity = false;
          form.formErrors.stock_alert = false;
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
      }
      }else{
        form.formErrors.name = false;
      } if(error.response.data['price']){

      form.formErrors.price = true;
      toast.value = {
        show: true,
        text: error.response.data['price'],
        color: 'danger', 
      };
      }else{
        form.formErrors.price = false
      }if(error.response.data['quantity']){

      form.formErrors.quantity = true;
      toast.value = {
        show: true,
        text: error.response.data['quantity'],
        color: 'danger', 
      };
      }else{
        form.formErrors.quantity = false;
      }if(error.response.data['stock_alert']){

      form.formErrors.stock_alert = true;
      toast.value = {
        show: true,
        text: error.response.data['stock_alert'],
        color: 'danger', 
      };
      }else{
        form.formErrors.stock_alert = false;
      }
    

         console.log(error)
        
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
          label="Nom de prduit"
          placeholder="Nom de produit"
          :error="form.formErrors.name"
        />
      </VCol>

        <!-- 👉 First Name -->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.category"
  label="Catégorie"
  :items="categories"
  item-title="state"
  item-value="abbr"
  persistent-hint
  single-line
  :error="form.formErrors.category"
/>



      </VCol>

      <!-- 👉 Rue -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.price"
          type="number"
          label="Prix"
          placeholder="Prix"
          :error="form.formErrors.price"
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
          v-model="form.stock_alert"
          type="number"
          label="Stock alert"
          placeholder="Stock alert"
          :error="form.formErrors.stock_alert"
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
