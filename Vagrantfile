# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "forwarded_port", guest: 5000, host: 5000, host_ip: "127.0.0.1"

  config.vm.synced_folder ".", "/vagrant", type: "virtualbox"

  config.vm.provider "virtualbox" do |vb|
     vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get upgrade --yes --allow-change-held-packages

    wget https://raw.githubusercontent.com/RichardSlater/bash-profile/master/.profile -O /home/vagrant/.profile --quiet
    wget https://raw.githubusercontent.com/RichardSlater/bash-profile/master/.bashrc -O /home/vagrant/.bashrc --quiet
    apt-get install nodejs npm --yes --allow-change-held-packages

    npm install pm2@latest -g
  SHELL

  config.vm.provision "shell", :run => 'always', privileged: false, inline: <<-SHELL
    cd /vagrant
    npm install
    pm2 start /vagrant/app.js
  SHELL
end
