<script setup lang="ts">
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useTheme } from 'vuetify'

import logo from '@images/logo.svg?raw'
import logos from '@images/logos.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import { accountService } from '@/_services'
import router from '@/router'
//import { reactive,ref } from "vue";

const errors = ref('')
const form = reactive({
  email: '',
  password: '',
  remember: false,
})


const submit = () => {
    console.log(form)
            accountService.login(form)
                .then((res: { data: { access: any; role: any,database:any,groups:any} }) => {
                    accountService.saveToken('access',res.data.access)
                    accountService.saveToken('role',res.data.role)
                    accountService.saveToken('groups',res.data.groups)
                    accountService.saveToken('database',res.data.database)
                    accountService.saveToken('subscription',res.data.subscription)
                    console.log(res.data.groups)
                    router.push('/dashboard')
                })
                .catch((error) => {
                   
                  errors.value =''
                        if(error.status =403){
                                //console.error(error.response.data.message);
                               
                              
                     console.error("votre Email/mot de passe est incorrect");
                     errors.value ="votre Email/mot de passe est incorrect"
                        }else if(error.status==401){
                          errors.value ="Votre abonnement à expiré"
                        }
                        
                  
                 });
};


const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? authV1MaskLight
    : authV1MaskDark
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex" >
            <div v-html="logos"/>
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          ESOGEST
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Bienvenue sur ESOGEST! 👋🏻
        </h5>
        <p class="mb-0">
         Connectez-vous pour commencer une belle avanture
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="submit">
          <span
    v-if="errors.length"
    class="error"
  >
    {{ errors }}
  </span>
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <!-- <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a>
              </div> -->

              <!-- login button -->
              <VBtn
                block
                type="submit"
                
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <!-- <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/register"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol> -->

            <!-- auth providers -->
            <!-- <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol> -->
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <!-- <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    /> -->
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
.error{
  color: red;
}
</style>
