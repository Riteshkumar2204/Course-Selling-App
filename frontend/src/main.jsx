import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51Rbadu4DsXJt4UQvQfFZFVfMxpTQ9kAsifhuYnOOetzWqDiCoOFSoROqrkgQ2vnWnKMM2bQXtv0yQOkzaTLFIJFk00fxcxZKMn"
);

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);




