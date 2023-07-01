<script lang="ts" setup>
import { employeesService, presenceService } from '@/_services';
import { useMainStore } from '@/stores/main';

const router = useRouter();

const routeParam = router.currentRoute.value.params.id;




const toast = ref({
  show: false,
  text: '',
  color: '',
});
const employe = reactive([]);


employeesService.getList()
      .then(res => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          employe.push( {state:data[i].firstName,abbr:data[i].id});
        }   
        
        console.log(employe)
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
  
     });

const form = reactive({
    periodStart: null,
    periodEnd: null,
    absentdays: null,
    presentdays: null,
    delays: null,
    normalHours: null,
    normalHoursComplementary: null,
    Overtime_15: null,
    Overtime_50: null,
    Overtime_75: null,
    Overtime_100: null,
    employee: null,

    formErrors: {
      periodStart: false,
      periodEnd: false,
      absentdays: false,
      presentdays: false,
      delays: false,
      normalHours:false,
      normalHoursComplementary: false,
      Overtime_15: false,
      Overtime_50: false,
      Overtime_75: false,
      Overtime_100: false,
      employee: false,
    
  },
});

//get presence by id
presenceService.getPresence(routeParam)
      .then(res => {
    form.id = res.data.id;
    form.periodStart = res.data.periodStart;
    form.periodEnd = res.data.periodEnd;
    form.absentdays = res.data.absentdays;
    form.presentdays = res.data.presentdays;
    form.delays = res.data.delays;
    form.normalHours = res.data.normalHours;
    form.normalHoursComplementary = res.data.normalHoursComplementary;
    form.Overtime_15 = res.data.Overtime_15;
    form.Overtime_50 = res.data.Overtime_50;
    form.Overtime_75 = res.data.Overtime_75;
    form.Overtime_100 = res.data.Overtime_100;
    form.employee = res.data.employee.id
        console.log(res)
    })
    .catch((error) => {
         if (error.status == 401) {
            console.error(error)
         }
     });

const submit = () => {
  //
  console.log(form)

  presenceService.updatePresence(form)
      .then((res: any) => {
        form.formErrors.periodStart = false;
          form.formErrors.periodEnd = false;
          form.formErrors.absentdays = false;
          form.formErrors.presentdays = false;
          form.formErrors.delays = false;
          form.formErrors.normalHours = false;
          form.formErrors.normalHoursComplementary = false;
          form.formErrors.Overtime_15 = false;
          form.formErrors.Overtime_50 = false;
          form.formErrors.Overtime_75 = false;
          form.formErrors.Overtime_100 = false;
          form.formErrors.employee = false;
        toast.value = {
        show: true,
        text: 'Modifié avec succès',
        color: 'success',
      };
    })
    .catch((error) => {


if(error.response.data['periodStart']){

form.formErrors.periodStart = true;
toast.value = {
show: true,
text: error.response.data['periodStart'],
color: 'danger', 
};
}else{

form.formErrors.periodStart = false;

} if(error.response.data['periodEnd']){

form.formErrors.periodEnd = true;
toast.value = {
show: true,
text: error.response.data['periodEnd'],
color: 'danger', 
};
} 
else{

form.formErrors.periodEnd = false;
}
 if(error.response.data['absentdays']){

form.formErrors.absentdays = true;
toast.value = {
show: true,
text: error.response.data['absentdays'],
color: 'danger', 
};
} else{

form.formErrors.absentdays = false;

} if(error.response.data['presentdays']){

form.formErrors.presentdays = true;
toast.value = {
show: true,
text: error.response.data['presentdays'],
color: 'danger', 
};
} else{

form.formErrors.presentdays = false;

}if(error.response.data['delays']){

form.formErrors.delays = false;

} else{

form.formErrors.delays = false;

}if(error.response.data['normalHours']){

form.formErrors.normalHours = true;
toast.value = {
show: true,
text: error.response.data['normalHours'],
color: 'danger', 
};
}else{

form.formErrors.normalHours = false;

}if(error.response.data['normalHoursComplementary']){

form.formErrors.normalHoursComplementary = true;
toast.value = {
show: true,
text: error.response.data['normalHoursComplementary'],
color: 'danger', 
};
} else{

form.formErrors.normalHoursComplementary = false;

} if(error.response.data['Overtime_15']){

form.formErrors.Overtime_15 = true;
toast.value = {
show: true,
text: error.response.data['Overtime_15'],
color: 'danger', 
};
}else{

form.formErrors.Overtime_50 = false;

}   if(error.response.data['Overtime_50']){

form.formErrors.Overtime_50 = true;
toast.value = {
show: true,
text: error.response.data['Overtime_50'],
color: 'danger', 
};
}else{

form.formErrors.Overtime_75 = false;

}  if(error.response.data['Overtime_75']){

form.formErrors.Overtime_15 = true;
toast.value = {
show: true,
text: error.response.data['Overtime_75'],
color: 'danger', 
};
}else{

form.formErrors.Overtime_100 = false;

} if(error.response.data['Overtime_100']){

form.formErrors.Overtime_100 = true;
toast.value = {
show: true,
text: error.response.data['Overtime_100'],
color: 'danger', 
};
}else{

form.formErrors.Overtime_100 = false;

}   if(error.response.data['employee']){

form.formErrors.employee = true;
toast.value = {
show: true,
text: error.response.data['employee'],
color: 'danger', 
};
} else{

form.formErrors.employee = false;

} 
         console.log(error)
        
     });
};

