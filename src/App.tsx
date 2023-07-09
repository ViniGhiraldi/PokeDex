import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { Header, Wrapper } from "./shared/components"
import { PokemonProvider } from "./shared/contexts/PokemonContext"

export const App = () => {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <Wrapper flexDirection='column' minheightfull id='main'>
          <Header/>
          <AppRoutes/>
        </Wrapper>
      </PokemonProvider>
    </BrowserRouter>
  )
}
