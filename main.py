# -*- coding: utf-8 -*-
import datetime, math

import sys
from PyQt5.QtGui import *
from PyQt5.QtCore import *

from PyQt5.QtWidgets import *
import hashlib

import os

from formlogin import Ui_Formlogin
from mainwindow import Ui_MainWindow
from model import ModelDir, Persnnel, Conge, Travail, Payement, UserDialog, ProjectDialog, TableModel, Client, \
    Profession, DemandeConge, LogOut, Payement_P
from personnelmain import Ui_PersonnelMain

# GLOBALS

counter = 0
jumper = 0

from PyQt5.QtWebEngineWidgets import QWebEngineView, QWebEnginePage


class Wper(QWebEngineView):

    def __init__(self):
        QWebEngineView.__init__(self)
        self.page().featurePermissionRequested.connect(self.permissionRequested)

    def permissionRequested(self, frame, feature):
        self.page().setFeaturePermission(frame, feature, QWebEnginePage.PermissionGrantedByUser)


class Personnelmain(QMainWindow):
    """class gerant les others users, toute personne ayant acces à la base de donner mais n'etant pas admin"""

    def __init__(self, title="Default", id=0, username="", parent=None):
        super(Personnelmain, self).__init__(parent)
        self.ui = Ui_PersonnelMain()
        self.title = title
        self.id = id
        self.username = username
        self.ui.setupUi(self)
        self.setWindowTitle(self.title)
        self.__GESTION_CONGE_EN = "gestion_conge_en"
        self.__GESTION_CONGE_AT = "gestion_attente_conge"
        self.__GESTION_CONGE_TE = "gestion_conge_termine"
        self.__GESTION_USER = "gestion_auth_user"
        self.GESTION_TAKS = "gestion_tache"
        self.dir = ModelDir()
        self.__demande_conge = DemandeConge(id=self.id)
        self.ui.labelTitle.setText("Pourcentage projet")
        self.tacheheader = ["id", "summary", "descreiption ", "start_date", "daed_line", "notification", "to_do",
                            "work_running", " work_done", "work_budget", " asigned_to", "admin", " project_step",
                            "project_taks_id "]
        self.project_header = ["id", " project_name", " p_client_id"]
        self.client_header = ["id", "client_name", " client_prenom", "client_contact", "client_email", "client_p",
                              "client_city", "client_contact2", " client_contry", "client_code", " client_genre"]
        self.user_header = ["id", "is_superuser ", "username", "password", "phone", "lass_login", "personnel_id"]
        self.work_header = [" id", "personnel", "profession", "debut_travail", "fin_travail","salaire", "prime"]

        #geston du chat
        self.ui.webView.page().featurePermissionRequested.connect(self.permissionRequested)
        self.ui.webView.setUrl(QUrl("http://localhost:8081/ "))

        ## ==> APPLY DROP SHADOW EFFECT
        self.shadow = QGraphicsDropShadowEffect(self)
        self.shadow.setBlurRadius(20)
        self.shadow.setXOffset(0)
        self.shadow.setYOffset(0)
        self.shadow.setColor(QColor(0, 0, 0, 120))
        self.ui.circularBg.setGraphicsEffect(self.shadow)

        ## QTIMER ==> START
        self.timer = QTimer()
        """self.timer.timeout.connect(self.progress)
        # TIMER IN MILLISECONDS
        self.timer.start(15)"""
        ## ==> SET INITIAL PROGRESS BAR TO (0) ZERO
        self.progressBarValue(0)

        # button click event
        self.ui.conge_button.clicked.connect(self.show_demande)
        self.__demande_conge.ui.demande.clicked.connect(self.demande)
        self.ui.modifier.clicked.connect(self.modifier)
        self.ui.valider.clicked.connect(self.add_taks)
        self.ui.actionaccount.triggered.connect(self.logout)
        self.ui.voir_rapport.clicked.connect(self.progress)
        self.ui.add_projct_button.clicked.connect(self.set_project)
        self.ui.project_statu.clicked.connect(self.set_project_statu)
        self.ui.projects_progress.clicked.connect(self.set_project_statu)
        self.ui.add_taks_button.clicked.connect(self.set_taksTabs)
        self.ui.payement_button.clicked.connect(self.payement)


        self.ui.sammary.setEnabled(False)
        self.ui.descrition.setEnabled(False)
        self.ui.start_date.setEnabled(False)
        self.ui.dead_line.setEnabled(False)
        self.ui.notificaton.setEnabled(False)
        # self.ui.to_do.addItem(str(eu[6]))
        self.ui.work_run.setEnabled(False)
        self.ui.work_done.setEnabled(False)
        self.ui.budget_work.setEnabled(False)
        self.ui.assigned_to.setEnabled(False)
        self.ui.admin_2.setEnabled(False)
        self.ui.project_step.setEnabled(False)
        self.ui.project.setEnabled(False)



        if self.dir.select_all("gestion_tache") == []:
            pass
        else:
            tab = []
            for x in self.dir.select_all("gestion_tache"):
                tab.append(x[1])
            self.ui.listView_2.setModel(QStringListModel(tab))
            self.ui.tableView.setModel(TableModel(self.dir.select_all_tache("gestion_tache", username), self.tacheheader))

        if not self.dir.select_all("gestion_project"):
            pass

        else:
            datas = []
            model =[]
            for x in self.dir.select_all_one('gestion_project', self.projectvalue()):
                #user = self.dir.select_all_id("gestion_client", x[2])
                datalist = list(x)
                datalist.pop(1)
                #datalist.pop(2)
                # datalist.pop(3)
                #datalist.append(x[0])
                datalist.append(x[1])
                #datalist.append(user[1])
                datalist.pop(1)
                datas.append(datalist)
                model.append(x[1])
                print(datas)
            self.ui.listView.setModel(QStringListModel(model))
            self.ui.project_tableview.setModel(TableModel(datas, self.project_header))
            self.ui.tableView_3.setModel(TableModel(datas, self.project_header))

        if not self.dir.select_all("gestion_client") :
            pass
        else:

            self.ui.tableView_5.setModel(TableModel(self.dir.select_all("gestion_client"), self.client_header))

    def permissionRequested(self, frame, feature):
        self.ui.webView.page().setFeaturePermission(frame, feature, QWebEnginePage.PermissionGrantedByUser)


    # logout user
    def logout(self):
        """deconnecte les users"""

        self.logout = LogOut()
        if self.logout.exec():
            exit(0)
        else:
            print("no")


    # gestion demande congé
    def show_demande(self):
        self.__demande_conge.show()

    # commande demande congé
    def demande(self):
        from datetime import date

        date_debut = date.today()
        self.dir.insert_att_conge(date_debut, date_debut, self.id)
        print("ok")

        datas = []

        for users in self.dir.select_all_per_id(self.__GESTION_CONGE_AT, self.id):
            user = self.dir.select_all_id(self.__GESTION_USER, self.id)
            datalist = list(users)
            datalist.pop(1)
            datalist.pop(2)
            # datalist.pop(3)
            datalist.append(QDate(users[1]))
            datalist.append(QDate(users[2]))
            datalist.append(user[2])
            datalist.pop(1)
            datas.append(datalist)


        self.model = TableModel(datas, self.work_header)
        self.__demande_conge.ui.tbale_conge.setModel(self.model)


    # modidier le satus des taches

    def add_taks(self):

        to_do = self.ui.to_do.currentText()

        self.dir.update_atche(to_do, self.modifier())

        self.ui.tableView.setModel(TableModel(self.dir.select_all_tache("gestion_tache", self.username), self.tacheheader))
        print("ok")

        # modifie tache

    def modifier(self):

        value = 0
        if self.ui.tableView.selectedIndexes():
            index = (self.ui.tableView.selectionModel().currentIndex())

            value = index.sibling(index.row(), 0).data()

            eu = self.dir.select_all_id(self.GESTION_TAKS, int(value))
            project = ""
            for i in self.dir.select_all("gestion_project"):
                if eu[13] in i:
                    project = i[1]

            print(eu[0])
            self.ui.sammary.setText(str(eu[1]))
            self.ui.descrition.setText(eu[2])
            self.ui.start_date.setDate((eu[3]))
            self.ui.dead_line.setDate((eu[4]))
            self.ui.notificaton.setDate(eu[5])
            #self.ui.to_do.addItem(str(eu[6]))
            self.ui.work_run.setDate(eu[7])
            self.ui.work_done.setDate(eu[8])
            self.ui.budget_work.setText(str(eu[9]))
            self.ui.assigned_to.addItem(eu[10])
            self.ui.admin_2.addItem(eu[11])
            self.ui.project_step.addItem(str(eu[12]))
            self.ui.project.addItem(str(project))
        return value

    def projectvalue(self):
        project_id = self.dir.select_all_tache("gestion_tache", self.username)
        id = 0
        for p_id in project_id:
            id = p_id[13]
            # print(p_id[13])
        return id

    ## DEF TO RETURN SELECT VALUE
    def setProgresseValue(self):
        values = 0
        if self.ui.tableView_3.selectedIndexes():
            index = self.ui.tableView_3.selectionModel().currentIndex()

            values = index.sibling(index.row(), 0).data()

        return  values

