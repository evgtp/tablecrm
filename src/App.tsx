import "./App.css";
import OrderMobileForm from "./OrderMobileForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
   const queryClient = new QueryClient();

   return (
      <>
         <QueryClientProvider client={queryClient}>
            <OrderMobileForm />
         </QueryClientProvider>
      </>
   );
}

export default App;
