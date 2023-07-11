<script lang="ts" setup>
import { useRoute } from 'vue-router'
import AccountSettingsAccount from '@/views/pages/account-settings/AccountSettingsAccount.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import AccountSettingsSecurity from '@/views/pages/account-settings/AccountSettingsSecurity.vue'
import AccountSettingsSecurityT from '@/views/pages/account-settings/AccountSettingsSecurityT.vue';
import AccountSettingsAccountT from '@/views/pages/account-settings/AccountSettingsAccountT.vue';
import AccountSettingsAccountTParam from '@/views/pages/account-settings/AccountSettingsAccountTParam.vue';
import { accountService } from '@/_services';

const route = useRoute()
const role = accountService.getRole()
const groups = accountService.getGroups()
const groupsArray = [groups];
const formattedArray: string[] = groupsArray[0].split(",").filter(item => item !== "");

const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  { title: 'Compte', icon: 'mdi-account-outline', tab: 'account' },
  { title: 'Securité', icon: 'mdi-lock-open-outline', tab: 'security' },
  { title: 'Paramètre', icon: 'mdi-cog-outline', tab: 'parametre' },
  // { title: 'Notifications', icon: 'mdi-bell-outline', tab: 'notification' },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.icon"
        :value="item.tab"
      >
        <VIcon
        
          size="20"
          start
          :icon="item.icon"
        />
        {{ item.title }}
      </VTab>
    </VTabs>
    <VDivider />

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
    >
      <!-- Account -->
      <VWindowItem value="account">
        <AccountSettingsAccountT v-if="role === 'true' || formattedArray.includes('admin')"/>
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security" >
        <AccountSettingsSecurityT v-if="role === 'true' || formattedArray.includes('admin')"/>
      </VWindowItem>

      <!-- parameter -->
      <VWindowItem value="parametre" v-if="role === 'true' || formattedArray.includes('admin')">
        <AccountSettingsAccountTParam/>
      </VWindowItem>
      <!-- Notification -->
      <!-- <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem> -->
    </VWindow>
  </div>
</template>
