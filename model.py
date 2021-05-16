# -*- coding: utf-8 -*-
import mysql.connector
import datetime

from PyQt5.QtGui import *
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *


from client import Ui_Client
from demande import Ui_demandeConge
from payement import Ui_Payement
from personnel import Ui_Personnel
from profession import Ui_Profession
from travail import Ui_Travail
from conge import Ui_Conge


class TableModel(QAbstractTableModel):
    def __init__(self, data, headerdata):
        super(TableModel, self).__init__()

        self._data = data
        self.header_labels = headerdata
        # self.headerdata = headerdata

    def headerData(self, section, orientation, role=Qt.DisplayRole):
        if role == Qt.DisplayRole and orientation == Qt.Horizontal:
            return self.header_labels[section]
        return QAbstractTableModel.headerData(self, section, orientation, role)

    """def headerData(self, col, orientation, role):
        if orientation == Qt.Horizontal and role == Qt.DisplayRole:
            return QVariant(self.headerdata[col])
        return QVariant()"""

    def data(self, index, role):
        if role == Qt.DisplayRole:
            # See below for the nested-list data structure.
            # .row() indexes into the outer list,
            # .column() indexes into the sub-list

            return self._data[index.row()][index.column()]

    def rowCount(self, index):
        # The length of the outer list.

        return len(self._data)

    def columnCount(self, index):
        # The following takes the first sub-list, and returns
        # the length (only works if all rows are an equal length)

        return len(self._data[0])


