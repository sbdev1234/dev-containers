ARG VARIANT=22-bookworm
FROM mcr.microsoft.com/devcontainers/javascript-node:1-${VARIANT}

# Install latest typescript compiler, linting & helper. eslint is installed by javascript image
ARG NODE_MODULES="typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser tsc-alias tsc-watch"
RUN su node -c "umask 0002 && npm install -g ${NODE_MODULES}" \
  && npm cache clean --force > /dev/null 2>&1

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# Install prettier and linting integration helpers.
RUN su node -c "npm install -g prettier eslint-config-prettier eslint-plugin-prettier"
