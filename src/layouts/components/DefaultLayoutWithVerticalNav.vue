<script lang="ts" setup>
import { useTheme } from 'vuetify'

import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import { accountService } from '@/_services'

// Banner

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
const role = accountService.getRole()
const groups = accountService.getGroups()
const groupsArray = [groups];
const formattedArray: string[] = groupsArray[0].split(",").filter(item => item !== "");
console.log(formattedArray,formattedArray.includes('admin'))
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="mdi-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div
          class="d-flex align-center cursor-pointer"
          style="user-select: none;"
        >
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="mdi-magnify" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span>
        </div>

        <VSpacer />

       

        <IconBtn class="me-2">
          <VIcon icon="mdi-bell-outline" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'mdi-home-outline',
          to: '/dashboard',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin')"
        :item="{
          title: 'Profil',
          icon: 'mdi-account-cog-outline',
          to: '/account-settings',
        }"
      />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
      v-if="role === 'true' || formattedArray.includes('admin')"
        :item="{
          heading: 'Utilisateurs',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin')"
        :item="{
          title: 'démande de congé',
          icon: 'mdi-gamepad-round-down',
          to: '/demande-conge',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Modèle de contrat',
          icon: 'mdi-file-document-edit',
          to: '/contrat-model',
        }"
      />

      <!-- <VerticalNavLink
        :item="{
          title: 'Login',
          icon: 'mdi-login',
          to: '/login',
        }"
      /> -->
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Utilisateurs',
          icon: 'mdi-account-group',
          to: '/users',
        }"
      />
      <!-- <VerticalNavLink
        :item="{
          title: 'Error',
          icon: 'mdi-information-outline',
          to: '/no-existence',
        }"
      /> -->

      <!-- 👉 User Interface -->
      <VerticalNavSectionTitle
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          heading: 'Gestion de paie',
        }"
      />

      <VerticalNavLink 
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Employes',
          icon: 'mdi-account-tie',
          to: '/employes',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Contrats',
          icon: 'mdi-file-document-edit',
          to: '/contract',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Présences',
          icon: 'mdi-note-plus',
          to: '/presence',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Avances',
          icon: 'mdi-notebook',
          to: '/avance',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Primes',
          icon: 'mdi-square-edit-outline',
          to: '/primes',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Congés',
          icon: 'mdi-camera-document',
          to: '/conges',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh')"
        :item="{
          title: 'Bulletin de paie',
          icon: 'mdi-clipboard-file',
          to: '/payslips',
        }"
      />

       <!-- 👉 Commptabilité -->
       <VerticalNavSectionTitle
       v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          heading: 'Commptabilité',
        }"
      />

      <!-- <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'Les Etats Financiés',
          icon: 'mdi-wallet',
          to: '/etat-financie',
        }"
      /> -->
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'Balance',
          icon: 'mdi-book',
          to: '/balances',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'Grand livre',
          icon: 'mdi-book',
          to: '/grand-livre',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'journal',
          icon: 'mdi-square-edit-outline',
          to: '/journal',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'Fournisseurs',
          icon: 'mdi-square-edit-outline',
          to: '/fournisseurs',
        }"
      />
      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') "
        :item="{
          title: 'Comptes',
          icon: 'mdi-wallet-travel',
          to: '/comptes',
        }"
      />


       <!-- 👉 Projet -->
       <VerticalNavSectionTitle
       v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') || formattedArray.includes('editeur')"
        :item="{
          heading: 'Projets',
        }"
      />

      <VerticalNavLink
      v-if="role === 'true' || formattedArray.includes('admin') || formattedArray.includes('drh') || formattedArray.includes('comptable') || formattedArray.includes('editeur')"
        :item="{
          title: 'Projets',
          icon: 'mdi-inbox-arrow-down',
          to: '/projets',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Taches',
          icon: 'mdi-calendar-check',
          to: '/taches',
        }"
      />
    </template>


    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
