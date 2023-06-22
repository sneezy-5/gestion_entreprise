<script lang="ts" setup>
import { employeesService } from '@/_services';
import { useMainStore } from '@/stores/main';
import avatar1 from '@images/avatars/avatar-1.png';
const toast = ref({
  show: false,
  text: '',
  color: '',
});
const form = reactive({
    matricule: "",
    civility: "Femme",
    firstName: "",
    lastName: "",
    birthdate: null,
    birthplace: "",
    nationality: "",
    pictureURL: '',
    CNPSnumber: "",
    CMUnumber: "",
    street: "",
    neighborhood: "",
    city: "",
    country: "",
    maritalStatus: "Marié",
    numberOfDependents: null,
    NbrOfParts: "",
    hiringDate: null,
    seniority: null,
    currentPosition: "",
    exitDate: null,
    phonenumbers: null,
    email: null,

    formErrors: {
    matricule: false,
    civility: false,
    firstName: false,
    lastName: false,
    birthdate: false,
    birthplace: false,
    nationality: false,
    pictureURL: false,
    CNPSnumber: false,
    CMUnumber: false,
    street: false,
    neighborhood: false,
    city: false,
    country: false,
    maritalStatus: false,
    numberOfDependents: false,
    NbrOfParts: false,
    hiringDate: false,
    seniority: false,
    currentPosition: false,
    exitDate: false,
    phonenumbers: false,
    email: false,
    // ...
  },
});
// const refInputEl = ref<HTMLElement>()

// // changeAvatar function
// const changeAvatar = (file: Event) => {
//   const fileReader = new FileReader()
//   const { files } = file.target as HTMLInputElement

//   if (files && files.length) {
//     fileReader.readAsDataURL(files[0])
//     fileReader.onload = () => {
//       if (typeof fileReader.result === 'string')
//         form.pictureURL = fileReader.result
//     }
//   }
// }

// // reset avatar image
// const resetAvatar = () => {
//   form.pictureURL = form.pictureURL
// }