# model
class ModelDir():
    def __init__(self):
        super(ModelDir, self).__init__()
        self.connect = mysql.connector.connect(host="192.168.43.251",
                                               user="sneezy", password="louisette14",
                                               database="gestion_entreprise", auth_plugin='mysql_native_password')
        self.cursor = self.connect.cursor()
        # self.connect.close()

    def delete(self, a, *id):
        for i in id:
            # requ = "delete from Personnel where id in (%d) " % i
            ex = self.cursor.execute("delete from %s where id in (%d) " % (a, i))

        self.connect.commit()
        # self.connect.close()
        return ex

    def deleteOne(self, a, id):
        # requ = "delete from Personnel where id in (%d) " % i
        ex = self.cursor.execute("delete from %s where  id=%s " % (a, id))

        self.connect.commit()
        # self.connect.close()
        return ex

    def update_atche(self, a, id):
        """select in database personnel table values"""

        requ = "update gestion_tache set to_do='%s' where id=%d " % (a, id)
        self.cursor.execute(requ)
        self.connect.commit()

    def select_all_id(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where id=%d" % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchone()
        # print(ex)
        return ex


    def select_all_mess(self, id, a):
        """select in database personnel table values"""

        requ = "select message from gestion_message where user_id=%d and user_receive='%s'" % (id, a)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex


    def select_all_other_mess(self, id, a):
        """select in database personnel table values"""

        requ = "select message from gestion_message where  user_receive='%s' and user_id=%d " % (id, a)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex


    def select_all_other_id(self, a):
        """select in database personnel table values"""

        requ = "select id from gestion_auth_user where username='%s' " % (a)
        self.cursor.execute(requ)
        ex = self.cursor.fetchone()
        # print(ex)
        return ex

    def select_all_trav(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where code_p='%s'" % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex

    def select_all_paye(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where nom_employer='%s'" % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex

    def select_all_one(self, a, id):
        """foncton creer  defaut de devoir tous modfier pour les autres avec select_all_id"""

        requ = "select * from %s where id=%d" % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex

    def select_all_user(self, a):
        """select in database personnel table values"""

        requ = "select id from gestion_auth_user where username='%s'" % (a)
        self.cursor.execute(requ)
        ex = self.cursor.fetchone()
        # print(ex)
        return ex

    def select_all_per_id(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where personnel_id=%d" % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex

    # SELECTIONNE TOUTES LES DONNEES D'UNE TABLES
    def select_all(self, a):
        """select in database personnel table values"""

        requ = "select * from %s " % (a)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex

    def select_client_name(self):
        "select client name by project_id"
        requ = "select client_name from gestion_client where id in (select p_client_id from gestion_project)"
        self.cursor.execute(requ)
        ex = self.cursor.fetchal()
        return ex

    def select_all_tache(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where asigned_to='%s' " % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex

    def select_all_proje(self, a, id):
        """select in database personnel table values"""

        requ = "select * from %s where project_taks_id='%s' " % (a, id)
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex

    def select_all_(self):
        """select in database personnel table values"""

        requ = "select * from gestion_auth_user where id= (select  user_id from gestion_message  ) "
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()
        # print(ex)
        return ex

    # insert into userForm
    def insert_user(self, a, b, c, d, e):
        """insert in database project table values"""

        requ = "insert into gestion_auth_user (id,  personnel_id,  username,  password, phone, is_superuser  ) values(null, '%s', '%s','%s','%s', '%s')" % (
            a, b, c, d, e)
        self.cursor.execute(requ)
        self.connect.commit()
        # self.connect.close()

    def insert_project(self, a, b):
        """insert in database project table values"""

        requ = "insert into gestion_project (id, project_name, p_client_id  ) values(null, '%s','%s')" % (a, b)
        self.cursor.execute(requ)
        self.connect.commit()
        # self.connect.close()

    def inset_personnel(self, a, b, c, d, e, f):
        """insert into personnel values """
        # requ = "insert into store_travail values(?,?,?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_personnel (id, cni , name,  firt_name, adresse, phone, email) values( null, %s, %s, %s, %s, %s, %s)",
            (a, b, c, d, e, f))
        self.connect.commit()
        # self.connect.close()

    def inset_profession(self, a, b, c, d):
        """insert into profession values """
        # requ = "insert into store_travail values(?,?,?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_profession (id, code,  intitule, salaire, prime) values(null, %s, %s, %s, %s)",
            (a, b, c, d))
        self.connect.commit()
        # self.connect.close()

    def inset_paye(self, a, b, c):
        """insert into profession values """
        # requ = "insert into store_travail values(?,?,?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_paye (id, nom_employer, profession, date_payement  ) values(null, %s, %s, %s)",
            (a, b, c))
        self.connect.commit()
        # self.connect.close()

    def insert_client(self, a, b, c, d, e, f, g, h, i):
        """insert into user values """

        # requ = "insert into User values(?,?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_client (id, client_code,client_name, client_prenom, client_genre, client_email,client_city, client_contry,  client_contact, client_contact2) values(null, %s, %s, %s, %s, %s , %s, %s, %s, %s)",
            (a, b, c, d, e, f, g, h, i))
        self.connect.commit()
        # self.connect.close()

    def inset_travail(self, a, b, c, d):
        """insert into travail values """

        # requ = "insert into Travail values(?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_travail (id, code_p  , profession, date_t, duree) values(null, %s, %s, %s, %s)",
            (a, b, c, d))
        self.connect.commit()
        self.connect.close()

    def insert_message(self, a, b, c, d):
        """insert into message values """

        # requ = "insert into Travail values(?,?,?,?,?)"
        self.cursor.execute(
            "insert into gestion_message (id, date_message ,message, user_receive, user_id) values(null, %s, %s, %s, %s)", (a, b, c, d))
        self.connect.commit()
        # self.connect.close()

    def insert_tache(self, a, b, c, d, e, f, g, h, i, j, k, l, m):
        """insert into tache values """

        self.cursor.execute(
            "insert into gestion_tache (id, summary, descreiption , start_date,  daed_line , notification, to_do, work_running, work_done, work_budget, asigned_to, admin, project_step, project_taks_id ) values(null, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
            (a, b, c, d, e, f, g, h, i, j, k, l, m))
        self.connect.commit()
        # self.connect.close()

    def insert_att_conge(self, a, b, c):
        """insert into attente conge values """

        self.cursor.execute(
            "insert into gestion_attente_conge (id, debut_conge, fin_congev, personnel_id  ) values(null, %s, %s, %s)",
            (a, b, c))
        self.connect.commit()

    def insert_conge_en(self, a, b, c):
        """insert into attente conge values """

        self.cursor.execute(
            "insert into gestion_conge_en (id, debut_conge, fin_congev, personnel_id  ) values(null, %s, %s, %s)",
            (a, b, c))
        self.connect.commit()

    def insert_conge_ter(self, a, b, c):
        """insert into attente conge values """

        self.cursor.execute(
            "insert into gestion_conge_termine (id, debut_conge, fin_congev, personnel_id  ) values(null, %s, %s, %s)",
            (a, b, c))
        self.connect.commit()

    def select_profession(self):
        tab = []
        """select values into client table"""

        requ = "select * from gestion_profession "
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex

    def select_travail(self):
        """select onto travail values"""
        # cursor = self.connect.cursor()
        requ = "select *  from gestion_travail "
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex

    def select_personnel(self):
        """select into personnel values"""

        requ = "select * from gestion_personnel "
        self.cursor.execute(requ)
        ex = self.cursor.fetchall()

        return ex


