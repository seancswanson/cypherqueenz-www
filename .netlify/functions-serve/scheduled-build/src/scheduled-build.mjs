import { createRequire as ___nfyCreateRequire } from "module";
import { fileURLToPath as ___nfyFileURLToPath } from "url";
import { dirname as ___nfyPathDirname } from "path";
let __filename = ___nfyFileURLToPath(import.meta.url);
let __dirname = ___nfyPathDirname(___nfyFileURLToPath(import.meta.url));
let require = ___nfyCreateRequire(import.meta.url);

// netlify/functions/scheduled-build.mts
var scheduled_build_default = async (req) => {
  const { next_run } = await req.json();
  console.log("Received event! Next invocation at:", next_run);
};
var config = {
  schedule: "@hourly",
};
export { config, scheduled_build_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibmV0bGlmeS9mdW5jdGlvbnMvc2NoZWR1bGVkLWJ1aWxkLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHR5cGUgeyBDb25maWcgfSBmcm9tIFwiQG5ldGxpZnkvZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcbiAgY29uc3QgeyBuZXh0X3J1biB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGV2ZW50ISBOZXh0IGludm9jYXRpb24gYXQ6XCIsIG5leHRfcnVuKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWc6IENvbmZpZyA9IHtcbiAgc2NoZWR1bGU6IFwiQGhvdXJseVwiLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFFQSxJQUFPLDBCQUFRLE9BQU8sUUFBaUI7QUFDckMsUUFBTSxFQUFFLFNBQVMsSUFBSSxNQUFNLElBQUksS0FBSztBQUVwQyxVQUFRLElBQUksdUNBQXVDLFFBQVE7QUFDN0Q7QUFFTyxJQUFNLFNBQWlCO0FBQUEsRUFDNUIsVUFBVTtBQUNaOyIsCiAgIm5hbWVzIjogW10KfQo=
