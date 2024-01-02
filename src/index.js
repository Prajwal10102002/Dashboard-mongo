// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import { setupLoginPage } from "./helper";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

/**
 * START
 */

// TASK 3: Set options via Embed Dashboard options
const sdk = new ChartsEmbedSDK({baseUrl:"https://charts.mongodb.com/charts-project-vwcde"});
const dashbboardOptions = { 
  dashboardId: "9662f25b-1e5e-42fb-aecb-60fc8c42fc5f",
  showattributions: false,
  getUserToken: () => {
    return window.sessionStorage.getItem("jwtToken");
  }
};

const dashboard = sdk.createDashboard(dashbboardOptions);
export const renderDashboard = async () => {
  //  Render dashboard here
  const dashboardElement = document.getElementById("dashboard");
  await dashboard.render(dashboardElement);
};

const toggleDarkMode = async () => {
  // TASK 3: Toggle dark mode for dashboard via Charts SDK
  const currentTheme = await dashboard.getTheme();
  console.log(currentTheme);
  dashboard.setTheme(currentTheme === "light" ? "dark" : "light");
  // Toggle dark mode icon
  const darkModeIcon = document.getElementById("icon-dark-mode");
  darkModeIcon.classList.toggle("bi-moon-fill");
  darkModeIcon.classList.toggle("bi-sun-fill");

  // Toggle dark mode for ALL tailwind components
  document.documentElement.classList.toggle("dark");
};

const filterPurchaseMethod = async (event) => {
  // TASK 4: Filter charts by purchase method
};

/**
 * END
 */

const darkModeBtn = document.getElementById("btn-dark-mode");
darkModeBtn.addEventListener("click", toggleDarkMode);

const purchaseMethodSelect = document.getElementById("purchaseMethod");
purchaseMethodSelect.addEventListener("change", filterPurchaseMethod);

setupLoginPage();