class Persnnel(QMainWindow):
    def __init__(self):
        super(Persnnel, self).__init__()
        self.ui = Ui_Personnel()
        self.ui.setupUi(self)
        self.us = ModelDir()
        self.GESTION_PER = "gestion_personnel"
        self.personnel_header = ["id", "cni", "name", "firt_name", "adresse", "email", "phone"]
        self.ui.tableView.pressed.connect(self.modifie)

        if self.us.select_personnel() == []:
            pass
        else:
            self.model = TableModel(self.us.select_personnel(), self.personnel_header)
            self.ui.tableView.setModel(self.model)


        self.ui.add_per_3.clicked.connect(self.add_user)
        self.ui.modifie_per_3.clicked.connect(self.modifier)
        self.ui.remove_per_3.clicked.connect(self.remove)

    # add user
    def add_user(self):

        self.us.inset_personnel(self.ui.cNILineEdit_4.text(), self.ui.nameLineEdit_4.text(),
                                self.ui.prenomLineEdit.text(), self.ui.adresseLineEdit.text(),
                                int(self.ui.phoneLineEdit_4.text()), self.ui.emailLineEdit_2.text())
        try:
            if self.ui.tableView.selectedIndexes():
                index = (self.ui.tableView.selectionModel().currentIndex())

                value = index.sibling(index.row(), index.column()).data()
                self.us.deleteOne(self.GESTION_PER, value)
        except AttributeError:
            pass
        self.model = TableModel(self.us.select_personnel(), self.personnel_header)
        self.ui.tableView.setModel(self.model)

    # modifie personnel
    def modifier(self):

        if self.ui.tableView.selectedIndexes():
            index = (self.ui.tableView.selectionModel().currentIndex())

            value = index.sibling(index.row(), index.column()).data()

            eu = self.us.select_all_id(self.GESTION_PER, int(value))

            self.ui.cNILineEdit_4.setText(eu[1])
            self.ui.nameLineEdit_4.setText(eu[2])
            self.ui.prenomLineEdit.setText(eu[3])
            self.ui.adresseLineEdit.setText(eu[4])
            self.ui.emailLineEdit_2.setText(str(eu[5]))
            self.ui.phoneLineEdit_4.setText(str(eu[6]))

    def modifie(self):
        print('ok ok ok')

    # delete
    def remove(self):

        if self.ui.tableView.selectedIndexes():
            index = self.ui.tableView.selectionModel().currentIndex()

            value = index.sibling(index.row(), index.column()).data()

            indexes = self.ui.tableView.selectionModel().selectedRows()
            for indexs in sorted(indexes):
                self.us.deleteOne(self.GESTION_PER, indexs.sibling(indexs.row(), 0).data())
            # self.us.delete(self.GESTION_PER,value)


