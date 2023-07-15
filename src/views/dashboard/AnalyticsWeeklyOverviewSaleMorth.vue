


<script setup lang="ts">
import { dashboardService } from '@/_services';
import { hexToRgb } from '@layouts/utils'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'



const form = reactive({
  start_date: new Date().toISOString().substr(0, 10),
  end_date: new Date().toISOString().substr(0, 10)
});
const vuetifyTheme = useTheme()

const options = controlledComputed(() => vuetifyTheme.name.value, () => {
  const currentTheme = ref(vuetifyTheme.current.value.colors)
  const variableTheme = ref(vuetifyTheme.current.value.variables)

  const disabledColor = `rgba(${hexToRgb(currentTheme.value['on-surface'])},${variableTheme.value['disabled-opacity']})`
  const borderColor = `rgba(${hexToRgb(String(variableTheme.value['border-color']))},${variableTheme.value['border-opacity']})`

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded',
      },
    },
    stroke: {
      width: 2,
      colors: [currentTheme.value.surface],
    },
    legend: { show: false },
    grid: {
      borderColor,
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5,
      },
    },
    dataLabels: { enabled: false },
    colors: [
      currentTheme.value.secondary
    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    xaxis: {
      categories: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'],
      tickPlacement: 'on',
      labels: { show: false },
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        style: {
          colors: disabledColor,
          fontSize: '12px',
        },

        formatter: (value: number) => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
      },
    },
  }
})

const series = reactive([{name: 'Sale',  data: []}])
 dashboardService.getSaleBymorth(form.start_date, form.end_date)
    .then(res => {
     
      const data = res.data;
      // drop all data in 
      series[0].data.pop()
      for(let i=0; i<data.length; i++){
        series[0].data.push(data[i]);
      }
     console.log(series)
    });

     
  
 //get sale data and update ApexChart when data is filter
 const updateTresorerie = () => {
  dashboardService.getSaleBymorth(form.start_date, form.end_date)
    .then(res=> {
      console.log(res.data);
      const data = res.data;
      // drop all data in 
      series[0].data.pop()
      for(let i=0; i<data.length; i++){
        series[0].data.push(data[i]);
      }
      console.log(series)
    });
};

 const submit = () => {
  updateTresorerie();
};

const menu = ["show","delete"];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Semaine</VCardTitle>
      <VForm @submit.prevent="submit" >
    <VRow>
 

      <!-- 👉 start date -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.start_date"
          label="Debut"
          placeholder="Debut"
    
        />
       
      </VCol>

      <!-- 👉 end date-->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="date"
          v-model="form.end_date"
          label="Fin"
          placeholder="Fin"
     
        />
      </VCol>


        
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Fltrer
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
      <!-- <template #append>
        <div class="me-n3">
          <MoreBtn :menu-list="menu"/>
        </div>
      </template> -->
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="220"
      />

      <div class="d-flex align-center mb-3">
        <!-- <h5 class="text-h5 me-4">
          45%
        </h5> -->
        <p>
          l'évolution de votre chiffre d'affaire de ce mois
        </p>
      </div>

      <!-- <VBtn block>
        Details
      </VBtn> -->
    </VCardText>
  </VCard>
</template>
