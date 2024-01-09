import { register } from "node:module";

register("../lib/node-loader-extensionless.js", import.meta.url);
// Necessary for the typescript tests
register("@node-loader/babel", import.meta.url);