# -> gestion payement

    def payement(self):
        self.payement = Payement_P(self.username)
        self.payement.show()

    ## DEF TO LOANDING
    ########################################################################
    def progress(self):
        value = 0
        count = 0
        counts = 0
        todo = ""
        print(self.setProgresseValue())
        project_id = self.dir.select_all_tache("gestion_tache", self.username)
        id = 0
        for p_id in project_id:
            id = p_id[13]
            #print(p_id[13])
        print(id)


        taks = self.dir.select_all_proje("gestion_tache", id)

        for tak in taks:
            counts+=1

            todo = tak[6]

            self.ui.work_run_2.setDate(QDate(tak[7]))
            self.ui.work_done_2.setDate(QDate(tak[8]))

            if   tak[6] == "Complete":
                count+=1



        try:
            totol= count*100/counts
            value = math.floor(totol)
            if value == 0:
                todo = "To Do"
            elif value >0:
                todo = "In Progress "
            else:
                todo = "Complete"
            self.ui.todo.setText(todo)
        except ZeroDivisionError:
            pass
        # HTML TEXT PERCENTAGE
        htmlText = """<p><span style=" font-size:45pt;">{VALUE}</span><span style=" font-size:48pt; vertical-align:super;">%</span></p>"""

        # REPLACE VALUE
        newHtml = htmlText.replace("{VALUE}", str(value))
        self.ui.labelPercentage.setText(newHtml)


        # SET VALUE TO PROGRESS BAR
        # fix max value error if > than 100
        """if value >= 100:
            value = 1.000"""
        self.progressBarValue(value)


    ## DEF PROGRESS BAR VALUE
    ########################################################################
    def progressBarValue(self, value):

        # PROGRESSBAR STYLESHEET BASE
        styleSheet = """
            QFrame{
            	border-radius: 150px;
            	background-color: qconicalgradient(cx:0.5, cy:0.5, angle:90, stop:{STOP_1} rgba(255, 0, 127, 0), stop:{STOP_2} rgba(85, 170, 255, 255));
            }
            """

        # GET PROGRESS BAR VALUE, CONVERT TO FLOAT AND INVERT VALUES
        # stop works of 1.000 to 0.000
        progress = (100 - value) / 100.0

        # GET NEW VALUES
        stop_1 = str(progress - 0.001)
        stop_2 = str(progress)

        # SET VALUES TO NEW STYLESHEET
        newStylesheet = styleSheet.replace("{STOP_1}", stop_1).replace("{STOP_2}", stop_2)

        # APPLY STYLESHEET WITH NEW VALUES
        self.ui.circularProgress.setStyleSheet(newStylesheet)

     # pour aller à la page project
    def set_project(self):
        self.ui.tabWidget.setCurrentIndex(2)

    def set_project_statu(self):
        self.ui.tabWidget.setCurrentIndex(4)

    # set previous taks tabWidgt
    def set_taksTabs(self):
        self.ui.tabWidget.setCurrentIndex(3)




