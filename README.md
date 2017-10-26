# HyperledgerComposer
1. Install Softwares:
•	Vagrant (1.9.3) : https://releases.hashicorp.com/vagrant/1.9.3/vagrant_1.9.3.msi
•	Oracle Virtual Box (5.1.18) : http://download.virtualbox.org/virtualbox/5.1.18/VirtualBox-5.1.18-114002-Win.exe
•	Git Bash : https://git-scm.com/download/win
2. Clone the Git repo.
    Open cmd
    Go to Users>IBM_Admin or any other location
     git clone https://github.com/dparmar1/composerdevbox.git
3.  Start the vagrant
•	cd composerdevbox
•	vagrant up
4. Credentials to be used for putty and Winscp

UserName:   ubuntu
Password present in:
C:\Users<Your Username>.vagrant.d\boxes\ubuntu-VAGRANTSLASH-xenial64\20170523.1.0\virtualbox\Vagrantfile

5.  Open putty and login

In a directory of your choice (will assume ~/fabric-tools) get the zip file that contains the tools to install Hyperledger Fabric v1.0.
Copy
mkdir ~/fabric-tools && cd ~/fabric-tools

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.zip
unzip fabric-dev-servers.zip

6. Setup the Fabric and Peers
All the scripts will be in the directory ~/fabric-tools A typical sequence for Hyperledger Composer use would be
Copy
cd ~/fabric-tools
./downloadFabric.sh
./startFabric.sh
./createComposerProfile.sh


7. Setup Helping Files
Go to the same directory ~/fabric-tools
Run the commands
npm install -g generator-hyperledger-composer
npm install -g composer-rest-server
npm install -g yo


8. Deploy the Banana file

Open Winscp and put the bna file under ~/fabric-tools

Now Deploy:

composer network deploy -p hlfv1 -a membervaluetrading.bna -i PeerAdmin -s peeradmin


9.UI design 
Generate Rest Server and Angular Application.
yo hyperledger-composer

10. Now go to the folder (name of the application which you have generated in the previous step_ see the image above>
cd  folder_name)
now run the command: npm start
 

11. Check the Server
Open localhost:4200 - Angular Application
Open localhost:3000 – Rest Explorer.

