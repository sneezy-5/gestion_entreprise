<script setup lang="ts">
import misc404 from '@images/pages/404.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import tree from '@images/pages/tree.png'
import trees from '@images/pages/logoeso.png'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? miscMaskLight
    : miscMaskDark
})
</script>

<template>
  <div class="misc-wrapper">
    <ErrorHeader
      error-code="403"
      error-title="Abonnement ⚠️"
      error-description="Erreur d'accès : Votre abonnement a expiré. Veuillez renouveler votre abonnement pour continuer à bénéficier de toutes les fonctionnalités de l'application. Pour renouveler, veuillez vous rendre sur notre site web ou contacter notre service clientèle. Merci pour votre compréhension.."
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="misc404"
        alt="Coming Soon"
        :max-width="800"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
      >
        Reabonnez-vous
      </VBtn>
    </div>

    <!-- 👉 Footer -->
    <VImg
      :src="trees"
      class="misc-footer-tree d-none d-md-block"
    />

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/misc.scss";

.misc-footer-tree {
  inline-size: 15.625rem;
  inset-block-end: 3.5rem;
  inset-inline-start: 0.375rem;
}
</style>