class Conge(QMainWindow):
    def __init__(self):
        super(Conge, self).__init__()
        self.ui = Ui_Conge()
        self.ui.setupUi(self)
        self.__GESTION_CONGE_EN = "gestion_conge_en"
        self.__GESTION_CONGE_AT = "gestion_attente_conge"
        self.__GESTION_CONGE_TE = "gestion_conge_termine"
        self.__GESTION_USER = "gestion_auth_user"
        self.dir = ModelDir()
        self.conge_header = [" id", "debut_conge", "fin_congev", "personnel_id"]

        self.fin_conge()

        if not self.dir.select_all(self.__GESTION_CONGE_AT):
            pass
        else:
            self.ui.radioButton_3.setChecked(True)

            datas = []

            for users in self.dir.select_all(self.__GESTION_CONGE_AT):
                user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                datalist = list(users)
                datalist.pop(1)
                datalist.pop(2)
                # datalist.pop(3)
                datalist.append(QDate(users[1]))
                datalist.append(QDate(users[2]))
                datalist.append(user[2])
                datalist.pop(1)
                datas.append(datalist)

            self.model = TableModel(datas, self.conge_header)
            self.ui.tableView.setModel(self.model)

        self.ui.radioButton.clicked.connect(self.conge_en)
        self.ui.radioButton_3.clicked.connect(self.attend_conge)
        self.ui.radioButton_2.clicked.connect(self.conge_termine)
        self.ui.valider.clicked.connect(self.valider)
        self.ui.annuler.clicked.connect(self.delete)

    def conge_en(self):
        self.ui.valider.hide()
        self.ui.annuler.hide()
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))

        if self.ui.radioButton.clicked:

            if not self.dir.select_all(self.__GESTION_CONGE_EN):
                self.ui.tableView.setModel(model)
                print("ok")

            else:
                datas = []

                for users in self.dir.select_all(self.__GESTION_CONGE_EN):
                    user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                    datalist = list(users)
                    datalist.pop(1)
                    datalist.pop(2)
                    # datalist.pop(3)
                    datalist.append(QDate(users[1]))
                    datalist.append(QDate(users[2]))
                    # datalist.append(user[2])
                    datalist.pop(1)
                    datas.append(datalist)
                    print(datalist)

                self.model = TableModel(datas, self.conge_header)
                self.ui.tableView.setModel(self.model)

    def attend_conge(self):
        self.ui.valider.setHidden(False)
        self.ui.annuler.setHidden(False)
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton_3.clicked:
            if not self.dir.select_all(self.__GESTION_CONGE_AT):
                self.ui.tableView.setModel(model)
            else:
                datas = []

                for users in self.dir.select_all(self.__GESTION_CONGE_AT):
                    user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                    datalist = list(users)
                    datalist.pop(1)
                    datalist.pop(2)
                    # datalist.pop(3)
                    datalist.append(QDate(users[1]))
                    datalist.append(QDate(users[2]))
                    datalist.append(user[2])
                    datalist.pop(1)
                    datas.append(datalist)

                self.model = TableModel(datas, self.conge_header)
                self.ui.tableView.setModel(self.model)

    def fin_conge(self):
        """fonction pour suprimer|ajouter dans la table congé terminé|en_cour"""

        from datetime import date
        fin_conge = self.dir.select_all("gestion_conge_en")
        system_date = date.today()
        for fin_c in fin_conge:
            if system_date == fin_c[2]:
                self.dir.insert_conge_ter(fin_c[1], fin_c[2], fin_c[3])
                self.dir.deleteOne("gestion_conge_en", fin_c[0])
                print("ok")
            if system_date > fin_c[2]:
                self.dir.insert_conge_ter(fin_c[1], fin_c[2], fin_c[3])
                self.dir.deleteOne("gestion_conge_en", fin_c[0])
                print("delete")

    def conge_termine(self):
        self.ui.valider.hide()
        self.ui.annuler.hide()
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton_2.clicked:
            if not self.dir.select_all(self.__GESTION_CONGE_TE):
                self.ui.tableView.setModel(model)
            else:
                datas = []

                for users in self.dir.select_all(self.__GESTION_CONGE_TE):
                    user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                    datalist = list(users)
                    datalist.pop(1)
                    datalist.pop(2)
                    # datalist.pop(3)
                    datalist.append(QDate(users[1]))
                    datalist.append(QDate(users[2]))
                    datalist.append(user[2])
                    datalist.pop(1)
                    datas.append(datalist)

                self.model = TableModel(datas, self.conge_header)
                self.ui.tableView.setModel(self.model)

    def valider(self):
        from datetime import date
        if self.ui.tableView.selectedIndexes():

            a = 0
            indexes = self.ui.tableView.selectionModel().selectedRows()
            date1 = self.ui.debut_conge.text()
            date2 = self.ui.fin_conge.text()
            date_debut = datetime.date(int(date1[6:10]), int(date1[3:5]), int(date1[0:2]))
            date_fin = datetime.date(int(date2[6:10]), int(date2[3:5]), int(date2[0:2]))

            for indexs in sorted(indexes):

                a += indexs.row()
                user = self.dir.select_all_user(indexs.sibling(a, 3).data())
                print(user[0])
                self.dir.insert_conge_en(date_debut, date_fin, user[0])

                self.dir.deleteOne(self.__GESTION_CONGE_AT, indexs.sibling(a, 0).data())

                if not self.dir.select_all(self.__GESTION_CONGE_AT):
                    pass
                else:

                    datas = []

                    for users in self.dir.select_all(self.__GESTION_CONGE_AT):
                        user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                        datalist = list(users)
                        datalist.pop(1)
                        datalist.pop(2)
                        # datalist.pop(3)
                        datalist.append(QDate(users[1]))
                        datalist.append(QDate(users[2]))
                        datalist.append(user[2])
                        datalist.pop(1)
                        datas.append(datalist)

                    self.model = TableModel(datas, self.conge_header)
                    self.ui.tableView.setModel(self.model)
                    print('ok ok ok ')

    def delete(self):
        if self.ui.tableView.selectedIndexes():
            a = 0
            indexes = self.ui.tableView.selectionModel().selectedRows()
            for indexs in sorted(indexes):
                a += indexs.row()
                self.dir.deleteOne(self.__GESTION_CONGE_AT, indexs.sibling(a, 0).data())
            datas = []

            for users in self.dir.select_all(self.__GESTION_CONGE_AT):
                user = self.dir.select_all_id(self.__GESTION_USER, users[3])
                datalist = list(users)
                datalist.pop(1)
                datalist.pop(2)
                # datalist.pop(3)
                datalist.append(QDate(users[1]))
                datalist.append(QDate(users[2]))
                datalist.append(user[2])
                datalist.pop(1)
                datas.append(datalist)

            self.model = TableModel(datas, self.conge_header)
            self.ui.tableView.setModel(self.model)


