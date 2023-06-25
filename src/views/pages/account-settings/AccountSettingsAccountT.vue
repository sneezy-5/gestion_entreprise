<script lang="ts" setup>
import { userService } from '@/_services';
import avatar1 from '@images/avatars/avatar-1.png';
import { useMainStore } from '@/stores/main';

const toast = ref({
  show: false,
  text: '',
  color: '',
});

const profileForm = reactive({
  username:"",
  email: "",
  profile_image:"",
  avatar1 : avatar1,
  formErrors:{
    username:false,
    email:false,
  }
});



const refInputEl = ref<HTMLElement>()

const accountDataLocal = ref(profileForm)
const isAccountDeactivated = ref(false)



// changeAvatar function
const changeAvatar = (file: Event) => {
  const fileReader = new FileReader()
  const { files } = file.target as HTMLInputElement

  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.profile_image = files[0]
        accountDataLocal.value.avatar1 = fileReader.result
    }
  }
}


userService.getProfile()
  .then(res => {
    const profileData = res.data.results[0];
    if (profileData) {
      profileForm.id = profileData.id
      profileForm.username = profileData.username;
      profileForm.email = profileData.email;
      //profileForm.profile_image = profileData.profile_image;
      profileForm.avatar1 = profileData.profile_image
      
    }

    
  })
  .catch(error => {
    console.error(error);
  });

  





const submit = () => {
  console.log(profileForm)

  userService.updateUserProfile(profileForm)
      .then((res: any) => {
        profileForm.formErrors.email = false;
          profileForm.formErrors.username = false;
        toast.value = {
        show: true,
        text: 'Modifié  avec succès',
        color: 'success',
      };
     // useMainStore().fetchAllProfile()
      
    })
    .catch((error) => {


if(error.response.data['username']){

profileForm.formErrors.username = true;
toast.value = {
show: true,
text: error.response.data['username'],
color: 'danger', 
};
}else{

profileForm.formErrors.username = false;

} if(error.response.data['email']){

profileForm.formErrors.email = true;
toast.value = {
show: true,
text: error.response.data['email'],
color: 'danger', 
};
}else{

profileForm.formErrors.email = false;

} 

         console.log(error)
        });
        
  };
  
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Details de compte">
        <VCardText class="d-flex" >
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="profileForm.avatar1"
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
                <span class="d-none d-sm-block">Ajouter une nouvelle photo</span>
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
              <!-- 👉 Email -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                type="email"
                  v-model="profileForm.email"
                  label="Email"
                />
              </VCol>

              <!-- 👉 Username -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="profileForm.username"
                  label="Username"
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
