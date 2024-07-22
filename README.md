# dev-containers

Configuration boiler-plates for my dev-containers.

## Assumptions

1. Ubuntu (Debian) dev platform.
2. Docker and VSCode are installed & configured for dev-container based development.

## Usage

These dev-container boiler-plates build and use <u>local</u> customizable base images - to avoid the need to publish/pay to/for a container registry during development. Always configure your post-development base-images to be as small as possible.

## Installation

Clone this repo, then:

1. Create a locally cloned empty git repo for your project.

    ```text
    Eg: /.../<this repo>/
        /.../<project>/
    ```

2. Copy the contents of this repo's appropriate boiler-plate's folder into `<project>/`

    ```text
    Eg: rsync -a <this repo's dir>/typescript/ <your project dir>/
    ```

3. `cd` into `<your project dir>`
4. Run `code .`
5. Confirm VSCode's suggestion to run as a dev container. Wait ...

    >VSCode will:
    >1. Run `<project dir>/.devcontainer/init.sh`, which builds the dev-container's base image.
    >2. Build the dev-container using the built base image and mount `<your project dir>`
    >3. Install the dev-container's extensions.
    >4. Build the boiler-plate project.
    >5. Let you know when its finished.

Happy hacking.