const submit = () => {
  //
  console.log(form)

  employeesService.createEmploye(form)
      .then((res: any) => {
        form.formErrors.firstName = false;
          form.formErrors.lastName = false;
          form.formErrors.email = false;
          form.formErrors.street = false;
          form.formErrors.matricule = false;
          form.formErrors.maritalStatus = false;
          form.formErrors.phonenumbers = false;
          form.formErrors.CNPSnumber = false;
          form.formErrors.currentPosition = false;
          form.formErrors.numberOfDependents = false;
          form.formErrors.birthdate = false;
          form.formErrors.birthplace = false;
          form.formErrors.city = false;
          form.formErrors.country = false;
          form.formErrors.CNPSnumber = false;
          form.formErrors.country= false;
          form.formErrors.exitDate = false;
          form.formErrors.civility = false;
          form.formErrors.nationality = false;
          form.formErrors.seniority = false;
          form.formErrors.pictureURL = false;
          form.formErrors.neighborhood = false;
          form.formErrors.NbrOfParts = false;
          form.formErrors.hiringDate = false;
          form.formErrors.CMUnumber = false;

        toast.value = {
        show: true,
        text: 'Enregistré avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['firstName']){

form.formErrors.firstName = true;
toast.value = {
show: true,
text: error.response.data['firstName'],
color: 'danger', 
};
} if(error.response.data['lastName']){

form.formErrors.lastName = true;
toast.value = {
show: true,
text: error.response.data['lastName'],
color: 'danger', 
};
}  if(error.response.data['email']){

form.formErrors.email = true;
toast.value = {
show: true,
text: error.response.data['email'],
color: 'danger', 
};
} if(error.response.data['street']){

form.formErrors.street = true;
toast.value = {
show: true,
text: error.response.data['street'],
color: 'danger', 
};
} if(error.response.data['matricule']){

form.formErrors.matricule = true;
toast.value = {
show: true,
text: error.response.data['matricule'],
color: 'danger', 
};
} if(error.response.data['maritalStatus']){

form.formErrors.maritalStatus = true;
toast.value = {
show: true,
text: error.response.data['maritalStatus'],
color: 'danger', 
};
} if(error.response.data['phonenumbers']){

form.formErrors.phonenumbers = true;
toast.value = {
show: true,
text: error.response.data['phonenumbers'],
color: 'danger', 
};
}  if(error.response.data['CNPSnumber']){

form.formErrors.CNPSnumber = true;
toast.value = {
show: true,
text: error.response.data['CNPSnumber'],
color: 'danger', 
};
}  if(error.response.data['currentPosition']){

form.formErrors.currentPosition = true;
toast.value = {
show: true,
text: error.response.data['currentPosition'],
color: 'danger', 
};
} if(error.response.data['numberOfDependents']){

form.formErrors.numberOfDependents = true;
toast.value = {
show: true,
text: error.response.data['numberOfDependents'],
color: 'danger', 
};
}if(error.response.data['birthdate']){

form.formErrors.birthdate = true;
toast.value = {
show: true,
text: error.response.data['birthdate'],
color: 'danger', 
};
}if(error.response.data['birthplace']){

form.formErrors.birthplace = true;
toast.value = {
show: true,
text: error.response.data['birthplace'],
color: 'danger', 
};
}if(error.response.data['city']){

form.formErrors.city = true;
toast.value = {
show: true,
text: error.response.data['city'],
color: 'danger', 
};
}if(error.response.data['country']){

form.formErrors.country = true;
toast.value = {
show: true,
text: error.response.data['country'],
color: 'danger', 
};
}if(error.response.data['exitDate']){

form.formErrors.exitDate = true;
toast.value = {
show: true,
text: error.response.data['exitDate'],
color: 'danger', 
};
}if(error.response.data['civility']){

form.formErrors.civility = true;
toast.value = {
show: true,
text: error.response.data['civility'],
color: 'danger', 
};
}if(error.response.data['seniority']){

form.formErrors.seniority = true;
toast.value = {
show: true,
text: error.response.data['seniority'],
color: 'danger', 
};
}if(error.response.data['neighborhood']){

form.formErrors.neighborhood = true;
toast.value = {
show: true,
text: error.response.data['neighborhood'],
color: 'danger', 
};
}if(error.response.data['NbrOfParts']){

form.formErrors.NbrOfParts = true;
toast.value = {
show: true,
text: error.response.data['NbrOfParts'],
color: 'danger', 
};
}if(error.response.data['pictureURL']){

form.formErrors.pictureURL = true;
toast.value = {
show: true,
text: error.response.data['pictureURL'],
color: 'danger', 
};
}if(error.response.data['CMUnumber']){

form.formErrors.CMUnumber = true;
toast.value = {
show: true,
text: error.response.data['CMUnumber'],
color: 'danger', 
};
}if(error.response.data['hiringDate']){

form.formErrors.hiringDate = true;
toast.value = {
show: true,
text: error.response.data['hiringDate'],
color: 'danger', 
};
}if(error.response.data['nationality']){

form.formErrors.nationality = true;
toast.value = {
show: true,
text: error.response.data['nationality'],
color: 'danger', 
};
}
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.firstName"
          label="Nom"
          placeholder="Nom"
          :error="form.formErrors.firstName"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.lastName"
          label="Prénom"
          placeholder="Prénom"
          :error="form.formErrors.lastName"
        />
      </VCol>

      <!-- 👉 Rue -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.street"
          label="Rue"
          placeholder="Rue"
          :error="form.formErrors.street"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.city"
          label="Ville"
          placeholder="Ville"
          :error="form.formErrors.city"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.country"
          label="Pays"
          placeholder="Pays"
          :error="form.formErrors.country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.neighborhood"
          label="Quartier"
          placeholder="Quartier"
          :error="form.formErrors.neighborhood"
        />
      </VCol>

      <!-- 👉 Matricule -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.matricule"
          label="Matricule"
          placeholder="Matricule"
          :error="form.formErrors.matricule"
        />
      </VCol>
         <!-- 👉 Nationalite -->
         <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.nationality"
          label="Nationalité"
          placeholder="Nationalité"
          :error="form.formErrors.nationality"
        />
      </VCol>
        <!-- 👉 Nationalite -->
        <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Date de naissance"
    v-model="form.birthdate"
    :error="form.formErrors.birthdate"
    type="date"

  />
</VCol>
   <!-- 👉 Lieu de naissance-->
         <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Lieu de naissance"
    v-model="form.birthplace"
      placeholder="Lieu de naissance"
      :error="form.formErrors.birthplace"

  />
      </VCol>

       <!-- 👉 Phone-->
       <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Phone"
    v-model="form.phonenumbers"
      placeholder="Phone"
      type="number"
      :error="form.formErrors.phonenumbers"

  />
      </VCol>

        <!-- 👉 Email-->
        <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Email"
    v-model="form.email"
      placeholder="Email"
      type="email"
      :error="form.formErrors.email"

  />
  
      </VCol>

              <!-- 👉 Cmu-->
              <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="CMU"
    v-model="form.CMUnumber"
      placeholder="CMU"
      type="number"
      :error="form.formErrors.CMUnumber"

  />
  
      </VCol>

        <!-- 👉 CNPS-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="CNPS"
    v-model="form.CNPSnumber"
      placeholder="CNPS"
      type="number"
      :error="form.formErrors.CNPSnumber"

  />
  
      </VCol>

      <!-- 👉 Depense-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Charge"
    v-model="form.numberOfDependents"
      placeholder="Nombre de charge"
      type="number"
      :error="form.formErrors.numberOfDependents"

  />
  
      </VCol>

        <!-- 👉 Part-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Nombre de part"
    v-model="form.NbrOfParts"
      placeholder="Nombre de part"
      type="number"
      :error="form.formErrors.NbrOfParts"

  />
  
      </VCol>

              <!-- 👉 Poste-->
              <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Poste"
    v-model="form.currentPosition"
      placeholder="Poste"
      type="text"
      :error="form.formErrors.currentPosition"

  />
  
      </VCol>

    <!-- 👉 Anciennete-->
              <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Anciennieté"
    v-model="form.seniority"
      placeholder="Ancienneté"
      type="number"
      :error="form.formErrors.seniority"

  />
  
      </VCol>

              <!-- 👉 -->
              <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Date d'embauche"
    v-model="form.hiringDate"
      placeholder="Date d'embauche"
      type="date"
      :error="form.formErrors.hiringDate"

  />
  
      </VCol>

        <!-- 👉 Email-->
              <VCol
        cols="12"
        md="6"
      >
      <VSelect
                  v-model="form.maritalStatus"
                  label="Status matimonial"
                  :items="['Marié', 'Celibataire', 'Divorsé']"
                  :error="form.formErrors.maritalStatus"
                />
  
      </VCol>

        <!-- 👉 Civilité-->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
                  v-model="form.civility"
                  label="Civilité"
                  :items="['Homme', 'Femme']"
                  :error="form.formErrors.civility"
                />
  
      </VCol>

                <!-- 👉 upload-->
                <!-- <VCol
        cols="12"
        md="6"
      >
      <VTextField
      label="Image"
    v-model="form.pictureURL"
      type="file"
      :error="form.formErrors.pictureURL"

  />
  
      </VCol> -->
      <!-- <VCardText class="d-flex"   :error="form.formErrors.pictureURL">
 
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="form.pictureURL"
          />

 
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Photo</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >

              <VBtn
                type="reset"
                color="error"
                variant="tonal"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Reset</span>
                <VIcon
                  icon="mdi-refresh"
                  class="d-sm-none"
                />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </form>
        </VCardText> -->

        
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
