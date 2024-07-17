# dev-containers

Configuration boiler-plates for my dev-containers.

## Assumptions

1. Your are developing on a Ubuntu (Debian) distro.
2. Docker and VSCode are installed & configured for development on your distro.

## Usage

Each type of dev container uses a local base-image. Avoiding the need to publish the base images, and avoiding slow subsequent dev-container builds.

## Installation

1. Clone this repo to a local folder.
2. Create your project's empty git repo folder.
3. Copy the contents of the desired dev-container folder into your project's git repo folder.
4. `cd` into your project's folder
5. Run `code .`
6. Confirm VSCode's suggestion to run as a dev container. Wait ...

    >VSCode will:
    >1. Run `init.sh` to build the dev-container's base image.
    >2. Build the dev-container.
    >3. Install the dev-container's extensions.
    >4. Run `npm install`
    >5. Let you know when its finished.

----
