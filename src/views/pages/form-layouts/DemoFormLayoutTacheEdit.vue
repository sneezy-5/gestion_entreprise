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

userService.getList ()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          employe.push( {state:data[i].username,abbr:data[i].id});
        }   
        
        console.log(employe)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });


projetService.getProjetList ()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          projets.push( {state:data[i].name,abbr:data[i].id});
        }   
        
        console.log(projets)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });




const form = reactive({
    title: "",
    description:"",
    start_date:null,
    end_date:null,
    user: null,
    project: null,

    formErrors: {
      title: false,
      description: false,
      start_date: false,
      end_date: false,
      user:false,
      project:false
    
  },
});


tacheService.getTache(routeParam)
      .then(res => {
    form.id =res.data.id  
    form.title = res.data.title;
    form.description = res.data.description;
    form.end_date = res.data.end_date;
    form.start_date = res.data.start_date;
    form.project = res.data.project.id;
    form.user = res.data.user.username;
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

  tacheService.updateTache(form)
      .then((res: any) => {
        form.formErrors.title = false;
          form.formErrors.description = false;
          form.formErrors.start_date = false;
          form.formErrors.end_date = false;
          form.formErrors.user = false;
          form.formErrors.project = false;
        toast.value = {
        show: true,
        text: 'modifié avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['title']){

form.formErrors.title = true;
toast.value = {
show: true,
text: error.response.data['title'],
color: 'danger', 
};
}else{

form.formErrors.title = false;

} if(error.response.data['start_date']){

form.formErrors.start_date = true;
toast.value = {
show: true,
text: error.response.data['start_date'],
color: 'danger', 
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
color: 'danger', 
};
} else{

form.formErrors.end_date = false;

} if(error.response.data['user']){

form.formErrors.user = true;
toast.value = {
show: true,
text: error.response.data['user'],
color: 'danger', 
};
} 
else{

form.formErrors.user = false;
}
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" >
    <VRow>


            <!-- 👉 Employe -->
            <VCol
            cols="12"
            md="6"
          >
          <VSelect
      v-model="form.user"
      label="Employés"
      :items="employe"
      item-title="state"
        item-value="abbr"
        persistent-hint
        
        single-line
      :error="form.formErrors.user"
      
      
    />

      </VCol>
    

              <!-- 👉 projet -->
              <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.project"
  label="Projets"
  :items="projets"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.project"
  
  
/>

      </VCol>
      <!-- 👉 titre -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="text"
          v-model="form.title"
          label="Titre"
          placeholder="Titre"
          :error="form.formErrors.title"
        />
      </VCol>

      <!-- 👉 description -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextarea
        v-model="form.description"
          label="Description"
          placeholder="Description"
          :error="form.formErrors.description"></VTextarea>
      </VCol>

      <!-- 👉 debut -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.start_date"
          label="Debut"
          :error="form.formErrors.start_date"
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
