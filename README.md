# REM converter

**REM converter** is a simple tool to convert css files written in one base REM unit to another

## Installation

To install **REM converter**:

1.  Clone this repo:

        cd ~/tools/
        git clone git@github.com:dennisbrainrider/remconverter.git
        cd remconverter
        npm install

    `~/tools/` can be whatever directory you want to keep tools in.

2.  Add an alias at the end of your your `~/.bash_profile`:

        alias remconverter="node ~/tools/remconverter/index.js"

    Replace `~/tools/remconverter` with the path you cloned the repo into above.

3.  Restart your terminal.

## Usage

To run **remconverter** inside an onBrand project directory, just type `remconverter`.

To run **remconverter** outside an onBrand project directory, or to supply a path or hub URL explicitly, use:

    remconverter [relativePath] [multiplier]

If `relativePath` isn't specified, `./client/client.scss` will be used.

`hubUrl` is required

## Output

**remconverter** will output a converted file in the current directory titled `convertedRems.scss`
