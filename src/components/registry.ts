import loader from "@monaco-editor/loader";

const Registry = {
  cdn: "//unpkg.com",
};

export const setNpmCDNRegistry = (registry: string) => {
  Registry.cdn = registry;
  loader.config({
    paths: {
      vs: `${registry}/monaco-editor@0.30.1/min/vs`,
    },
  });
};

export const getNpmCDNRegistry = () => String(Registry.cdn).replace(/\/$/, "");


