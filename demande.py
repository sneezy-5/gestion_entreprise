# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'demande.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_demandeConge(object):
    def setupUi(self, demandeConge):
        demandeConge.setObjectName("demandeConge")
        demandeConge.resize(720, 443)
        self.centralwidget = QtWidgets.QWidget(demandeConge)
        self.centralwidget.setObjectName("centralwidget")
        self.layoutWidget = QtWidgets.QWidget(self.centralwidget)
        self.layoutWidget.setGeometry(QtCore.QRect(15, 20, 691, 401))
        self.layoutWidget.setObjectName("layoutWidget")
        self.gridLayout = QtWidgets.QGridLayout(self.layoutWidget)
        self.gridLayout.setContentsMargins(0, 0, 0, 0)
        self.gridLayout.setObjectName("gridLayout")
        self.demande = QtWidgets.QPushButton(self.layoutWidget)
        self.demande.setMaximumSize(QtCore.QSize(100, 16777215))
        self.demande.setObjectName("demande")
        self.gridLayout.addWidget(self.demande, 0, 2, 1, 1)
        self.radioButton = QtWidgets.QRadioButton(self.layoutWidget)
        self.radioButton.setObjectName("radioButton")
        self.gridLayout.addWidget(self.radioButton, 0, 1, 1, 1)
        self.radioButton_2 = QtWidgets.QRadioButton(self.layoutWidget)
        self.radioButton_2.setObjectName("radioButton_2")
        self.gridLayout.addWidget(self.radioButton_2, 0, 0, 1, 1)
        self.tbale_conge = QtWidgets.QTableView(self.layoutWidget)
        self.tbale_conge.setObjectName("tbale_conge")
        self.gridLayout.addWidget(self.tbale_conge, 1, 0, 1, 3)
        demandeConge.setCentralWidget(self.centralwidget)

        self.retranslateUi(demandeConge)
        QtCore.QMetaObject.connectSlotsByName(demandeConge)

    def retranslateUi(self, demandeConge):
        _translate = QtCore.QCoreApplication.translate
        demandeConge.setWindowTitle(_translate("demandeConge", "MainWindow"))
        self.demande.setText(_translate("demandeConge", "demande"))
        self.radioButton.setText(_translate("demandeConge", "cong?? en cours"))
        self.radioButton_2.setText(_translate("demandeConge", "cong?? en attente"))
