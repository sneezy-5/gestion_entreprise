from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QStyledItemDelegate

class HTMLDelegate( QtWidgets.QStyledItemDelegate ):
    def __init__( self ):
        super().__init__()
        # probably better not to create new QTextDocuments every ms
        self.doc = QtGui.QTextDocument()

    def paint(self, painter, option, index):
        options = QtWidgets.QStyleOptionViewItem(option)
        self.initStyleOption(options, index)
        painter.save()
        self.doc.setTextWidth(options.rect.width())
        self.doc.setHtml(options.text)
        self.doc.setDefaultFont(options.font)
        options.text = ''
        options.widget.style().drawControl(QtWidgets.QStyle.CE_ItemViewItem, options, painter)
        painter.translate(options.rect.left(), options.rect.top())
        clip = QtCore.QRectF(0, 0, options.rect.width(), options.rect.height())
        painter.setClipRect(clip)
        ctx = QtGui.QAbstractTextDocumentLayout.PaintContext()
        ctx.clip = clip
        self.doc.documentLayout().draw(painter, ctx)
        painter.restore()

    def sizeHint( self, option, index ):
        options = QtWidgets.QStyleOptionViewItem(option)
        self.initStyleOption(option, index)
        self.doc.setHtml(option.text)
        self.doc.setTextWidth(option.rect.width())
        return QtCore.QSize(self.doc.idealWidth(), self.doc.size().height())
