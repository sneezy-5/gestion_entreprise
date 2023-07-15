<script setup lang="ts">
import { ref,onUnmounted } from 'vue';
import { accountService } from '@/_services';



const showNotifications = ref(false);
const notifications = ref([]);
const GENERAL_NOTIFICATION_INTERVAL = 4000
	const GENERAL_NOTIFICATION_TIMEOUT = 5000

/*
		Retrieve the number of unread notifications. (This is the red dot in the notifications icon)
		Called every GENERAL_NOTIFICATION_INTERVAL
	*/


	// /*
	// 	Sets all the notifications currently visible as "read"
	// */
	// function setGeneralNotificationsAsRead(){
	// 		notificationSocket.send(JSON.stringify({
	// 			"command": "mark_notifications_read",
	// 		}));
	// 		getUnreadGeneralNotificationsCount()
		
	// }

	// /*
	// 	Retrieve the first page of notifications.
	// 	Called when page loads.
	// */
	// function getFirstGeneralNotificationsPage(){
	// 		notificationSocket.send(JSON.stringify({
	// 			"command": "get_general_notifications",
	// 			"page_number": "1",
	// 		}));
		
	// }



	// /*
	// 	Retrieve the next page of notifications
	// 	Called when the user scrolls to the bottom of the popup menu.
	// */
	// function getNextGeneralNotificationsPage(){
	// 	var pageNumber = 1

	// 		notificationSocket.send(JSON.stringify({
	// 			"command": "get_general_notifications",
	// 			"page_number": pageNumber,
	// 		}));
		
	// }

	// /*
	// 	Refresh the notifications that are currently visible
	// */



const headers = {
  'database': accountService.getDatabase(),
};
const unread_notif = ref(0)
//const socket = new WebSocket('ws://localhost:8000/notification/?token='+accountService.getToken());
const socket = new WebSocket('ws://localhost:8000/notification/?token='+accountService.getToken(), [], { headers });

function getUnreadGeneralNotificationsCount(){
			socket.send(JSON.stringify({
				"command": "get_unread_general_notifications_count",
			}));

      // get unread notification count
      socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      unread_notif.value = response.count

      //get general notification
      socket.send(JSON.stringify({
  "command": "get_general_notifications",
  page_number:1,
}));

socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response,'defez')

      
        notifications.value.pop()
        notifications.value.push(response.notifications)
        console.log(response.notifications,notifications)
      
}
      
      
};

		
	}

  const notificationContainer = document.getElementById('notification-container');

// Vérifiez si le nombre total de notifications dépasse 10
if (notifications.value.length > 10) {
  // Ajoutez une classe CSS pour déclencher l'animation de chargement
  notificationContainer.classList.add('pagination-loading');
  
  // Simulez une attente de chargement pendant quelques secondes (à titre d'exemple)
  setTimeout(() => {
    // Effectuez la pagination en ajoutant les nouvelles notifications au contenu
  
    // Supprimez la classe CSS pour terminer l'animation de chargement
    notificationContainer.classList.remove('pagination-loading');
  }, 2000); // ajustez la durée du chargement selon vos besoins
}

function refreshGeneralNotifications(){

  const oldestTimestamp =   Date.now()// Ajoutez ici la valeur de oldestTimestamp
  const newestTimestamp =  Date.now();// Ajoutez ici la valeur de newestTimestamp

  socket.send(JSON.stringify({
    "command": "refresh_general_notifications",
    "oldest_timestamp": oldestTimestamp,
    "newest_timestamp": newestTimestamp,
  }));

  socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response)

      if (response.general_msg_type === 2) {
      
        notifications.value.pop()
        notifications.value.push(response.notifications)
        console.log(response.notifications,notifications)
      }
}




}


function getGeneralNotifications(){

socket.send(JSON.stringify({
  "command": "get_general_notifications",
  page_number:1,
}));

socket.onmessage = (event) => {
      const response = JSON.parse(event.data);

      
        notifications.value.pop()
        notifications.value.push(response.notifications)
        console.log(response.notifications,notifications)
      
}

}

