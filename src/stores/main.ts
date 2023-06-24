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
    is_admin: null,
  is_superadmin: null,
    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,


  }),
  actions: {
    // setUser(payload) {
    //   if (payload.userName) {
    //     this.userName = payload.userName;
    //   }
    //   if (payload.userEmail) {
    //     this.userEmail = payload.userEmail;
    //   }
    //   if (payload.userAvatar) {
    //     this.userAvatar = payload.userAvatar;
    //   }
    //   if (payload.is_admin) {
    //     this.is_admin = payload.is_admin;
    //   }
    //   if (payload.is_superadmin) {
    //     this.is_superadmin = payload.is_superadmin;
    //   }
    // },
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


    fetchAllProfile() {
      const role = accountService.getRole()
      const superadmin = role=='true'?'SuperAdmin':''
      const groups = accountService.getGroups()
      const groupsArray = [groups];
      const formattedArray: string[] = groupsArray[0].split(",").filter(item => item !== "");
      const admin =formattedArray.includes('admin')== true? 'Admin': ''
      const form=reactive({
        userName:'',
        userEmail:'',
        userAvatar:'',
        lastLogin:'',
        is_admin: admin,
        is_superadmin:superadmin==''?admin:superadmin
      })
      userService.getProfile()
        .then(res => {
          const profileData = res.data.results[0];
          if (profileData) {
           
            form.userName = profileData.username;
            form.userEmail = profileData.email;
            form.userAvatar = profileData.profile_image;
            form.lastLogin = profileData.last_login;
            this.userAvatar = profileData.profile_image
            this.userEmail = profileData.email
            this.userName = profileData.username
            this.is_superadmin = form.is_superadmin
          }
          console.log(form)
          //useMainStore().setUser(form)
          
        })
        .catch(error => {
          console.error(error);
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
