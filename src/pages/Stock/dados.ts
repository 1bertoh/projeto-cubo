export type TDados = {
    columnName: string;
    type: string;
    items: ({
        name: string;
        value: number;
    } | {
        name: string;
        value: string;
    })[];
}

const dados: TDados[] = [
    {
        columnName: "totalPolidas",
        type: "special", //buscar uma identificação melhor para a coluna de soma
        items: [
            {
                name: "chapas",
                value: "1261"
            },
            {
                name: "m2",
                value: "7294.74"
            }
        ]
    },
    {
        columnName: "EX",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 462
            },
            {
                name: "m2",
                value: 2610 
            },
            {
                name: "66 chapas",
                value: "GRANITO PRETO VIA LACTEA"
            },
            {
                name: "48 chapas",
                value: "GRANITO PRETO SAO GABRIEL"
            },
            {
                name: "37 chapas",
                value: "GRANITO VERDE PANORAMA"
            }
        ]
    },
    {
        columnName: "A",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 198
            },
            {
                name: "m2",
                value: 1100 
            },
            {
                name: "63 chapas",
                value: "GRANITO CINZA CORUMBA"
            },
            {
                name: "37 chapas",
                value: "GRANITO PRETO SAO GABRIEL"
            },
            {
                name: "23 chapas",
                value: "GRANITO VERDE PANORAMA 23"
            }
        ]
    },
    {
        columnName: "A+",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 2
            },
            {
                name: "m2",
                value: "12.00" 
            },
            {
                name: "2 chapas",
                value: "GRANITO BRANCO ITAUNAS"
            },
            {
                name: "0 chapas",
                value: "VAZIO"
            },
            {
                name: "0 chapas",
                value: "VAZIO"
            }
        ]
    },
    {
        columnName: "B",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 248
            },
            {
                name: "m2",
                value: 1420 
            },
            {
                name: "92 chapas",
                value: "GRANITO PRETO SAO GABRIEL"
            },
            {
                name: "61 chapas",
                value: "GRANITO BRANCO SIENA"
            },
            {
                name: "41 chapas",
                value: "GRANITO VERDE PANORAMA"
            }
        ]
    },
    {
        columnName: "B+",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 6
            },
            {
                name: "m2",
                value: "35.58" 
            },
            {
                name: "6 chapas",
                value: "GRANITO BRANCO ITAUNAS"
            },
            {
                name: "0 chapas",
                value: "VAZIO"
            },
            {
                name: "0 chapas",
                value: "VAZIO"
            }
        ]
    },
    {
        columnName: "Outras",
        type: "normal",
        items: [
            {
                name: "chapas",
                value: 381
            },
            {
                name: "m2",
                value: 7550 
            },
            {
                name: "381 chapas",
                value: "GRANITO PRETO SAO GABRIEL"
            },
            {
                name: "91 chapas",
                value: "GRANITO BRANCO ITAUNAS"
            },
            {
                name: "70 chapas",
                value: "GRANITO VERDE PEROLA"
            }
        ]
    },
]

export default dados