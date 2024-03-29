import { Container } from "@mui/material";
import { SWRConfig } from "swr";
import CardGrid from "../src/components/CardGrid";
import { swrFetcher } from "../src/lib/swr-fetcher";
import { getCards } from "../src/services/get-cards";

export async function getStaticProps() {
  const cards = await getCards();

  return {
    props: {
      fallback: {
        "/api/cards": cards,
      },
    },
  };
}

export default function Cards({ fallback }) {
  return (
    <SWRConfig value={{ fetcher: swrFetcher, fallback }}>
      <Container maxWidth="xl">
        <CardGrid />
      </Container>
    </SWRConfig>
  );
}