class DemandeConge(QMainWindow):
    def __init__(self, id):
        super(DemandeConge, self).__init__()
        self.ui = Ui_demandeConge()
        self.ui.setupUi(self)
        self.__GESTION_CONGE_EN = "gestion_conge_en"
        self.__GESTION_CONGE_AT = "gestion_attente_conge"
        self.__GESTION_USER = "gestion_auth_user"
        self.id = id
        self.dir = ModelDir()
        self.conge_header = [" id", "debut_conge", "fin_congev", "personnel_id"]

        if not self.dir.select_all_per_id(self.__GESTION_CONGE_AT, self.id):
            pass


        else:
            self.ui.radioButton_2.setChecked(True)
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

            self.model = TableModel(datas, self.conge_header)
            self.ui.tbale_conge.setModel(self.model)

        self.ui.radioButton_2.clicked.connect(self.attend_conge)
        self.ui.radioButton.clicked.connect(self.conge_en)

    def attend_conge(self):
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton_2.clicked:
            self.ui.demande.setHidden(False)
            if not self.dir.select_all_per_id(self.__GESTION_CONGE_AT, self.id):
                self.ui.tbale_conge.setModel(model)
                print(self.dir.select_all_per_id(self.__GESTION_CONGE_AT, self.id))
            else:
                print("data in ")

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

                self.model = TableModel(datas, self.conge_header)
                self.ui.tbale_conge.setModel(self.model)

    def conge_en(self):
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton.clicked:
            self.ui.demande.hide()
            if not self.dir.select_all_per_id(self.__GESTION_CONGE_EN, self.id):
                self.ui.tbale_conge.setModel(model)
                print(self.dir.select_all_per_id(self.__GESTION_CONGE_EN, self.id))
            else:
                print("data in ")
                datas = []

                for users in self.dir.select_all_per_id(self.__GESTION_CONGE_EN, self.id):
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

                self.model = TableModel(datas, self.conge_header)
                self.ui.tbale_conge.setModel(self.model)