</script>

<template>
  <VForm @submit.prevent="submit" enctype="multipart/form-data">
    <VRow>


        <!-- 👉 Employe -->
        <VCol
        cols="12"
        md="6"
      >
      <VSelect
  v-model="form.employee"
  label="Employés"
  :items="employe"
  item-title="state"
    item-value="abbr"
    persistent-hint
    
    single-line
  :error="form.formErrors.employee"
  
  
/>

      </VCol>
        
      <!-- 👉 debut -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="date"
          v-model="form.periodStart"
          label="Debut"
          placeholder="Debut"
          :error="form.formErrors.periodStart"
        />
      </VCol>
     <!-- 👉 fin -->
     <VCol
        cols="12"
        md="6"
      >
        <VTextField
        type="date"
          v-model="form.periodEnd"
          label="Fin"
          placeholder="Fin"
          :error="form.formErrors.periodEnd"
        />
      </VCol>
      <!-- 👉 presence -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          type="number"
          v-model="form.presentdays"
          label="Presence"
          placeholder="Presence"
          :error="form.formErrors.presentdays"
        />
      </VCol>

      <!-- 👉 absence -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.absentdays"
          label="Absence"
          placeholder="Absence"
          :error="form.formErrors.absentdays"
        />
      </VCol>

      <!-- 👉 delay -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.delays"
          label="Delay"
          placeholder="Delay"
          :error="form.formErrors.delays"
        />
      </VCol>

      <!-- 👉 debut -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.normalHours"
          label="Heure normal"
          placeholder="Heure normal"
          :error="form.formErrors.normalHours"
        />
      </VCol>

      <!-- 👉 fin -->
      <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.normalHoursComplementary"
          label="Heure normal complementaire"
          placeholder="Heure normal complementaire"
          :error="form.formErrors.normalHoursComplementary"
        />
      </VCol>

    

 <!-- 👉 heure sup -->
 <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.Overtime_15"
          label="Heure sup"
          placeholder="Heure sup"
          :error="form.formErrors.Overtime_15"
        />
      </VCol>

     <!-- 👉 heure sup 50 -->
 <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.Overtime_50"
          label="Heure sup"
          placeholder="Heure sup"
          :error="form.formErrors.Overtime_50"
        />
      </VCol>

      <!-- 👉 heure sup 75 -->
 <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.Overtime_75"
          label="Heure sup 75"
          placeholder="Heure sup 75"
          :error="form.formErrors.Overtime_75"
        />
      </VCol>
       <!-- 👉 heure sup 100 -->
 <VCol
        cols="12"
        md="6"
      >
      <VTextField
          type="number"
          v-model="form.Overtime_100"
          label="Heure sup 100"
          placeholder="Heure sup 100"
          :error="form.formErrors.Overtime_100"
        />
      </VCol>
        
 <!--shoxw toats message-->
 <VSnackbar 
      v-model="toast.show" 
      :timeout="3000" 
      :color="toast.color"
      top='top' >
    {{ toast.text }}
    <template #action="{ attrs }">
      <VBtn text v-bind="attrs" @click="toast.show = false">
        <VIcon>mdi-close</VIcon>
      </VBtn>
    </template>
  </VSnackbar>
      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Enregistré
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
</template>
