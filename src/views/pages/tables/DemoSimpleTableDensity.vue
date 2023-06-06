<!-- <script setup lang="ts">
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  
]
</script>

<template>
  <VTable density="compact">
    <thead>
      <tr>
        <th class="text-uppercase">
          Desserts(100g Servings)
        </th>
        <th class="text-uppercase text-center">
          calories
        </th>
        <th class="text-uppercase text-center">
          Fat(g)
        </th>
        <th class="text-uppercase text-center">
          Carbs(g)
        </th>
        <th class="text-uppercase text-center">
          protein(g)
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
      </tr>
    </tbody>
  </VTable>
</template> -->
<template>

  <div>
    <div class="flex-end">
      <VBtn to="/create-employe">Ajouter</VBtn>
    </div>
   
    <VTable density="compact">
      <thead>
      <tr>
        <th class="text-uppercase">
          Nom
        </th>
        <th class="text-uppercase text-center">
          Prénom
        </th>
        <th class="text-uppercase text-center">
          Poste
        </th>
        <th class="text-uppercase text-center">
          Salaire de base
        </th>
        <th class="text-uppercase text-center">
          Creadet_at
        </th>
        <th class="text-uppercase text-center">
          Action
        </th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="(item, index) in displayedDesserts" :key="item.dessert">
          <td>
          {{ item.dessert }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
        <td class="text-center">
          <button @click="editDessert(index)">
              <i class="fas fa-edit"></i> 
            </button>
            <button @click="showDessert(index)">
              <i class="fas fa-eye"></i> 
            </button>
            <button @click="deleteDessert(index)">
              <i class="fas fa-trash"></i> 
            </button>
          </td>
        </tr>
      </tbody>
    </VTable>

        <!-- 👉 Pagination -->
        <VCol
        cols="12"
        md="6"
      >
        <VPagination
         
        />
     </VCol>
  
  </div>
</template>

<script>

export default {
  data() {
    return {
      desserts: [
      {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
      ], // Données complètes provenant du backend
      pageSize: 5, // Nombre d'éléments à afficher par page
      currentPage: 1, // Page actuelle
      previousClicked: false,
      nextClicked: false,
    };
  },
  computed: {
    displayedDesserts() {
      // Calcul des éléments à afficher sur la page actuelle
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.desserts.slice(startIndex, endIndex);
    },
    hasNextPage() {
    
      // Vérification s'il y a une page suivante
      const totalPages = Math.ceil(this.desserts.length / this.pageSize);
      return this.currentPage < totalPages;
    },
  },
  methods: {
    nextPage() {
      // Chargement de la page suivante
      this.nextClicked = true;
      this.currentPage++;
      setTimeout(() => {
        this.nextClicked = false;
      }, 500);
      // Appeler le backend pour récupérer les données de la prochaine page
      // Utilisez le lien de la prochaine page depuis le backend pour effectuer la requête appropriée
      // Mettez à jour this.desserts avec les nouvelles données
    },

    previousPage() {
      // Chargement de la page précédente
      this.currentPage--;
      this.previousClicked = true;
      setTimeout(() => {
        this.previousClicked = false;
      }, 500);
      // Appeler le backend pour récupérer les données de la page précédente
      // Utilisez le lien de la page précédente depuis le backend pour effectuer la requête appropriée
      // Mettez à jour this.desserts avec les nouvelles données
    },
  },
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.pagination {
  margin-top: 10px;
  text-align: center;
}

.pagination button {
  background-color: transparent;
  border: none;
  color: #000;
  cursor: pointer;
  margin: 0 5px;
}

.pagination button i {
  margin-right: 5px;
  transition: color 0.3s ease;
}

.pagination button.active i {
  color: blue;
}

.pagination button.clicked i {
  animation: clickAnimation 0.3s;
}

@keyframes clickAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.flex-end{
  display: flex;
  justify-content: end;
  margin-right: 10px;
}
</style>