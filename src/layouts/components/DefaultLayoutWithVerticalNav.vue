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

// Banner

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
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
        :item="{
          title: 'Profil',
          icon: 'mdi-account-cog-outline',
          to: '/account-settings',
        }"
      />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Utilisateurs',
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
        :item="{
          heading: 'Gestion de paie',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Employes',
          icon: 'mdi-account-tie',
          to: '/employes',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Contrats',
          icon: 'mdi-file-document-edit',
          to: '/contract',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Présences',
          icon: 'mdi-note-plus',
          to: '/presence',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Avances',
          icon: 'mdi-notebook',
          to: '/avance',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Primes',
          icon: 'mdi-square-edit-outline',
          to: '/primes',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Congés',
          icon: 'mdi-camera-document',
          to: '/conges',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Bulletin de paie',
          icon: 'mdi-clipboard-file',
          to: '/payslips',
        }"
      />

       <!-- 👉 Commptabilité -->
       <VerticalNavSectionTitle
        :item="{
          heading: 'Commptabilité',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Tresorerie',
          icon: 'mdi-wallet',
          to: '/tresorerie',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'transactions',
          icon: 'mdi-square-edit-outline',
          to: '/Transactions',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Fournisseurs',
          icon: 'mdi-square-edit-outline',
          to: '/fournisseurs',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Comptes',
          icon: 'mdi-wallet-travel',
          to: '/comptes',
        }"
      />


       <!-- 👉 Projet -->
       <VerticalNavSectionTitle
        :item="{
          heading: 'Projets',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Projets',
          icon: 'mdi-inbox-arrow-down',
          to: '/projet',
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
