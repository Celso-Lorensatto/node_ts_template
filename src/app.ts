import { config } from "dotenv";
import Debug from "debug";

function loadEnvs() {
  if (process.env.NODE_ENV === "dev") {
    config({
      path: "./.env.dev",
    });
  }
  if (process.env.NODE_ENV === "prd") {
    config({
      path: "./.env",
    });
  }
}

function loadDebbuger() {
  Debug.enable(process.env.DEBUG);
}

export async function initializeProject() {
  loadEnvs();
  loadDebbuger();
  // coloque as funções de inicialização do seu projeto aqui
}
