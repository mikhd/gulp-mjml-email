## Introduction

Building emails via [MJML service](https://mjml.io)

### Installation and using mjml directly
[MJML doc](https://mjml.io/documentation/#installation)

```bash
# Installation with npm
$> npm install

# In the folder where you installed MJML you can now run:
$> ./node_modules/.bin/mjml -V

# To avoid typing ./node_modules/.bin/, add it to your PATH (add it to .bashrc or .zshrc so you don't have to export it anymore):
$> export PATH="$PATH:./node_modules/.bin"

# You can now run MJML directly, in that folder:
$> mjml -V
```

### Command Line Interface
[MJML doc](https://mjml.io/documentation/#command-line-interface)

### Usage
* Arguments:
  - `emailFolder`- folder name where email lies
  - `port` - server port (8000 by default)
* `src` - folder contain .mjml sources, images and compiled .html

```bash
# Starting with live reload
npm start -- --emailFolder={folderName}

# Building particular email in the src directory
npm run build -- --emailFolder={folderName}

# Example
npm run start -- --emailFolder=example
```