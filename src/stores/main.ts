import { defineStore } from "pinia";
import axios from "axios";
import { accountService, employeesService, contractService, congeService, primeService, avanceService, projetService, tacheService, userService, demandeCongeService, transactionService, tresorieService, fournisseurService, dashboardService, compteService } from "@/_services";
import { presenceService } from "@/_services/presences.service";
import { payslipsService } from "@/_services/payslips.service";

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userId:null,
    userName: null,
    userEmail: null,
    userAvatar: null,
    lastLogin:null,
    isLoggedIn: accountService.isLogged(),
    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
    employes: [],
    contracts: [],
    payslips: [],
    presences: [],
    avances: [],
    primes: [],
    conges: [],
    demandeconges: [],
    projets: [],
    taches:[],
    users:[],
    comptes:[],
    dashboard:{},
    fournisseurs:[],
    transacions:[],
    tresoririe:[],
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.username;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },
    login(user) {
      this.isLoggedIn = true
  
      this.userName = user
    },

   logout() {
   // alert('deconecté')
   // accountService.logout()
    this.isLoggedIn = false
    //router.push('/auth/login')
  },
    fetch(sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((  ) => {
          alert(error.message);
        });
    },



    fetchAllProfile() {
      userService.getProfile().
      then(res => {
        this.userId = res.data.results[0].id
        this.userName = res.data.results[0].username
        this.userEmail = res.data.results[0].email
        this.userAvatar = res.data.results[0].profile_image
        this.lastLogin = res.data.results[0].last_login
    })
    .catch((error) => {
         if (error.status == "401") {
            console.error(error)
         }
     });

    },

    fetchAllEmployees() {
      employeesService.getAllEmployees()
      .then(res => {
        this.employes = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.employes.push(data[i]);
        } 
        //console.log(this.employes,data)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status ="401"){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     }).finally(() => {
         //Perform action in always
     });

    },

    fetchAlConge() {
      congeService.getAllConges()
      .then(res => {
        this.conges = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.conges.push(data[i]);
        } 
     //  console.log('conge',this.conges)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllContracts() {
      contractService.getAllContracts()
      .then(res => {
        this.contracts = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.contracts.push(data[i]);
        } 
      //  console.log(this.contracts)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllPrimes() {
      primeService.getPrimes()
      .then(res => {
        this.primes = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.primes.push(data[i]);
        } 
       // console.log(this.categories)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllPresence() {
      presenceService.getAllPresences()
      .then(res => {
        this.presences = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.presences.push(data[i]);
        } 
        //console.log(this.presences)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllAvanes() {
      avanceService.getAllAvance()
      .then(res => {
        this.avances = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.avances.push(data[i]);
        } 
        //console.log(this.iventories)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllProjets() {
      projetService.getProjects()
      .then(res => {
        this.projets = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.projets.push(data[i]);
        } 
       // console.log(this.projets)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },


    fetchAllTaches() {
      tacheService.getAllTaches()
      .then(res => {
        this.taches = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.taches.push(data[i]);
        } 
       // console.log(this.taches)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },


    fetchAllUsers() {
      userService.getAllUsers()
      .then(res => {
        this.users = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.users.push(data[i]);
        } 
        //console.log(this.users)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },



    fetchAllUPayslip() {
      payslipsService.getAllPayslips()
      .then(res => {
        this.payslips = []
        const data = res.data.results
        // for (let i = 0; i < data.length; i++) {
        //   this.payslips.push(data[i]);
        // } 
        this.payslips.push(res.data)
       // console.log(this.payslips)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },


    fetchAllDemandeConge() {
      demandeCongeService.getAllDeamndeConges()
      .then(res => {
        this.demandeconges = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.demandeconges.push(data[i]);
        } 
       // console.log(this.payslips)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllTransations() {
      transactionService.getAllTransactions()
      .then(res => {
        this.transacions = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.transacions.push(data[i]);
        } 
       // console.log(this.payslips)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },


    fetchAllFournisseurs() {
      fournisseurService.getAllFournisseurs()
      .then(res => {
        this.fournisseurs = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.fournisseurs.push(data[i]);
        } 
       // console.log(this.payslips)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

    fetchAllCompte() {
      compteService.getAllComptes()
      .then(res => {
        this.comptes = []
        const data = res.data.results
        for (let i = 0; i < data.length; i++) {
          this.comptes.push(data[i]);
        } 
       // console.log(this.payslips)
    })
    .catch((error) => {
         // error.response.status Check status code
            if(error.status =403){
                    //console.error(error.response.data.message);
                   
                    console.error(error)
         
            }
     
     })

    },

  },
});
