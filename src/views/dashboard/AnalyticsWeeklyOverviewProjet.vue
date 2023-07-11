<script setup lang="ts">
import { hexToRgb } from '@layouts/utils'
import VueApexCharts from 'vue3-apexcharts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const currentTheme = ref(vuetifyTheme.current.value.colors)

const props = defineProps({
 

 modelValue: {
   type: [String, Number, Boolean],
   default: null,
 },
});
const options = controlledComputed(() => vuetifyTheme.name.value, () => {

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
        columnWidth: '60%',
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
      strokeDashArray: 10,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5,
      },
    },
    dataLabels: { enabled: false },
    colors: [

       currentTheme.value.warning,

    ],
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    xaxis: {
      //categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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

        formatter: (value: number) => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}%`,
      },
    },
  }
})

// const series = [{name: 'tâche', data: [] }]



// const series = [];

// for (let i = 0; i < props.modelValue.length; i++) {
//   const item = {
//     name: props.modelValue[i].title  ,
//     data: [props.modelValue[i].progress]
//   };
  
//   series.push(item);

// }
// console.log(series)

const series = [];

for (let i = 0; i < props.modelValue.length; i++) {
  // let color = '';

  // if (props.modelValue[i].progress <= 50) {
  //   color = currentTheme.value.warning; // Couleur rouge pour moins de 50%
  // } else if (props.modelValue[i].progress == 100) {
  //   color = currentTheme.value.success; // Couleur verte pour 100%
  // } else {
  //   color = currentTheme.value.secondary; // Couleur bleue pour plus de 50%
  // }

  const item = {
    name: props.modelValue[i].title,
    data: [props.modelValue[i].progress],
   // color: color,
  };

  series.push(item);
}

</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Graphique</VCardTitle>

    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="200"
      />

      <div class="d-flex align-center mb-3">
    
        <p>
         L'evolution des tâches du projet
        </p>
      </div>

    </VCardText>
  </VCard>
</template>
