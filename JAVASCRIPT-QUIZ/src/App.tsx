import { JavaScriptLogo } from "./JavascriptLogo";

import "./App.css";
import { Container, Typography, Stack } from "@mui/material";
import { Start } from "./components/Start";
import { useQuestionStore } from "./components/store/questions";
import { Game } from "./components/Game";

function App() {
  const questions = useQuestionStore((state) => state.questions);
  console.log(questions);

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2">Js quiz</Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
