<script lang="ts" setup>
import { employeesService, congeService } from '@/_services';
import { useMainStore } from '@/stores/main';

const router = useRouter();

const routeParam = router.currentRoute.value.params.id;

const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);


employeesService.getAllEmployees()
      .then(res => {
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          employe.push( {state:data[i].firstName,abbr:data[i].id});
        }   
        
        console.log(employe)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });

const form = reactive({
    montant: null,
    cumulativeDay: null,
    tekanDay: null,
    employee:null,

    formErrors: {
      montant: false,
      cumulativeDay: false,
      tekanDay: false,
      employee: false,
    
  },
});


congeService.getConge(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.montant = res.data.montant;
    form.cumulativeDay = res.data.cumulativeDay;
    form.tekanDay = res.data.tekanDay;
    form.employee = res.data.employee.id;
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

  congeService.updateConge(form)
      .then((res: any) => {
        form.formErrors.montant = false;
          form.formErrors.cumulativeDay = false;
          form.formErrors.tekanDay = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Modifé avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['RequestDate']){

form.formErrors.montant = true;
toast.value = {
show: true,
text: error.response.data['montant'],
color: 'red', 
};
}else{

form.formErrors.montant = false;

} if(error.response.data['amount']){

form.formErrors.cumulativeDay = true;
toast.value = {
show: true,
text: error.response.data['cumulativeDay'],
color: 'red', 
};
} 
else{

form.formErrors.cumulativeDay = false;
}
 if(error.response.data['tekanDay']){

form.formErrors.tekanDay = true;
toast.value = {
show: true,
text: error.response.data['tekanDay'],
color: 'red', 
};
} else{

form.formErrors.tekanDay = false;

} 
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


        <!-- 👉 Employe -->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.employee"
  label="Employés"
  :items="employe"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.employee"
  
  
/>

      </VCol>
    
      <!-- 👉 titre -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="number"
          v-model="form.montant"
          label="Montant"
          placeholder="Montant"
          :error="form.formErrors.montant"
        />
      </VCol>

      <!-- 👉 amount -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.cumulativeDay"
          label="Jour cumulé"
          placeholder="Jour cumulé"
          :error="form.formErrors.cumulativeDay"
        />
      </VCol>

      <!-- 👉 code -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.tekanDay"
          label="Jour pris"
          placeholder="Jour pris"
          :error="form.formErrors.tekanDay"
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
