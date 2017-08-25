#!/usr/bin/env node
'use strict';

const fs = require('fs');
const sync = require('.');

const args = process.argv.splice(2);
const packagePath = args.length ? args[0] : 'package.json';
const pomPath = args.length >= 2 ? args[1] : 'pom.xml';

if (!fs.existsSync(packagePath)) {
  console.warn('package.json could not be found!');
  process.exit(0);
}

if (!fs.existsSync(pomPath)) {
  console.warn('pom.xml could not be found!');
  process.exit(0);
}

sync(packagePath, pomPath);
