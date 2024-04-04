import { ThemeProvider } from "styled-components";
import { Button, Text } from "./components";
import { GlobalStyles } from "./styles/Global";
import { baseTheme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyles />
      <Button>
        <Text fontWeight={600}>Week</Text>
      </Button>
      <Button>
        <Text fontWeight={600}>Month</Text>
      </Button>
    </ThemeProvider>
  );
}

export default App;
