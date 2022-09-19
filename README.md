# node-bot

runinng 

node index.js

# How to solve Chromium issue On mac m1

EXECUTE BEFORE NPM INSTALL

~/.zshrc

export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`

rm -rf node_modules/
rm -rf package-lock.json
rm -rf .cache

npm i

brew reinstall -cask chromium --no-quarantine