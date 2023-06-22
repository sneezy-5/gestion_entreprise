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
  color: 'primary',
  icon: 'mdi-account-tie',
  stats: '',
  change: 1,
  subtitle: '',
}

const contract = {
  title: 'Contrats',
  color: 'primary',
  icon: 'mdi-file-document-edit',
  stats: '',
  change: 1,
  subtitle: '',
}

const primes = {
  title: 'Primes',
  color: 'primary',
  icon: 'mdi-square-edit-outline',
  stats: '',
  change: 1,
  subtitle: '',
}

const conge = {
  title: 'Congés',
  color: 'primary',
  icon: 'mdi-camera-document',
  stats: '',
  change: 1,
  subtitle: '',
}


const projects = {
  title: 'Projets',
  color: 'primary',
  icon: 'mdi-inbox-arrow-down',
  stats: '',
  change: 1,
  subtitle: 'Projets de en cour',
}

const avance = {
  title: 'Avances',
  color: 'primary',
  icon: 'mdi-notebook',
  stats: '',
  change: 1,
  subtitle: 'avance sur salaire',
}

const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10)
});




dashboardService.getDashboardByfiter(form.start_date,form.end_date)
      .then(res => {
        
        console.log(res.data)
        const data = res.data
        employe.stats = data.employees
        contract.stats = data.contracts
        primes.stats  = data.primes
        conge.stats  = data.conges
        projects.stats  = data.projets
        avance.stats  = data.avance

       
       // console.log('dashboardhome',dashboard[0].employees)
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
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <!-- <AnalyticsTotalEarning /> -->
      <CardStatisticsVertical v-bind="conge" />
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
