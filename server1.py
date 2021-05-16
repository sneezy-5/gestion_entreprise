import socket
import threading
import os

class theading(threading.Thread):
    def __init__(self, conn):
        threading.Thread.__init__(self)
        self.conn = conn
    #def run 
    def run(self):
        data =self.conn.recv(1024)
        self.conn.sendall(data.encode('utf-8'))

host, port = ('', 9999)
socket_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
socket_server.bind((host, port))

print('server demaré')

while True:
    socket_server.listen()
    conn, ip_adresse = socket_server.accept()

    print("client est connecter avec l'adresse...{}".format(host))
    my_thread = theading(conn)
    my_thread.start()
conn.close()
socket_server.close()
    