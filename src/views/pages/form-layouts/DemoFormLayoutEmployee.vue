<script lang="ts" setup>
import { employeesService } from '@/_services';
import { useMainStore } from '@/stores/main';

const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')



const sucess = ref('')
const errors = ref([]);
const form = reactive({
    matricule: "",
    civility: "Femme",
    firstName: "",
    lastName: "",
    birthdate: null,
    birthplace: "",
    nationality: "",
    pictureURL: null,
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

const checkbox = ref(false)

const submit = () => {
  //
  console.log(form)
  if (form.firstName === '') {
    form.formErrors.firstName = true;
  } else {
    form.formErrors.firstName = false;
  }
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
        useMainStore().fetchAllEmployees()
        //sucess.value ="Create successfuly"

    })
    .catch((error) => {

          form.formErrors.firstName = true;
          form.formErrors.lastName = true;
          form.formErrors.email = true;
          form.formErrors.street = true;
          form.formErrors.matricule = true;
          form.formErrors.maritalStatus = true;
          form.formErrors.phonenumbers = true;
          form.formErrors.CNPSnumber = true;
          form.formErrors.currentPosition = true;
          form.formErrors.numberOfDependents = true;
          form.formErrors.birthdate = true;
          form.formErrors.birthplace = true;
          form.formErrors.city = true;
          form.formErrors.country = true;
          form.formErrors.CNPSnumber = true;
          form.formErrors.country= true;
          form.formErrors.exitDate = true;
          form.formErrors.civility = true;
          form.formErrors.nationality = true;
          form.formErrors.seniority = true;
          form.formErrors.pictureURL = true;
          form.formErrors.neighborhood = true;
          form.formErrors.NbrOfParts = true;
          form.formErrors.hiringDate = true;
          form.formErrors.CMUnumber = true;

         sucess.value =""
         
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
          v-model="form.firstName"
          label="First Name"
          placeholder="First Name"
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
          label="Last Name"
          placeholder="Last Name"
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
          v-model="form.email"
          label="City"
          placeholder="City"
          :error="form.formErrors.email"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="form.country"
          label="Country"
          placeholder="Country"
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
      label="Depense"
    v-model="form.numberOfDependents"
      placeholder="Depense"
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
      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
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