#############################################################################################################################################################
## Gesion admin
##############################################################################################################################################################

class Gestion(QMainWindow):
    """cette class serra las class pricipal du programme elle vas gérer toutes les fonctions de l'appli"""

    def __init__(self, title="Default", id=0, parent=None):
        super(Gestion, self).__init__(parent)
        self.ui = Ui_MainWindow()
        self.id = id
        self.title = title
        self.ui.setupUi(self)
        self.setWindowTitle(self.title)
        self.client = Client()
        self.dir = ModelDir()
        self.GESTION_TAKS = "gestion_tache"
        self.GESTION_USER = "gestion_auth_user"

        self.ui.labelTitle.setText("Pourcentage projet")
        self.tacheheader = ["id", "summary", "descreiption ", "start_date", "daed_line", "notification", "to_do", "work_running", " work_done", "work_budget", " asigned_to", "admin", " project_step", "project_taks_id "]
        self.project_header = ["id", " project_name", " p_client_id"]
        self.client_header = ["id", "client_name", " client_prenom", "client_contact", "client_email", "client_p", "client_city", "client_contact2", " client_contry", "client_code", " client_genre"]
        self.user_header = ["id", "is_superuser ", "username", "password", "phone", "lass_login", "personnel_id"]

        # geston du chat
        self.ui.webView.page().featurePermissionRequested.connect(self.permissionRequested)
        self.ui.webView.setUrl(QUrl("http://localhost:8081/ "))

        self.model = ""
        self.ui.new_user_button.clicked.connect(self.new_user)
        self.ui.add_projct_button.clicked.connect(self.set_project)
        self.ui.project_statu.clicked.connect(self.set_project_statu)
        self.ui.projects_progress.clicked.connect(self.set_project_statu)
        self.ui.remove_project.clicked.connect(self.remove_prject)
        self.ui.add_taks_button.clicked.connect(self.set_taksTabs)
        self.ui.add_Project.clicked.connect(self.create_proct)
        self.ui.add_project_B.clicked.connect(self.create_proct)
        self.ui.ad_projectButton.clicked.connect(self.create_proct)
        self.ui.personnel_button.clicked.connect(self.personnel)
        self.ui.conge_button.clicked.connect(self.conge)
        self.ui.work_buton.clicked.connect(self.travail)
        self.ui.payement_button.clicked.connect(self.payement)
        self.ui.contact_button.clicked.connect(self.clientForm)
        self.ui.business_button.clicked.connect(self.clientForm)
        self.ui.add_client.clicked.connect(self.clientForm)
        self.ui.profession.clicked.connect(self.professionForm)
        self.ui.valider.clicked.connect(self.add_taks)
        self.ui.modifier.clicked.connect(self.modifier)
        self.ui.remove.clicked.connect(self.remove_taks)
        self.ui.viedoacall_2.clicked.connect(self.call)
        self.ui.add_per.clicked.connect(self.add_user)
        self.ui.modifie_per.clicked.connect(self.modifier_user)
        self.ui.remove_per.clicked.connect(self.remove_user)
        self.ui.remove_client.clicked.connect(self.remove_client)
        self.ui.remove_project.clicked.connect(self.remove_prject)
        self.client.ui.valider.clicked.connect(self.add_client)
        self.ui.actionaccount.triggered.connect(self.logout)



        # une boucle sur la base de donner
        self.fresh()
        self.ui.voir_rapport.clicked.connect(self.progress)
        ## ==> APPLY DROP SHADOW EFFECT
        self.shadow = QGraphicsDropShadowEffect(self)
        self.shadow.setBlurRadius(20)
        self.shadow.setXOffset(0)
        self.shadow.setYOffset(0)
        self.shadow.setColor(QColor(0, 0, 0, 120))
        self.ui.circularBg.setGraphicsEffect(self.shadow)

        ## QTIMER ==> START
        self.timer = QTimer()
        """self.timer.timeout.connect(self.progress)
        # TIMER IN MILLISECONDS
        self.timer.start(15)"""
        ## ==> SET INITIAL PROGRESS BAR TO (0) ZERO
        self.progressBarValue(0)



        if self.dir.select_all("gestion_tache") == []:
            pass
        else:

            tab = []
            datas = []

            for x in self.dir.select_all("gestion_tache"):
                tab.append(x[1])
                user = self.dir.select_all_id("gestion_project", x[13])
                datalist = list(x)

                datalist.insert(3,QDate(x[3]))
                datalist.pop(4)
                datalist.insert(4,QDate(x[4]))
                datalist.pop(5)
                datalist.insert(5,QDate(x[5]))
                datalist.pop(6)
                datalist.insert(7,QDate(x[7]))
                datalist.pop(8)
                datalist.insert(8,QDate(x[8]))
                datalist.pop(9)
                datalist.insert(13,user[1])
                datalist.pop(14)
                #datalist.pop(1)
                datas.append(datalist)

            self.ui.listView_2.setModel(QStringListModel(tab))
            self.ui.tableView.setModel(TableModel(datas, self.tacheheader))


        if self.dir.select_all("gestion_client") == []:
            pass
        else:

            self.ui.tableView_5.setModel(TableModel(self.dir.select_all("gestion_client"),self.client_header))

        for i in self.dir.select_all("gestion_personnel"):
            self.ui.assigned_to.addItem(i[2])
        for i in self.dir.select_all("gestion_personnel"):
            self.ui.admin_2.addItem(i[2])
        for i in self.dir.select_all("gestion_project"):
            self.ui.project.addItem(str(i[1]))
        for i in range(1, 21):
            self.ui.project_step.addItem(str(i))

        if self.dir.select_all(self.GESTION_USER) == []:
            pass
        else:
            self.ui.usertableview.setModel(TableModel(self.dir.select_all(self.GESTION_USER), self.user_header))



        self.model = []
        if self.dir.select_all("gestion_project") == []:
            pass

        else:
            datas = []
            model =[]
            for x in self.dir.select_all('gestion_project'):
                user = self.dir.select_all_id("gestion_client", x[2])
                datalist = list(x)
                datalist.pop(1)
                #datalist.pop(2)
                # datalist.pop(3)
                #datalist.append(x[0])
                datalist.append(x[1])
                datalist.append(user[1])
                datalist.pop(1)
                datas.append(datalist)
                model.append(x[1])
                print(datas)
            self.ui.listView.setModel(QStringListModel(model))
            self.ui.project_tableview.setModel(TableModel(datas, self.project_header))
            self.ui.tableView_3.setModel(TableModel(datas, self.project_header))




        if self.ui.listView != "":
            self.ui.add_Project.hide()
        else:
            self.ui.add_Project.setHidden(False)


  # SET NAVIGATOR PERMISTION
    def permissionRequested(self, frame, feature):
        self.ui.webView.page().setFeaturePermission(frame, feature, QWebEnginePage.PermissionGrantedByUser)

  # logout user
    def logout(self):
        """deconnecte les users"""
        self.logout = LogOut()
        if self.logout.exec():
            exit(0)
        else:
            print("no")



    # call button
    def call(self, ):
        self.view = Wper()
        file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "zoom.html"))
        local_url = QUrl.fromLocalFile(file_path)
        self.view.load(local_url)
        # view.showFullScreen()

        self.view.show()

    # add user
    def add_user(self):
        encodepass = self.ui.passwordLineEdit.text().encode()
        password = hashlib.sha256(encodepass).hexdigest()
        personnel = 0
        for i in self.dir.select_all("gestion_personnel"):
            if self.ui.Personnel.currentText() in i:
                personnel = i[0]
        if self.ui.checkBox.isChecked():
            self.dir.insert_user(personnel, self.ui.username.text(), password, int(self.ui.phoneLineEdit_2.text()), 1)
        else:
            self.dir.insert_user(self.ui.Personnel.currentText(), self.ui.username.text(), password,
                                 int(self.ui.phoneLineEdit_2.text()), 0)

        try:
            if self.ui.usertableview.selectedIndexes():
                index = (self.ui.usertableview.selectionModel().currentIndex())

                value = index.sibling(index.row(), 0).data()
                self.dir.deleteOne(self.GESTION_USER, value)
        except AttributeError:
            pass
        finally:
            print("ok")
            self.ui.usertableview.setModel(TableModel(self.dir.select_all(self.GESTION_USER), self.user_header))

    # modifie personnel
    def modifier_user(self):

        if self.ui.usertableview.selectedIndexes():
            index = (self.ui.usertableview.selectionModel().currentIndex())

            value = index.sibling(index.row(), 0).data()
            eu = self.dir.select_all_id(self.GESTION_USER, int(value))
            personnel = ""
            for i in self.dir.select_all("gestion_personnel"):
                if eu[6] in i:
                    personnel = i[2]
            print(eu[1])
            print(i[2])
            self.ui.Personnel.addItem(personnel)
            self.ui.username.setText(eu[2])
            self.ui.phoneLineEdit_2.setText(str(eu[4]))
            self.ui.passwordLineEdit.setText(eu[3])
            if eu[1] == 1:
                self.ui.checkBox.setChecked(True)
            else:
                self.ui.checkBox.setChecked(False)

    # fonction de rafrchissement
    def fresh(self):
        mess = self.dir.select_all("gestion_message")

        # self.ui.message.setModel(self.models)

        """while  now.minute >=30:
            #now = datetime.now()
            print(now.minute)
            if now.minute == 2:
                self.ui.message.setModel(self.models)"""

    # delete user
    def remove_user(self):

        if self.ui.usertableview.selectedIndexes():
            index = self.ui.usertableview.selectionModel().currentIndex()

            value = index.sibling(index.row(), 0).data()


            indexes = self.ui.usertableview.selectionModel().selectedRows()
            for indexs in sorted(indexes):

                self.dir.deleteOne(self.GESTION_USER, indexs.sibling(indexs.row(), 0).data())
            self.ui.usertableview.setModel(TableModel(self.dir.select_all(self.GESTION_USER), self.user_header))

    def setProgresseValue(self):
        values = 0
        if self.ui.tableView_3.selectedIndexes():
            index = self.ui.tableView_3.selectionModel().currentIndex()

            values = index.sibling(index.row(), 0).data()

        return  values



    ## DEF TO LOANDING
    ########################################################################
    def progress(self):

            global counter
            global jumper

            count = 0
            counts = 0
            value = 0

            project_id = self.dir.select_all_proje("gestion_tache", self.setProgresseValue())

            id = 0

            for p_id in project_id:
                id = p_id[13]

            taks = self.dir.select_all_proje("gestion_tache", id)

            for tak in taks:
                counts += 1
                todo = tak[6]

                self.ui.todo.setText(todo)
                self.ui.work_run_2.setDate(QDate(tak[7]))
                self.ui.work_done_2.setDate(QDate(tak[8]))


                if tak[6] == "Complete":
                    count += 1

            try:
                totol = count * 100 / counts
                value = math.floor(totol)
                if value == 0:
                    todo = "To Do"
                elif value > 0:
                    todo = "In Progress "
                else:
                    todo = "Complete"
                self.ui.todo.setText(todo)
            except ZeroDivisionError:
                pass

            # HTML TEXT PERCENTAGE
            htmlText = """<p><span style=" font-size:45pt;">{VALUE}</span><span style=" font-size:58pt; vertical-align:super;">%</span></p>"""

            # REPLACE VALUE
            newHtml = htmlText.replace("{VALUE}", str(value))
            self.ui.labelPercentage.setText(newHtml)

            # SET VALUE TO PROGRESS BAR
            # fix max value error if > than 100
            """if value >= 100:
                value = 1.000"""
            self.progressBarValue(value)



    ## DEF PROGRESS BAR VALUE
    ########################################################################
    def progressBarValue(self, value):

        # PROGRESSBAR STYLESHEET BASE
        styleSheet = """
            QFrame{
            	border-radius: 150px;
            	background-color: qconicalgradient(cx:0.5, cy:0.5, angle:90, stop:{STOP_1} rgba(255, 0, 127, 0), stop:{STOP_2} rgba(85, 170, 255, 255));
            }
            """

        # GET PROGRESS BAR VALUE, CONVERT TO FLOAT AND INVERT VALUES
        # stop works of 1.000 to 0.000
        progress = (100 - value) / 100.0

        # GET NEW VALUES
        stop_1 = str(progress - 0.001)
        stop_2 = str(progress)

        # SET VALUES TO NEW STYLESHEET
        newStylesheet = styleSheet.replace("{STOP_1}", stop_1).replace("{STOP_2}", stop_2)

        # APPLY STYLESHEET WITH NEW VALUES
        self.ui.circularProgress.setStyleSheet(newStylesheet)

    # add user

    def add_taks(self):

        date1 = self.ui.strat_date.text()
        date2 = self.ui.dead_line.text()
        date3 = self.ui.notificaton.text()
        date4 = self.ui.work_run.text()
        date5 = self.ui.work_done.text()
        budjet = self.ui.budget_work.text()
        print(date5)
        asignet_to = self.ui.assigned_to.currentText()
        admin = self.ui.admin_2.currentText()
        project_step = self.ui.project_step.currentText()
        project = 0
        to_do = self.ui.to_do.currentText()

        for i in self.dir.select_all("gestion_project"):
            if self.ui.project.currentText() in i:
                project = i[0]
        date_debut = datetime.date(int(date1[6:10]), int(date1[3:5]), int(date1[0:2]))
        date_fin = datetime.date(int(date2[6:10]), int(date2[3:5]), int(date2[0:2]))
        date_notif = datetime.date(int(date3[6:10]), int(date3[3:5]), int(date3[0:2]))
        date_work_r = datetime.date(int(date4[6:10]), int(date4[3:5]), int(date4[0:2]))
        date_work_done = datetime.date(int(date5[6:10]), int(date5[3:5]), int(date5[0:2]))

        self.dir.insert_tache(self.ui.sammary.text(), self.ui.descrition.toPlainText(), date_debut, date_fin,
                              date_notif, to_do,
                              date_work_r, date_work_done, int(budjet), asignet_to, admin, int(project_step), project)

        self.dir.deleteOne(self.GESTION_TAKS, self.modifier())
        self.ui.tableView.setModel(TableModel(self.dir.select_all("gestion_tache"), self.tacheheader))

        print("ok")

    # modifie tache

    def modifier(self):

        value = 0
        if self.ui.tableView.selectedIndexes():
            index = (self.ui.tableView.selectionModel().currentIndex())

            value = index.sibling(index.row(), 0).data()

            eu = self.dir.select_all_id(self.GESTION_TAKS, int(value))
            project = ""
            for i in self.dir.select_all("gestion_project"):
                if eu[13] in i:
                    project = i[1]

            print(eu[0])
            self.ui.sammary.setText(str(eu[1]))
            self.ui.descrition.setText(eu[2])
            self.ui.strat_date.setDate((eu[3]))
            self.ui.dead_line.setDate((eu[4]))
            self.ui.notificaton.setDate(eu[5])
            self.ui.to_do.addItem(str(eu[6]))
            self.ui.work_run.setDate(eu[7])
            self.ui.work_done.setDate(eu[8])
            self.ui.budget_work.setText(str(eu[9]))
            self.ui.assigned_to.addItem(eu[10])
            self.ui.admin_2.addItem(eu[11])
            self.ui.project_step.addItem(str(eu[12]))
            self.ui.project.addItem(str(project))
        return value

    # delete
    def remove_taks(self):

        if self.ui.tableView.selectedIndexes():
            index = self.ui.tableView.selectionModel().currentIndex()

            #value = index.sibling(index.row(), 0).data()

            indexes = self.ui.tableView.selectionModel().selectedRows()
            for indexs in sorted(indexes):

                print(indexs.sibling(indexs.row(), 0).data())
                self.dir.deleteOne(self.GESTION_TAKS, indexs.sibling(indexs.row(), 0).data())
        tab = []
        datas = []
        for x in self.dir.select_all("gestion_tache"):
            tab.append(x[1])
            user = self.dir.select_all_id("gestion_project", x[14])
            datalist = list(x)
            datalist.pop(1)
            datalist.pop(2)
            # datalist.pop(3)
            datalist.append(QDate([5]))
            datalist.append(QDate(x[6]))
            datalist.append(QDate(x[7]))
            datalist.append(QDate(x[9]))
            datalist.append(QDate(x[10]))
            datalist.pop(1)
            datas.append(datalist)
            print(datas)
        self.ui.listView_2.setModel(QStringListModel(tab))
        self.ui.tableView.setModel(TableModel(datas, self.tacheheader))
        print("okkkk")

    def remove_prject(self):

        if self.ui.project_tableview.selectedIndexes():
            index = self.ui.project_tableview.selectionModel().currentIndex()

            # value = index.sibling(index.row(), index.column()).data()

            indexes = self.ui.project_tableview.selectionModel().selectedRows()
            for indexs in sorted(indexes):

                self.dir.deleteOne("gestion_project", indexs.sibling(indexs.row(), 0).data())
        tab = []
        for x in self.dir.select_all("gestion_project"):
            tab.append(x[1])
        try:
            TableModel(self.dir.select_all("gestion_project"))
        except IndexError:
            pass
        finally:
            self.ui.listView.setModel(QStringListModel(tab))
            self.ui.project_tableview.setModel(TableModel(self.dir.select_all("gestion_project"), self.project_header))

    def remove_client(self):

        if self.ui.tableView_5.selectedIndexes():
            index = self.ui.tableView_5.selectionModel().currentIndex()

            # value = index.sibling(index.row(), index.column()).data()

            indexes = self.ui.tableView_5.selectionModel().selectedRows()
            for indexs in sorted(indexes):

                self.dir.deleteOne("gestion_client", indexs.sibling(indexs.row(), 0).data())
        tab = []
        for x in self.dir.select_all("gestion_client"):
            tab.append(x[1])
        try:
            TableModel(self.dir.select_all("gestion_client"))
        except IndexError:
            pass
        finally:
            self.ui.tableView_5.setModel(TableModel(self.dir.select_all("gestion_client"), self.client_header))

    def new_user(self):

        dlg = UserDialog()  # If you pass self, the dialog will be centered over the main window as before.
        if dlg.exec_():
            print("Success!")
            personnel = 0
            phone = 0
            for i in self.dir.select_all("gestion_personnel"):
                if dlg.firt_name.currentText() in i:
                    personnel = i[0]
                    phone = i[6]
            encodepass = dlg.password.text().encode()
            password = hashlib.sha256(encodepass).hexdigest()
            print(password)
            if dlg.admin.isChecked():
                self.dir.insert_user(personnel, dlg.username.text(), password, phone, 1)
            else:
                self.dir.insert_user(personnel, dlg.username.text(), password, phone, 0)
            # self.ui.tableView_4.setModel(TableModel())

        else:
            print("Cancel!")

    # pour aller à la page project
    def set_project(self):
        self.ui.tabWidget.setCurrentIndex(2)

    def set_project_statu(self):
        self.ui.tabWidget.setCurrentIndex(4)

    # set previous taks tabWidgt
    def set_taksTabs(self):
        self.ui.tabWidget.setCurrentIndex(3)

    # create a new project
    def create_proct(self):
        dlg = ProjectDialog()
        rec = 0
        if self.dir.select_all("gestion_client") == []:
            pass
        else:
            for i in self.dir.select_all("gestion_client"):
                dlg.client_name.addItem(str(i[1]))

        if dlg.exec_():
            for i in self.dir.select_all("gestion_client"):
                if dlg.client_name.currentText() in i:
                    rec = i[0]

            model = []
            datas = []
            p_n = dlg.project_name.text()
            self.dir.insert_project(p_n, rec)
            for x in self.dir.select_all('gestion_project'):
                user = self.dir.select_all_id("gestion_client", x[2])
                datalist = list(x)
                datalist.pop(1)
                # datalist.pop(2)
                # datalist.pop(3)
                # datalist.append(x[0])
                datalist.append(x[1])
                datalist.append(user[1])
                datalist.pop(1)
                datas.append(datalist)
                model.append(x[1])
            self.ui.listView.setModel(QStringListModel(model))
            self.ui.project_tableview.setModel(TableModel(datas))
            self.ui.tableView_3.setModel(TableModel(datas, self.project_header))

            print("Success!")
        else:
            print("Cancel!")

    def personnel(self):
        self.main = Persnnel()
        self.main.show()

    # congé fonc
    def conge(self):
        self.conge = Conge()
        self.conge.show()

    # travail fonc
    def travail(self):
        self.travail = Travail()
        self.travail.show()

    # ->
    def payement(self):
        self.payement = Payement()
        self.payement.show()

    # client form
    def clientForm(self):
        self.client.show()

    def add_client(self):

        print(self.client.ui.phoneLine.text())
        a = int(self.client.ui.codeLine.text())
        b = int(self.client.ui.phoneLine.text())
        c = int(self.client.ui.phoneLine2.text())
        d = self.client.ui.comboBox.currentText()
        print(type(a))
        self.dir.insert_client(a, self.client.ui.nameLine.text(), self.client.ui.prenomLine.text(), d,
                               self.client.ui.emailLine.text(),
                               self.client.ui.cityLine.text(), self.client.ui.contryLine.text(), b, c)
        print("ok")
        self.ui.tableView_5.setModel(TableModel(self.dir.select_all("gestion_client"), self.client_header))

    def professionForm(self):
        self.profession = Profession()
        self.profession.show()


