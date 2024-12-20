import Revenue from "pages/Revenue";
import Stock from "pages/Stock";

const dashes = [
    {
        id: "REVENUE",
        name: "Faturamento",
        screen: <Revenue/>
    },
    {
        id: "STOCK",
        name: "Estoque",
        screen: <Stock/>
    }
]

export {dashes}