<script lang="ts" setup>
import { accountService, userService } from '@/_services';

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)


const passwordRequirements = [
  'Minimum 8 characters long - the more, the better',
  'At least one lowercase character',
  'At least one number, symbol, or whitespace character',
]
const toast = ref({
  show: false,
  text: '',
  color: '',
});

const form = reactive({
  password_current:"",
  password: "",
  password_confirmation: "",
  profile_image:"",
  formErrors:{
    password_current:false,
    password:false,
    password_confirmation:false,

  }
});

userService.getProfile()
  .then(res => {
    const profileData = res.data.results[0];
    if (profileData) {
     form.id =profileData.id
      
    }

    
  })
  .catch(error => {
    console.error(error);
  });
const submit = () => {
  console.log(form)
  if(form.password !== form.password_confirmation){
    form.formErrors.password_confirmation = true
  }
 else{

  userService.changeProfilePasswordUser(form)
      .then((res: any) => {
        form.formErrors.password_current = false;
          form.formErrors.password = false;
          form.formErrors.password_confirmation = false;
        toast.value = {
        show: true,
        text: 'Modifié  avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['password_current']){

form.formErrors.password_current = true;
toast.value = {
show: true,
text: error.response.data['password_current'],
color: 'danger', 
};
}else{

form.formErrors.password_current = false;

} if(error.response.data['password']){

form.formErrors.password = true;
toast.value = {
show: true,
text: error.response.data['password'],
color: 'danger', 
};
} 
else{

form.formErrors.password = false;
}
 
         console.log(error)
        
     });
    }
};
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Change Password" >
        <VForm  @submit.prevent="submit">
          <VCardText>
            <!-- 👉 Current Password -->
            <VRow class="mb-3">
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="form.password_current"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Mot de passe actuel"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                  :error="form.formErrors.password_current"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="form.password"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Nouveau mot de passe"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                  :error="form.formErrors.password"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="form.password_confirmation"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                  label="Confirmer"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                  :error="form.formErrors.password_confirmation"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base font-weight-medium mt-2">
              Password Requirements:
            </p>

            <ul class="d-flex flex-column gap-y-3">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="7"
                    icon="mdi-circle"
                    class="me-3"
                  />
                </div>
                <span class="font-weight-medium">{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn type="submit">Enregistrer</VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="tonal"
            >
              Reset
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->
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
  </VRow>
</template>
