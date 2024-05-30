const allLinks = document.querySelectorAll('.tabs a')
const allTabs = document.querySelectorAll('.tab-content')

allLinks.forEach(el => {
  el.addEventListener('click', function(){
    const linkId = el.id
    const hrefLinkClick = el.href

    allLinks.forEach(link => {
      if(link.href === hrefLinkClick){
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })

    allTabs.forEach(tab => {
      if(tab.id.includes(linkId)){
        tab.classList.add('tab-content-active')
        //Gerando conteudo da aba
        generateTabItems(el, tab)
      } else {
        tab.classList.remove('tab-content-active')
      }
    })
  })
})

//Dados Mocked(exemplos)
const tabRecords = [
  {
    src: 'assets/space_simulator.png',
    name: 'Space Simulator',
    description: 'Game / Free / Simulation',
    type: 'games'
  },
  {
    src: 'assets/mechinarium.png',
    name: 'Mechinarium',
    description: 'Game / Paid / Adventure',
    type: 'games',
  },
  {
    src: 'assets/code_war.png',
    name: 'Code of War',
    description: 'Game / Free / Action',
    type: 'games',
  },
  {
    src: 'assets/oppenheimer.jpg',
    name: 'Oppenheimer',
    description: 'Drama / Thriller',
    type: 'movies',
  },
  {
    src: 'assets/barbie.png',
    name: 'Barbie',
    description: 'Comedy / Drama',
    type: 'movies',
  },
  {
    src: 'assets/lotr.jpeg',
    name: 'Lord of the rings: Fellowship of the ring',
    description: 'Fantasy',
    type: 'books',
  }
]

//Definindo filtros
const filter = {
  ['games']: (record) => record.type === 'games',
  ['movies']: (record) => record.type === 'movies',
  ['books']: (record) => record.type === 'books', 
}

//Função para gerar itens das abas
const generateTabItems = (elem, tabContent) =>{
  const filterName = elem.name

  const filterFunction = filter[filterName]
  
  const mappedRecord = tabRecords
    .filter(filterFunction)
    .map(
      record => {
        return DOMPurify
      }
    )
}
