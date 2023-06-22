<script lang="ts" setup>
import { userService } from '@/_services';
import avatar1 from '@images/avatars/avatar-1.png';

const toast = ref({
  show: false,
  text: '',
  color: '',
});

const form = reactive({
  database: "",
  email: "",
  username: "",
  contact:"",
  address: "",
  picture: "",
  method_pay:"",
  prime_transport:"",
  avatar1:avatar1,
  formErrors:{
    contact:false,
    address:false,
    picture:false,
    method_pay: false,
    prime_transport:false

  }
});

userService.getParameter()
  .then(res => {
    const profileData = res.data.results[0];
    if (profileData) {
     form.id =profileData.id
     form.username = profileData.username
     form.address =  profileData.address
     form.contact = profileData.contact
     form.database = profileData.database
     form.email = profileData.email
     form.picture = profileData.picture 
     form.method_pay = profileData.method_pay
     form.prime_transport = profileData.prime_transport

    }
    console.log(res)
    
  })
  .catch(error => {
    console.error(error);
  });
  const refInputEl = ref<HTMLElement>()

const accountDataLocal = ref(form)
const isAccountDeactivated = ref(false)



// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.picture = files[0]
        accountDataLocal.value.avatar1 = fileReader.result
    }
  }
}



  
const submit = () => {
  console.log(form)


  userService.updateParameter(form)
      .then((res: any) => {
        form.formErrors.address = false;
          form.formErrors.contact = false;
          form.formErrors.picture = false;
        toast.value = {
        show: true,
        text: 'Enregistré  avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['address']){

form.formErrors.address = true;
toast.value = {
show: true,
text: error.response.data['address'],
color: 'danger', 
};
}else{

form.formErrors.address = false;

} if(error.response.data['picture']){

form.formErrors.picture = true;
toast.value = {
show: true,
text: error.response.data['picture'],
color: 'danger', 
};
} 
else{

form.formErrors.picture = false;
}
if(error.response.data['contact']){

form.formErrors.contact = true;
toast.value = {
show: true,
text: error.response.data['picture'],
color: 'danger', 
};
} 
else{

form.formErrors.contact = false;
}
         console.log(error)
        
     });

};

</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Paramètre">
        <VCardText class="d-flex" >
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="form.avatar1"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5" >
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">votre de votre entreprise</span>
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
                :error="form.formErrors.picture"
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
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6"  @submit.prevent="submit" enctype="multipart/form-data">
            <VRow>
              <!-- 👉 Adresse -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                type="text"
                  v-model="form.address"
                  label="Adresse"
                />
              </VCol>

              <!-- 👉 contact -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="form.contact"
                  label="Contact"
                />
              </VCol>
               <!-- 👉 prime transport -->
               <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="form.prime_transport"
                  label="Prime de transport"
                  :error="form.formErrors.prime_transport"
                />
              </VCol>

    <!-- 👉 method de paie -->
    <VCol
            cols="12"
            md="6"
          >
          <VSelect
                      type="number"
                      v-model="form.method_pay"
                      label="Methode depayement des salaires"
                      :items="['Espèce', 'Virement']"
                      :error="form.formErrors.method_pay"
                    />
      
          </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn type="submit">Enregistrer</VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
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
    <!-- <VCol cols="12">

      <VCard title="Deactivate Account">
        <VCardText>
          <div>
            <VCheckbox
              v-model="isAccountDeactivated"
              label="I confirm my account deactivation"
            />
          </div>

          <VBtn
            :disabled="!isAccountDeactivated"
            color="error"
            class="mt-3"
          >
            Deactivate Account
          </VBtn>
        </VCardText>
      </VCard>
    </VCol> -->
  </VRow>
</template>
