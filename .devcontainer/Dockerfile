# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/master/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT=14
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

ARG INSTALL_ZSH="true"
ARG USERNAME=node

# Avoiding extension reinstalls on container rebuild
RUN mkdir -p /home/$USERNAME/.vscode-server/extensions \
    && chown -R $USERNAME /home/$USERNAME/.vscode-server

# Install needed packages, gh
COPY library-scripts/*.sh /tmp/library-scripts/
RUN bash /tmp/library-scripts/gh-debian.sh "${INSTALL_ZSH}" "${USERNAME}" \
    && rm -rf /tmp/library-scripts

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
RUN sudo -u ${USERNAME} npm install -g editorconfig \
    && sudo -u ${USERNAME} npm cache clean --force > /dev/null 2>&1 \
    && sudo -u ${USERNAME} yarn config set scripts-prepend-node-path true --global

ENV EDITOR=code\ --wait