# Travil class
class Travail(QMainWindow):
    def __init__(self):
        super(Travail, self).__init__()
        self.ui = Ui_Travail()
        self.ui.setupUi(self)
        self.us = ModelDir()
        self.model = ""
        self.GESTION_TRA = "gestion_travail"
        self.work_header = [" id", "personnel", "profession", "debut_travail", "fin_travail", "salaire", "prime"]

        if self.us.select_travail() == []:
            pass
        else:
            datas = []
            for data in self.us.select_travail():
                datalist = list(data)

                datalist.append(QDate(data[2]))
                datalist.append(QDate(data[3]))
                datalist.pop(2)
                datalist.pop(2)
                # datalist.append(data[4])
                datas.append(datalist)

            self.model = TableModel(datas, self.work_header)
            self.ui.tableView.setModel(self.model)

        self.ui.pushButton_2.clicked.connect(self.add_user)
        self.ui.pushButton_3.clicked.connect(self.modifier)
        self.ui.pushButton_4.clicked.connect(self.remove)
        for i in self.us.select_personnel():
            self.ui.comboBox.addItem(str(i[2]))

        for x in self.us.select_profession():
            self.ui.comboBox_2.addItem(str(x[2]))

    # add user
    def add_user(self):

        date1 = self.ui.dateEdit.text()
        date2 = self.ui.dateEdit_2.text()
        date_debut = datetime.date(int(date1[6:10]), int(date1[3:5]), int(date1[0:2]))
        date_fin = datetime.date(int(date2[6:10]), int(date2[3:5]), int(date2[0:2]))
        self.us.inset_travail(self.ui.comboBox.currentText(), self.ui.comboBox_2.currentText(), date_debut, date_fin)

        try:
            if self.ui.tableView.selectedIndexes():
                index = (self.ui.tableView.selectionModel().currentIndex())

                value = index.sibling(index.row(), 0).data()
                self.us.deleteOne(self.GESTION_PER, value)
        except AttributeError:
            pass
        finally:
            """datas = []
            for data in self.us.select_all(self.GESTION_TRA):
                datalist = list(data)

                datalist.append(QDate(data[2]))
                datalist.append(QDate(data[3]))
                datalist.pop(2)
                datalist.pop(2)
                # datalist.append(data[4])
                datas.append(datalist)
           
            self.model = TableModel(datas, self.work_header)"""
            self.ui.tableView.setModel(self.model)

            print("ok")



    # modifie personnel
    def modifier(self):
        value = 0
        if self.ui.tableView.selectedIndexes():
            index = (self.ui.tableView.selectionModel().currentIndex())

            value = index.sibling(index.row(), 0).data()

            eu = self.us.select_all_id(self.GESTION_TRA, int(value))

            self.ui.comboBox.addItem(str(eu[1]))
            self.ui.comboBox_2.addItem(str(eu[4]))
            self.ui.dateEdit.setDate(eu[2])
            self.ui.dateEdit_2.setDate(eu[3])


    # delete
    def remove(self):

        if self.ui.tableView.selectedIndexes():
            index = self.ui.tableView.selectionModel().currentIndex()

            # value = index.sibling(index.row(), index.column()).data()

            indexes = self.ui.tableView.selectionModel().selectedRows()
            for indexs in sorted(indexes):
                self.us.deleteOne(self.GESTION_TRA, indexs.sibling(indexs.row(), 0).data())

            self.model = TableModel(self.us.select_travail(), self.work_header)
            self.ui.tableView.setModel(self.model)


class Payement(QMainWindow):
    def __init__(self):
        super(Payement, self).__init__()
        self.ui = Ui_Payement()
        self.ui.setupUi(self)
        self.dir = ModelDir()
        self.GESTION_PAY = "gestion_paye"
        self.GESTION_TRA = "gestion_travail"
        self.payement_header = [" id", "personnel", "profession", "debut_travail", "fin_travail", "salaire", "prime"]

        if self.dir.select_travail() == []:
            pass
        else:
            self.ui.radioButton_2.setChecked(1)
            datas = []
            for data in self.dir.select_travail():
                datalist = list(data)

                datalist.append(QDate(data[2]))
                datalist.append(QDate(data[3]))
                datalist.pop(2)
                datalist.pop(2)
                # datalist.append(data[4])
                datas.append(datalist)
            self.model = TableModel(datas, self.payement_header)
            self.ui.tableView.setModel(self.model)

        self.ui.radioButton.clicked.connect(self.checkedchange)
        self.ui.radioButton_2.clicked.connect(self.attend_payement)
        self.ui.pushButton.clicked.connect(self.valider)

    def checkedchange(self):
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton.clicked:
            if self.dir.select_all(self.GESTION_PAY) == []:
                self.ui.tableView.setModel(model)
            else:
                self.model = TableModel(self.dir.select_all(self.GESTION_PAY), self.payement_header)
                self.ui.tableView.setModel(self.model)
                print(self.dir.select_all(self.GESTION_TRA))

    def attend_payement(self):
        if self.ui.radioButton_2.clicked:
            if self.dir.select_travail() == []:
                pass
            else:

                datas = []
                for data in self.dir.select_travail():
                    datalist = list(data)

                    datalist.append(QDate(data[2]))
                    datalist.append(QDate(data[3]))
                    datalist.pop(2)
                    datalist.pop(2)
                    # datalist.append(data[4])
                    datas.append(datalist)
                self.model = TableModel(datas, self.payement_header)
                self.ui.tableView.setModel(self.model)

    def valider(self):
        from datetime import date
        if self.ui.tableView.selectedIndexes():
            index = self.ui.tableView.selectionModel().currentIndex()

            value = index.sibling(index.row(), index.column()).data()

            indexes = self.ui.tableView.selectionModel().selectedRows()

            dat = date.today()
            nom = index.sibling(index.row(), 1).data()
            profession = index.sibling(index.row(), 4).data()

            self.dir.inset_paye(nom, profession, dat)
            for indexs in sorted(indexes):
                self.dir.deleteOne(self.GESTION_TRA, indexs.sibling(indexs.row(), 0).data())

            if self.dir.select_travail() == []:
                pass
            else:
                self.model = TableModel(self.dir.select_travail(), self.payement_header)
                self.ui.tableView.setModel(self.model)


