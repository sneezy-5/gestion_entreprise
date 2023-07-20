<script setup lang="ts">
import { dashboardService } from '@/_services';
import AnalyticsAward from '@/views/dashboard/AnalyticsAward.vue';
import AnalyticsBarCharts from '@/views/dashboard/AnalyticsBarCharts.vue';
import AnalyticsDepositWithdraw from '@/views/dashboard/AnalyticsDepositWithdraw.vue';
import AnalyticsSalesByCountries from '@/views/dashboard/AnalyticsSalesByCountries.vue';
import AnalyticsTotalEarning from '@/views/dashboard/AnalyticsTotalEarning.vue';
import AnalyticsTotalProfitLineCharts from '@/views/dashboard/AnalyticsTotalProfitLineCharts.vue';
import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue';
import AnalyticsUserTable from '@/views/dashboard/AnalyticsUserTable.vue';
import AnalyticsWeeklyOverview from '@/views/dashboard/AnalyticsWeeklyOverview.vue';
import AnalyticsWeeklyOverviewSaleMorth from '@/views/dashboard/AnalyticsWeeklyOverviewSaleMorth.vue';
import AnalyticsWeeklyOverviewSaleYear from '@/views/dashboard/AnalyticsWeeklyOverviewSaleYear.vue';
import CardStatisticsVertical from '@core/components/cards/CardStatisticsVertical.vue';

const totalProfit = {
  title: 'Total Profit',
  color: 'secondary',
  icon: 'mdi-poll',
  stats: '$25.6k',
  change: 42,
  subtitle: 'Weekly Project',
}

const newProject = {
  title: 'New Project',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}

const employe = {
  title: 'Employés',
  color: 'secondary',
  icon: 'mdi-account-tie',
  stats: "",
  change: 0,
  subtitle: '',
}

const contract = {
  title: 'Contrats',
  color: 'secondary',
  icon: 'mdi-file-document-edit',
  stats: "",
  change: 0,
  subtitle: '',
}

const primes = reactive({
  title: 'Primes',
  color: 'secondary',
  icon: 'mdi-square-edit-outline',
  stats: "23",
  change: 0,
  subtitle: '',
})

const conge = reactive({
  title: 'Congés',
  color: 'secondary',
  icon: 'mdi-camera-document',
  stats: "",
  change: 0,
  subtitle: '',
})


const projects = reactive({
  title: 'Projets',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: "",
  change: 0,
  subtitle: 'Projets de en cour',
})

const avance = reactive({
  title: 'Avances',
  color: 'secondary',
  icon: 'mdi-notebook',
  stats: "",
  change: 0,
  subtitle: 'avance sur salaire',
})

const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10)
});




dashboardService.getDashboardByfiter(form.start_date,form.end_date)
      .then(res => {
        
     
        const data = res.data
        employe.stats = data.employees
        contract.stats = data.contracts
        primes.stats  = data.primes
        conge.stats  = data.conges
        projects.stats  = data.projets
        avance.stats  = data.avance

        console.log(res.data,employe)
    })

</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsAward />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsWeeklyOverviewSaleMorth />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsTotalEarning /> -->
      <AnalyticsWeeklyOverviewSaleYear />
      <!-- <CardStatisticsVertical v-bind="conge" /> -->
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow class="match-height">
        <VCol
          cols="12"
          sm="6"
        >
        <CardStatisticsVertical v-bind="primes" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="contract" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="employe" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
        <CardStatisticsVertical v-bind="avance" />
        </VCol>
      </VRow>
    </VCol>

    <!-- <VCol
      cols="12"
      md="4"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsDepositWithdraw />
    </VCol> -->
<!-- 
    <VCol cols="12">
      <AnalyticsUserTable />
    </VCol> -->
  </VRow>
</template>