function getNewGeneralNotifications(){

socket.send(JSON.stringify({
  "command": "get_new_general_notifications",
  "newest_timestamp": Date.now(),
}));

socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response)

      notifications.value.pop()
      notifications.value.push(response.notifications)
      console.log(response.notifications,notifications)
}

}


	/*
		Sets all the notifications currently visible as "read"
	*/
	function setGeneralNotificationsAsRead(){

			socket.send(JSON.stringify({
				"command": "mark_notifications_read",
			}));
			getUnreadGeneralNotificationsCount()
		
	}

  /*
		Sets all the notifications currently visible as "read"
	*/
	function setGeneralNotificationsAsOpen(notif){

socket.send(JSON.stringify({
  "command": "mark_notifications_open",
  'notif_id':notif,
}));
getGeneralNotifications(notif)

}
function startGeneralNotificationService(){

//setInterval(refreshGeneralNotifications, GENERAL_NOTIFICATION_INTERVAL)
//setInterval(getGeneralNotifications, GENERAL_NOTIFICATION_INTERVAL)
setInterval(getUnreadGeneralNotificationsCount, GENERAL_NOTIFICATION_INTERVAL)

}
socket.addEventListener('open', () => {
  console.log('WebSocket connected');

  const get_unread_general_notifications_count = 'get_unread_general_notifications_count';
const command = {
  type: 'command',
  command: get_unread_general_notifications_count,
};

const command1 = {
  type: 'command',
  command: "get_general_notifications",
  page_number:1
};



socket.send(JSON.stringify(command));
socket.send(JSON.stringify(command1));

socket.onmessage = (event) => {
  const response = JSON.parse(event.data);
  console.log(response)
  if (response.general_msg_type === 4) {
     unread_notif.value = response.count
  }
  if (response.general_msg_type === 0) {
   
     notifications.value.push(response.notifications)
    // console.log(response.notifications,notifications)
  }
};
startGeneralNotificationService()

});


// socket.addEventListener('message', event => {
//   const notification = JSON.parse(event.data);
//   notifications.value.push(notification);
// });

// Se désabonner lors de la destruction du composant
onUnmounted(() => {
  socket.close();
});
</script>

<template>
  <VBadge
    location="top right"
    offset-x="3"
    offset-y="3"
    :content="unread_notif"
  >
    <VAvatar
      class="cursor-pointer"
      :color="showNotifications ? 'primary' : 'secondary'"
      variant="tonal"
      @click="showNotifications = !showNotifications"
    >
      <VIcon icon="mdi-bell-outline" @click="setGeneralNotificationsAsRead" />

      <!-- SECTION Menu -->

      <VMenu
        activator="parent"
        width="350"
        location="bottom end"
        offset="14px"
      >
        <div class="notification-container">
          <div
            class="notification-item"
            v-for="notif in notifications[0]"
            :key="notif.id"
      
          >
            <div class="notification-avatar">
              <VAvatar color="primary" variant="tonal">
                <VImg :src="'http://127.0.0.1:8000' + notif?.from?.image_url" />
              </VAvatar>
            </div>
            <div class="notification-content">

              <div class="notification-title"> {{ notif.from.user }}</div>
              <div class="notification-subtitle">
            
                <!-- <div class="notification-dot" v-if="notif.is_read =='False'"></div> -->
                <router-link :to="notif.actions.redirect_url" class="verb" @click="setGeneralNotificationsAsOpen(notif.notification_id)"> {{ notif.verb }}
                  
              </router-link>
                <!-- Ajouter le point de notification non lue -->
              
                <VBadge
                        location="end"
                        content=""
                        v-if="notif.is_open =='False'"
                      style="margin: 0px 0px 0px 80px;"
                    ></VBadge>
              </div>
         
              <div class="notification-subtitle">il y a {{ notif.natural_timestamp }}</div>
            </div>
          </div>
        </div>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>

<style>
.notification-container {
  max-height: 300px;
  overflow-y: auto;
  padding: 8px;
  width: 100%;
}

.notification-item {
  display: flex;
  align-items: center;
  padding:8px;
  margin-bottom: 0px;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
}

.notification-avatar {
  margin-right: 8px;
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-weight: bold;
}

.notification-subtitle {
  color: #888888;
}
.verb{
  color: rgb(12, 12, 12);
}
.pagination-loading {
  /* Styles d'animation de chargement */
  background-image: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  background-size: 200% 100%;
  animation: pagination-loading 1s ease-in-out infinite;
}

@keyframes pagination-loading {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.notification-dot {
  position: absolute;
  top: 20%; /* Positionnement au milieu */
  right: 20px; /* Ajustement horizontal */
  transform: translate(-50%, -50%); /* Centre horizontalement et verticalement */
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgb(15, 114, 228); /* Couleur du point de notification non lue */
}

</style>



