import { AppProvider } from './src/store/context';

// screen meus pedidos e item no drawer
// food detail mostrar icon carrinho com qtd items
// icon fav colocar ao lado do rating 
// screen carrinho e item no drawer

import Navigator from './src/routes/Navigators';


export default function App() {
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  );
}
