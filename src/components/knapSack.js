const print_matriz = (table) => {
    let str = '';

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            str += table[i][j] + ' | ';
        }
        str += '\n';
    }
    console.log(str + '\n');
}

// pega 15 alimentos aleatorios
const getRandomFoods = (foods) => {
    const randomFoods = [];
    for (let i = 0; i < 15; i++) {
        const random = foods[(Math.random() * foods.length) | 0];
        randomFoods.push(random);
    }
    console.log(randomFoods)
    return randomFoods;
}


//Depois de escolher o personagem, ele possui um peso da mochila
const knapSack = (foods, bag_weight) => {
    const qtdItens = foods.length;

    // Tabela usada na DP
    let M = new Array(qtdItens);

    // Tabela de seleção de itens
    let selection = new Array(qtdItens);;

    for (let i = 0; i < qtdItens; i++) {
        M[i] = new Array(bag_weight + 1).fill(0);
        selection[i] = new Array(bag_weight + 1).fill(0);
    }

    for (let i = 1; i < qtdItens; i++) {
        for (let j = 1; j <= bag_weight; j++) {
            // Inicialmente não pegamos esse objeto
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

    //print_matriz(selection);

    const selectedFoods = [];
    let m = bag_weight;

    for (let i = qtdItens - 1; i >= 1; i--) {
        if (selection[i][m] === 1) {
            console.log(foods[i].name, foods[i].life, foods[i].weight);
            selectedFoods.push(foods[i]);
            m = m - foods[i].weight;
        }
    }

    let bestValue = M[qtdItens - 1][bag_weight];
    console.log({ 'bestValue': bestValue, 'selectedFoods': selectedFoods })
    return { 'bestValue': bestValue, 'selectedFoods': selectedFoods };
}

export default { knapSack, getRandomFoods };