class Payement_P(QMainWindow):
    """cette classe gere le payment de peronnel, elle est instacier dans la main des personnel"""

    def __init__(self, code_p=""):
        super(Payement_P, self).__init__()
        self.ui = Ui_Payement()
        self.ui.setupUi(self)
        self.dir = ModelDir()
        self.code_p = code_p
        self.ui.pushButton.setHidden(True)
        self.GESTION_PAY = "gestion_paye"
        self.GESTION_TRA = "gestion_travail"
        self.payement_header = [" id", "personnel", "profession", "debut_travail", "fin_travail", "salaire", "prime"]

        if not self.dir.select_all_trav(self.GESTION_TRA, self.code_p):
            pass
        else:
            self.ui.radioButton_2.setChecked(1)
            datas = []
            for data in self.dir.select_all_trav(self.GESTION_TRA, self.code_p):
                datalist = list(data)

                datalist.append(QDate(data[2]))
                datalist.append(QDate(data[3]))
                datalist.pop(2)
                datalist.pop(2)
                # datalist.append(data[4])
                datas.append(datalist)
            self.model = TableModel(datas, self.payement_header)
            self.ui.tableView.setModel(self.model)

        self.ui.radioButton.clicked.connect(self.checkedchange)
        self.ui.radioButton_2.clicked.connect(self.attend_payement)

    def checkedchange(self):
        model = QStandardItemModel(0, 3)
        model.setItem(0, 0, QStandardItem(""))
        if self.ui.radioButton.clicked:
            if not self.dir.select_all_paye(self.GESTION_PAY, self.code_p):
                self.ui.tableView.setModel(model)
            else:
                self.model = TableModel(self.dir.select_all_paye(self.GESTION_PAY, self.code_p), self.payement_header)
                self.ui.tableView.setModel(self.model)

    def attend_payement(self):
        if self.ui.radioButton_2.clicked:
            if not self.dir.select_all_trav(self.GESTION_TRA, self.code_p):
                pass
            else:
                datas = []
                for data in self.dir.select_all_trav(self.GESTION_TRA, self.code_p):
                    datalist = list(data)

                    datalist.append(QDate(data[2]))
                    datalist.append(QDate(data[3]))
                    datalist.pop(2)
                    datalist.pop(2)
                    # datalist.append(data[4])
                    datas.append(datalist)
                self.model = TableModel(datas, self.payement_header)
                self.ui.tableView.setModel(self.model)

            self.ui.radioButton.clicked.connect(self.checkedchange)
            self.ui.radioButton_2.clicked.connect(self.attend_payement)


# client form
class Client(QMainWindow):
    def __init__(self):
        super(Client, self).__init__()
        self.ui = Ui_Client()
        self.ui.setupUi(self)
        self.setWindowTitle('Client form')
        self.us = ModelDir()
        self.GETION_CLI = "gestion_client"
        # self.ui.valider.clicked.connect(self.add_user)
        self.label = QLabel()
        self.ui.gridLayout.addWidget(self.label)


