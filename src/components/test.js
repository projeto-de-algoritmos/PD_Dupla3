const characters = [
    {
        "name": "Wilson",
        "bag": 30
    },
    {
        "name": "Willow",
        "bag": 150
    },
    {
        "name": "Wolfgang",
        "bag": 300
    },
    {
        "name": "Wendy",
        "bag": 150
    },
    {
        "name": "WX-78",
        "bag": 375
    },
    {
        "name": "Wickerbottom",
        "bag": 150
    },
    {
        "name": "Woodie",
        "bag": 150
    },
    {
        "name": "Wes",
        "bag": 375
    },
    {
        "name": "Maxwell",
        "bag": 150
    },
    {
        "name": "Wagstaff",
        "bag": 225
    },
    {
        "name": "Wigfrid",
        "bag": 120
    },
    {
        "name": "Webber",
        "bag": 175
    },
    {
        "name": "Walani",
        "bag": 200
    },
    {
        "name": "Warly",
        "bag": 250
    },
    {
        "name": "Wilbur",
        "bag": 175
    },
    {
        "name": "Woodlegs",
        "bag": 150
    },
    {
        "name": "Wilba",
        "bag": 200
    },
    {
        "name": "Wormwood",
        "bag": 150
    },
    {
        "name": "Wheeler",
        "bag": 150
    },
    {
        "name": "Winona",
        "bag": 150
    },
    {
        "name": "Wortox",
        "bag": 175
    },
    {
        "name": "Wurt",
        "bag": 250
    },
    {
        "name": "Walter",
        "bag": 110
    },
    {
        "name": "Wanda",
        "bag": 175
    }
]


const foods = [
    {}, // Dont remove this empty object 
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Aloe",
        "life": 8,
        "weight": 7
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/a/a8/Cooked_Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Aloe",
        "life": 3,
        "weight": 2
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Asparagus",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/f/fe/Cooked_Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Asparagus",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/9/92/Barnacles.png/revision/latest/scale-to-width-down/48?cb=20200702183944",
        "name": "Barnacles",
        "life": 0,
        "weight": 12
    },
]

function print_matriz(table) {
    let str = '';

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            str += table[i][j] + ' | ';
        }
        str += '\n';
    }
    console.log(str + '\n');
}

//Depois de escolher o personagem, ele possui um peso da mochila
const knapSack = (foods, bag_weight) => {
    const qtdItens = foods.length;

    // Tabela usada na DP
    let M = new Array(qtdItens);

    // Tabela de sele????o de itens
    let selection = new Array(qtdItens);;

    for (let i = 0; i < qtdItens; i++) {
        M[i] = new Array(bag_weight + 1).fill(0);
        selection[i] = new Array(bag_weight + 1).fill(0);
    }

    for (let i = 1; i < qtdItens; i++) {
        for (let j = 1; j <= bag_weight; j++) {
            // Inicialmente n??o pegamos esse objeto
            const VALUE_WITHOUT_THIS_ITEM = M[i - 1][j];

            M[i][j] = VALUE_WITHOUT_THIS_ITEM;
            selection[i][j] = 0;

            const life = foods[i].life;
            const weight = foods[i].weight;

            const VALUE_WITH_THIS_ITEM = life + M[i - 1][j - weight];

            if (weight <= j && VALUE_WITH_THIS_ITEM > VALUE_WITHOUT_THIS_ITEM) {
                M[i][j] = VALUE_WITH_THIS_ITEM;
                selection[i][j] = 1;
            }
        }
    }

    // print_matriz(M);
    // console.log("----------------------------------------------------------------------------------------------------")
    // print_matriz(selection);

    const selectedFoods = [];
    let m = bag_weight;

    for (let i = qtdItens - 1; i >= 1; i--) {
        if (selection[i][m] === 1) {
            selectedFoods.push(foods[i]);
            m = m - foods[i].peso;
        }
    }

    let bestValue = M[qtdItens - 1][bag_weight];
    return { 'bestValue': bestValue, 'selectedFoods': selectedFoods };
}

const M = knapSack(foods, characters[0].bag);
console.log(M)