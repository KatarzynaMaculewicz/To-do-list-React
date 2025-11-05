import Container from "../../common/Container/index.js";
import Header from "../../common/Header/index.js";
import Section from "../../common/Section/index.js";
import { Wrapper, Tip } from "./styled.js";

export default () => (
  <Container>
    <Header title="Jak korzystać z listy zadań:" />
    <Section
      title="Wskazówki"
      body={
        <Wrapper>
          <p>
            ✅ Wpisz treść zadania w polu tekstowym i kliknij{" "}
            <strong>„Dodaj zadanie”</strong>.
          </p>
          <p>
            🌟 Użyj przycisku <strong>„Pobierz przykładowe zadania”</strong>,
            aby wczytać gotowe propozycje.
          </p>
          <p>
            ✔️ Kliknij na ikonę <strong>✔</strong> obok zadania, aby oznaczyć je
            jako ukończone.
          </p>
          <p>
            🗑️ Naciśnij ikonę <strong>🗑</strong>, aby usunąć wybrane zadanie.
          </p>
          <p>
            🔍 Skorzystaj z pola <strong>„Filtruj zadania”</strong>, aby szybko
            znaleźć konkretne pozycje.
          </p>
          <p>
            🙈 Kliknij <strong>„Ukryj ukończone”</strong>, aby skupić się tylko
            na tym, co jeszcze trzeba zrobić.
          </p>
          <Tip>
            <strong>💡 Tip:</strong> Twoje zadania zapisują się automatycznie 💾
            – po odświeżeniu strony nic nie zniknie!
          </Tip>
        </Wrapper>
      }
    ></Section>
  </Container>
);