class FormLogin(QMainWindow):
    def __init__(self):
        super(FormLogin, self).__init__()
        self.ui = Ui_Formlogin()
        self.ui.setupUi(self)
        self._activated = True
        self._handlers = {
            QEvent.KeyPress: Qt.Key_Enter,
            #QEvent.KeyRelease: self._handle_key_event,
            #QEvent.ShortcutOverride: self._handle_key_event,
        }
        self.__GESTION_USER = "gestion_auth_user"
        self.dir = ModelDir()
        self.ui.valider.clicked.connect(self.valider)
        self.ui.erreur.setText("")
        self.setStyleSheet("""
             QWidget{
            background: rgb(5, 175, 250) 
        }
         QPushButton
        {
            color: white;
            background: #0577a8;
            border: 1px #DADADA solid;
            padding: 5px 10px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 9pt;
            outline: none;
            
        }
        
        QLineEdit{
            background: rgba(69, 157, 128, 218);
            border: none;
            border-radius: 5px;
            outline: none;
            height: 30px;
        }
        
    
        
        """)

    def valider(self):

        username = self.ui.userNameLineEdit.text()
        password = self.ui.passWordLineEdit.text().encode()
        pass_encode = hashlib.sha256(password).hexdigest()
        dico = {}
        dico_2 = {}
        for i in self.dir.select_all(self.__GESTION_USER):
            dico[i[2]] = i[3]
            dico_2[i[2]] = i[1]
            try:
                if dico[username] == pass_encode:

                    if dico_2[username] == 1:
                        if username in i:
                            id = i[0]
                            print(id)
                            self.main = Gestion(id=id)
                            self.main.show()
                        # self.close()
                    else:
                        if username in i:
                            id = i[0]
                            print(id)
                            self.personnelmain = Personnelmain(id=id, username=username)
                            self.personnelmain.show()
                    self.close()
                    self.ui.erreur.setStyleSheet("""color:orange;""")

                else:
                    print("erreur")
                    self.ui.erreur.setText("incorrect veillez verifier votre username ou password")
                    self.ui.erreur.setStyleSheet("""color:red;""")
            except KeyError:
                self.ui.erreur.setText("incorrect veillez verifier votre username ou password")
                self.ui.erreur.setStyleSheet("""color:red;""")
                print("pass")

        print(dico_2)


