ssh -o StrictHostKeyChecking=no azureuser@172.174.226.182 <<HTML

    cd "/home/azureuser/github-actions-test"

    git pull origin azure-deploy-vm-test
    npm install 
    npm run build

HTML