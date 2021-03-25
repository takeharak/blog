#!/bin/bash

# Syntax: ./gh-debian.sh [install zsh flag] [username]

INSTALL_ZSH=${1:-"true"}
USERNAME=${2:-"automatic"}

set -e

if [ "$(id -u)" -ne 0 ]; then
    echo -e 'Script must be run as root. Use sudo, su, or add "USER root" to your Dockerfile before running this script.'
    exit 1
fi

# Ensure that login shells get the correct path if the user updated the PATH using ENV.
rm -f /etc/profile.d/00-restore-env.sh
echo "export PATH=${PATH//$(sh -lc 'echo $PATH')/\$PATH}" > /etc/profile.d/00-restore-env.sh
chmod +x /etc/profile.d/00-restore-env.sh

# Determine the appropriate non-root user
if [ "${USERNAME}" = "auto" ] || [ "${USERNAME}" = "automatic" ]; then
    USERNAME=""
    POSSIBLE_USERS=("vscode" "node" "codespace" "$(awk -v val=1000 -F ":" '$3==val{print $1}' /etc/passwd)")
    for CURRENT_USER in ${POSSIBLE_USERS[@]}; do
        if [ id -u ${CURRENT_USER} > /dev/null 2>&1 ]; then
            USERNAME=${CURRENT_USER}
            break
        fi
    done
    if [ "${USERNAME}" = "" ]; then
        USERNAME=root
    fi
elif [ "${USERNAME}" = "none" ] || ! id -u ${USERNAME} > /dev/null 2>&1; then
    USERNAME=root
fi

# Ensure apt is in non-interactive to avoid prompts
export DEBIAN_FRONTEND=noninteractive

# Install build-essential curl file git if missing
if [ ! dpkg -s build-essential curl file git > /dev/null 2>&1 ]; then
    if [ ! -d "/var/lib/apt/lists" ] || [ "$(ls /var/lib/apt/lists/ | wc -l)" = "0" ]; then
        apt-get update
    fi
    apt-get -y install --no-install-recommends build-essential curl file git
fi

BASHRC=/etc/bash.bashrc
ZSHRC=/dev/null
# Optionally configure zsh
if [ "${INSTALL_ZSH}" = "true" ]; then
    ZSHRC=/etc/zsh/zshrc
fi

# Install Homebrew
if [ type brew > /dev/null 2>&1 ]; then
    echo "Homebrew already installed."
else
    su ${USERNAME} -s /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    test -d ~/.linuxbrew && eval $(~/.linuxbrew/bin/brew shellenv)
    test -d /home/linuxbrew/.linuxbrew && eval $(/home/linuxbrew/.linuxbrew/bin/brew shellenv)
(cat <<'EOF'

# Homebrew
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
EOF
) | tee -a ${BASHRC} >> ${ZSHRC}
(cat <<'EOF'

# Homebrew Shell Completion
if [ type brew &>/dev/null ]; then
    HOMEBREW_PREFIX="$(brew --prefix)"
    if [[ -r "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh" ]]; then
        source "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh"
    else
        for COMPLETION in "${HOMEBREW_PREFIX}/etc/bash_completion.d/"*; do
            [[ -r "$COMPLETION" ]] && source "$COMPLETION"
        done
    fi
fi
EOF
) | tee >> ${BASHRC}
    if [ "${INSTALL_ZSH}" = "true" ]; then
(cat <<'EOF'

# Homebrew Shell Completion
if [ type brew &>/dev/null ]; then
    FPATH=$(brew --prefix)/share/zsh/site-functions:$FPATH

    autoload -Uz compinit
    compinit
fi
EOF
) | tee >> ${ZSHRC}
    fi
fi

# Install gh
if [ type brew > /dev/null 2>&1 && type gh > /dev/null 2>&1 ]; then
    echo "gh already installed."
else
    brew install gh
    # Optionally configure zsh
    if [ "${INSTALL_ZSH}" = "true" ]; then
        gh completion -s zsh > /usr/local/share/zsh/site-functions/_gh
    fi
fi

# Cleanup
if [ -d "/var/lib/apt/lists" ] || [ ! "$(ls /var/lib/apt/lists/ | wc -l)" = "0" ]; then
    apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*
fi

if [ type brew > /dev/null 2>&1 ]; then
    rm -rf "$(brew --cache)"
fi
