<script lang="ts" setup>
import {  userService, tacheService, projetService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);
const projets = reactive([]);

const router = useRouter();
const routeParam = router.currentRoute.value.params.id;




const form = reactive({
    title: "",
    description:"",
    start_date:null,
    end_date:null,
    user: null,
    project: null,
    rapport_task:null,

    formErrors: {
      title: false,
      description: false,
      start_date: false,
      end_date: false,
      user:false,
      project:false,
      rapport_task:false
    
  },
});


tacheService.getTache(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.title = res.data.title;
    form.description = res.data.description;
    form.end_date = res.data.start_date;
    form.start_date = res.data.end_date;
    form.project = res.data.projet.id;
    form.user = res.data.user.name;
    form.rapport_task = res.data.rapport_task
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });


const submit = () => {
  //
  console.log(form)

  tacheService.createtache(form)
      .then((res: any) => {
        form.formErrors.title = false;
          form.formErrors.description = false;
          form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          form.formErrors.user = false;
          form.formErrors.project = false;
          form.formErrors.rapport_task = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data['title']){

form.formErrors.title = true;
toast.value = {
show: true,
text: error.response.data['title'],
color: 'red', 
};
}else{

form.formErrors.title = false;

} if(error.response.data['start_date']){

form.formErrors.start_date = true;
toast.value = {
show: true,
text: error.response.data['start_date'],
color: 'red', 
};
} 
else{

form.formErrors.start_date = false;
}
 if(error.response.data['end_date']){

form.formErrors.end_date = true;
toast.value = {
show: true,
text: error.response.data['end_date'],
color: 'red', 
};
} else{

form.formErrors.end_date = false;

} if(error.response.data['user']){

form.formErrors.user = true;
toast.value = {
show: true,
text: error.response.data['user'],
color: 'red', 
};
} 
else{

form.formErrors.user = false;
}if(error.response.data['rapport_task']){

form.formErrors.rapport_task = true;
toast.value = {
show: true,
text: error.response.data['rapport_task'],
color: 'red', 
};
} 
else{

form.formErrors.rapport_task = false;
}
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" >
    <VRow>



      <!-- 👉 description -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="text"
          v-model="form.rapport_task"
          label="Description"
          placeholder="Description"
          :error="form.formErrors.rapport_task"
        />
      </VCol>

     

         <!-- 👉 fin -->
         <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin"
          placeholder="Fin"
          :error="form.formErrors.end_date"
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