# comme dans un programme ordinaire nous lançons le programme
if __name__ == "__main__":
    app = QApplication(sys.argv)

    # myWindow = Gestion('Gestion Entreprise')
    formwin = FormLogin()

    style = """
        QWidget{
            background-color:  
        }
         QPushButton
        {
            color: white;
            background: #0577a8;
            border: 1px #DADADA solid;
            padding: 5px 10px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 9pt;
            outline: none;
        }
        
         QPushButton#viedoacall
        {
            border-radius: 13px;
            width: 17px;
            height: 17px;
        }
        
         QPushButton#sender
        {
            border-radius: 15px;
            width: 10px;
            height: 10px;
        }

        QPushButton:hover{
            border: 1px #C6C6C6 solid;
            color: #fff;
            background: #0892D0;
            }
        QLabel{
            color: #FFF;
            background-color: #234652;
        }
        
         QLabel#label_3, #proejct_label,#report_label{
            color: yellow;
            background-color: #0C4B54;
        
        }
        
        QFrame#frame_6,#frame_5,#frame_7, #frame_8, #frame_10{
             background-color:#0C4B54;
        }
        
         QLineEdit#contact_l, #client_l,#sammary{
            background: #0892D0;
            border: none;
            border-radius: 5px;
            outline: none;
            height: 30px;
        }
        
        QTextEdit#descrition{
            background:#0892D0;
            border: none;
            border-radius: 5px;
            outline: none;
            height: 30px;
        }
        
        QTextEdit#messageinput{
            border: none;
            border-radius: 5px;
            outline: none;
            height: 10px;
        }
        
        #QListView#message{
             background: rgba(69, 157, 128, 218);
            border: none;
            border-radius: 5px;
            outline: none;
        }
        

        
    """
    app.setStyleSheet(style)

    # myWindow.show()
    formwin.show()

    sys.exit(app.exec_())
