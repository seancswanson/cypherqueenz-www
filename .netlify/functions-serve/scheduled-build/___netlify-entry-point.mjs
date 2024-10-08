import * as func from "./src/scheduled-build.mjs";
import * as bootstrap from "./___netlify-bootstrap.mjs";
const funcModule = typeof func.default === "function" ? func : func.default;
global.Netlify = bootstrap.getNetlifyGlobal();
export const handler = bootstrap.getLambdaHandler(funcModule);
