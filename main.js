let products = [
    {
        title: 'moloko',
        type: 'milk',
        price: 10000
    },
    {
        title: 'potato',
        type: 'vegetables',
        price: 6000
    },
    {
        title: 'chocolate',
        type: 'milk',
        price: 18000
    },
    {
        title: 'cheese',
        type: 'milk',
        price: 64000
    },
    {
        title: 'pivo',
        type: 'alcohol',
        price: 12000
    },
    {
        title: 'tomato',
        type: 'vegetables',
        price: 17000
    },
    {
        title: 'zelen',
        type: 'vegetables',
        price: 2500
    },
    {
        title: 'yogurt',
        type: 'milk',
        price: 11000
    },
    {
        title: 'viski',
        type: 'alcohol',
        price: 540000
    },
    {
        title: 'champane',
        type: 'alcohol',
        price: 70000
    },
    {
        title: 'moloko',
        type: 'milk',
        price: 10000
    },
    {
        title: 'potato',
        type: 'vegetables',
        price: 6000
    },
    {
        title: 'chocolate',
        type: 'milk',
        price: 18000
    },
    {
        title: 'cheese',
        type: 'milk',
        price: 64000
    },
    {
        title: 'pivo',
        type: 'alcohol',
        price: 12000
    },
    {
        title: 'tomato',
        type: 'vegetables',
        price: 17000
    },
    {
        title: 'zelen',
        type: 'vegetables',
        price: 2500
    },
    {
        title: 'yogurt',
        type: 'milk',
        price: 11000
    },
    {
        title: 'viski',
        type: 'alcohol',
        price: 540000
    },
    {
        title: 'champane',
        type: 'alcohol',
        price: 70000
    },
]

let catefories = [
  {
    type: "vegetables",
    count: 0,
    total: 0  
  },
  {
    type: "alcohol",
    count: 0,
    total: 0
  },
  {
    type: "milk",
    count: 0,
    total: 0
  },
]

// Создать категориям новый ключ arr
// В эти ключи запушить продукты относящиеся этой же категории
// Сортировать ключ arr по алфавиту 


const setup = () => {
    for(let itemTwo of catefories) {
        itemTwo.arr = []
        for (let item of products) {
            if (item.type === itemTwo.type) {
                itemTwo.count++
                itemTwo.total += item.price
                itemTwo.arr.push(item.title)
                
            }
        }
        itemTwo.arr.sort()
    }
    console.log(catefories);
}

setup()