// Suppress TS2792: Cannot find module './secp256k1.wasm'.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import wasm from "./secp256k1.wasm";
import * as rand from "./rand.js";
import * as validate_error from "./validate_error.js";
const imports = {
    "./rand.js": rand,
    "./validate_error.js": validate_error,
};
const mod = await WebAssembly.compile(Buffer.from(wasm.split(',')[1], 'base64'));
const instance = await WebAssembly.instantiate(mod, imports);
export default instance.exports;