# profession class
class Profession(QMainWindow):
    def __init__(self):
        super(Profession, self).__init__()
        self.ui = Ui_Profession()
        self.ui.setupUi(self)
        self.us = ModelDir()
        self.GESTION_PRO = "gestion_profession"
        self.model = ""
        self.profession_header = ["id", "code", "intitule", "salaire", "prime "]

        if self.us.select_profession() == []:
            pass
        else:
            self.model = TableModel(self.us.select_profession(), self.profession_header)
            self.ui.tableView.setModel(self.model)

        self.ui.add_per.clicked.connect(self.add_profession)
        self.ui.remove_per.clicked.connect(self.remove)
        self.ui.modifie_per.clicked.connect(self.modifier)

    # add profession
    def add_profession(self):
        self.us.inset_profession(int(self.ui.codeLineEdit.text()), self.ui.intituleLineEdit.text(),
                                 int(self.ui.salaireLineEdit.text()), int(self.ui.primeLineEdit.text()))
        try:

            self.us.deleteOne(self.GESTION_PRO, self.modifier())
        except AttributeError:
            pass
        finally:
            self.model = TableModel(self.us.select_profession(), self.profession_header)
            self.ui.tableView.setModel(self.model)

    # modifie profession
    def modifier(self):
        value = 0
        if self.ui.tableView.selectedIndexes():
            index = (self.ui.tableView.selectionModel().currentIndex())

            value = index.sibling(index.row(), 0).data()

            eu = self.us.select_all_id(self.GESTION_PRO, int(value))
            print(eu[0])
            self.ui.codeLineEdit.addItem(str(eu[1]))
            self.ui.intituleLineEdit.setText(eu[2])
            self.ui.salaireLineEdit.setText(str(eu[3]))
            self.ui.primeLineEdit.setText(str(eu[4]))
        return value

    # delete
    def remove(self):

        if self.ui.tableView.selectedIndexes():
            index = self.ui.tableView.selectionModel().currentIndex()

            value = index.sibling(index.row(), 0).data()

            self.us.delete(self.GESTION_PRO, value)

            self.model = TableModel(self.us.select_profession(), self.profession_header)
            self.ui.tableView.setModel(self.model)


class UserDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent=parent)

        self.setWindowTitle("user_form")
        self.us = ModelDir()
        QBtn = QDialogButtonBox.Cancel | QDialogButtonBox.Save
        btn = QPushButton('Annuler')
        btn1 = QPushButton('Enregistrer')
        self.buttonBox = QDialogButtonBox()
        self.buttonBox.addButton(btn, QDialogButtonBox.RejectRole)
        self.buttonBox.addButton(btn1, QDialogButtonBox.AcceptRole)
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)

        self.layout = QVBoxLayout()
        self.firt_name = QComboBox()
        self.phone = QComboBox()
        self.password = QLineEdit()
        self.username = QLineEdit()
        self.admin = QCheckBox()
        # password.setEchoMode(QLineEdit.Password)
        for i in self.us.select_all("gestion_personnel"):
            self.firt_name.addItem(i[2])
            self.phone.addItem(str(i[6]))

        form = QFormLayout()
        form.addRow('Pesonnel', self.firt_name)
        form.addRow('Phone', self.phone)
        form.addRow('user_name', self.username)
        form.addRow('password', self.password)
        form.addRow('admin', self.admin)

        self.layout.addLayout(form)
        self.layout.addWidget(self.buttonBox)
        # self.layout.addWidget(self.buttonBox)

        self.setLayout(self.layout)


class ProjectDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent=parent)

        self.setWindowTitle("project!")

        # QBtn = QDialogButtonBox.Cancel | QDialogButtonBox.Save
        btn = QPushButton('Annuler')
        btn1 = QPushButton('Enregistrer')
        self.buttonBox = QDialogButtonBox()
        self.buttonBox.addButton(btn, QDialogButtonBox.RejectRole)
        self.buttonBox.addButton(btn1, QDialogButtonBox.AcceptRole)
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)

        self.layout = QVBoxLayout()
        self.project_name = QLineEdit()
        self.client_name = QComboBox()

        form = QFormLayout()
        form.addRow('porjct_name', self.project_name)
        form.addRow('cleint name', self.client_name)
        self.layout.addLayout(form)
        self.layout.addWidget(self.buttonBox)
        self.layout.addWidget(self.buttonBox)

        self.setLayout(self.layout)


class LogOut(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent=parent)

        self.setWindowTitle("Logout!")

        # QBtn = QDialogButtonBox.Cancel | QDialogButtonBox.Save
        self.btn = QPushButton('Annuler')
        self.btn1 = QPushButton('Logout')
        self.buttonBox = QDialogButtonBox()
        self.buttonBox.addButton(self.btn, QDialogButtonBox.RejectRole)
        self.buttonBox.addButton(self.btn1, QDialogButtonBox.AcceptRole)
        self.buttonBox.accepted.connect(self.accept)
        self.buttonBox.rejected.connect(self.reject)

        self.layout = QVBoxLayout()

        self.layout.addWidget(self.buttonBox)
        self.layout.addWidget(self.buttonBox)

        self.setLayout(self.layout)
