import Cards from "../../components/Cards";

const cardNames = [1, 3, 5, 8, 13, 20, 40, 100, "unknown"];

export default {
  component: Cards,
  fetch: [
    {
      matcher: "/cards",
      response: cardNames.map((cardName, index) => ({
        id: index,
        url: `assets/${cardName}.png`
      }))
    }
  ]
};
