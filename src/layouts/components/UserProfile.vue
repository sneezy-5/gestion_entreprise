<script setup lang="ts">
import { accountService, userService } from '@/_services';
import router from '@/router';
import avatar1 from '@images/avatars/avatar-1.png';
import { useMainStore } from '@/stores/main';

const logout =()=>{
                accountService.logout();
                router.push('/auth/login')
        }

        const role = accountService.getRole()
      const superadmin = role=='true'?'SuperAdmin':''
      const groups = accountService.getGroups()
      const groupsArray = [groups];
      const formattedArray: string[] = groupsArray[0].split(",").filter(item => item !== "");
      const admin =formattedArray.includes('admin')== true? 'Admin': ''
      const form=reactive({
        userName:'',
        userEmail:'',
        userAvatar:'',
        lastLogin:'',
        is_admin: admin,
        is_superadmin:superadmin==''?admin:superadmin
      })


      userService.getProfile()
        .then(res => {
          const profileData = res.data.results[0];
          if (profileData) {
           
            form.userName = profileData.username;
            form.userEmail = profileData.email;
            form.userAvatar = profileData.profile_image;
            form.lastLogin = profileData.last_login;
          }
          console.log(form)
          //useMainStore().setUser(form)
          
        })
        .catch(error => {
          console.error(error);
        });
     
//console.log(useMainStore().userAvatar)
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg :src="form.userAvatar" />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg :src="form.userAvatar" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>
            <VListItemTitle class="font-weight-semibold">
              {{form.userName}}
            </VListItemTitle>
            <VListItemSubtitle>{{form.is_superadmin}}</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link to="/account-settings" >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-account-outline"
                size="22"
                
              />
            </template>

            <VListItemTitle>Profil</VListItemTitle>
          </VListItem>

          <!-- 👉 Settings -->
          <VListItem link to="/account-settings" value="security" v-if="role === 'true' || formattedArray.includes('admin')">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-cog-outline"
                size="22"
              />
            </template>

            <VListItemTitle>Paramètre</VListItemTitle>
          </VListItem>


          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem    @click="logout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-logout"
                size="22"
             
              />
            </template>

            <VListItemTitle>Deconexion</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
