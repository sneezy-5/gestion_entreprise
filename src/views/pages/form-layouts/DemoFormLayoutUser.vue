<script lang="ts" setup>
import {  userService, employeesService } from '@/_services';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);

employeesService.getList ()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          employe.push( {state:data[i].firstName,abbr:data[i].id});
        }   
        
        console.log(employe,data)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });




const form = reactive({
    username: "",
    email:"",
    password:null,
    role:null,
    employee: null,

    formErrors: {
      username: false,
      email: false,
      password: false,
      role: false,
      employee:false,
    
  },
});


const submit = () => {
  //
  console.log(form)

  userService.createUser(form)
      .then((res: any) => {
          form.formErrors.username = false;
          form.formErrors.email = false;
          form.formErrors.employee = false;
          form.formErrors.password = false;
          form.formErrors.role = false;
        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'green',
      };
    })
    .catch((error) => {


if(error.response.data.data['username']){

form.formErrors.username = true;
toast.value = {
show: true,
text: error.response.data.data['username'],
color: 'red', 
};
}else{

form.formErrors.username = false;

} if(error.response.data.data['email']){

form.formErrors.email = true;
toast.value = {
show: true,
text: error.response.data.data['email'],
color: 'red', 
};
} 
else{

form.formErrors.email = false;
}
 if(error.response.data.data['employee']){

form.formErrors.employee = true;
toast.value = {
show: true,
text: error.response.data.data['employee'],
color: 'red', 
};
} else{

form.formErrors.employee = false;

} if(error.response.data.data['password']){

form.formErrors.password = true;
toast.value = {
show: true,
text: error.response.data.data['password'],
color: 'red', 
};
} 
else{

form.formErrors.password = false;
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
    

      <!-- 👉 username -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="text"
          v-model="form.username"
          label="Nom Utilisateur"
          placeholder="Nom Utilisateur"
          :error="form.formErrors.username"
        />
      </VCol>

      <!-- 👉 email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="text"
          v-model="form.email"
          label="Email"
          placeholder="Email"
          :error="form.formErrors.email"
        />
      </VCol>

      <!-- 👉 password -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="text"
          v-model="form.password"
          label="Mot de passe"
          placeholder="Mot de passe"
          :error="form.formErrors.password"
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
