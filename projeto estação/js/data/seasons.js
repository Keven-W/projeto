// Seasons data with Portuguese descriptions
const seasons = [
    {
      id: 'spring',
      name: 'Primavera',
      description: 'A primavera é a estação do ano que sucede o inverno e precede o verão. É tipicamente associada ao reflorescimento da flora e da fauna, à renovação da vida. Durante esta estação, as temperaturas começam a aumentar gradualmente, os dias tornam-se mais longos e as chuvas são mais frequentes, contribuindo para o crescimento das plantas. A primavera astronômica no hemisfério norte começa no equinócio de março (por volta de 20 de março) e termina no solstício de junho (por volta de 21 de junho). No hemisfério sul, ocorre entre setembro e dezembro.',
      color: '#ff7eb9',
      backgroundColor: '#f8ffd6',
      icon: 'flower'
    },
    {
      id: 'summer',
      name: 'Verão',
      description: 'O verão é a estação mais quente do ano, que sucede a primavera e precede o outono. É caracterizado por temperaturas elevadas, dias mais longos e noites mais curtas. Durante o verão, a radiação solar é mais intensa devido à inclinação do eixo da Terra em relação ao Sol. O verão astronômico no hemisfério norte inicia-se no solstício de junho (por volta de 21 de junho) e termina no equinócio de setembro (por volta de 23 de setembro). No hemisfério sul, ocorre entre dezembro e março, quando o hemisfério está mais inclinado em direção ao Sol.',
      color: '#ffbe0b',
      backgroundColor: '#fff1d0',
      icon: 'sun'
    },
    {
      id: 'autumn',
      name: 'Outono',
      description: 'O outono é a estação de transição entre o verão e o inverno, conhecida pela queda das folhas das árvores caducifólias e pela colheita de muitas culturas. As temperaturas começam a diminuir, os dias ficam mais curtos e as noites mais longas. Esta estação é caracterizada por uma paleta de cores quentes na natureza, com folhas que mudam para tons de vermelho, laranja e amarelo antes de caírem. O outono astronômico no hemisfério norte inicia-se no equinócio de setembro (por volta de 23 de setembro) e termina no solstício de dezembro (por volta de 21 de dezembro). No hemisfério sul, ocorre entre março e junho.',
      color: '#fb8500',
      backgroundColor: '#ffefcf',
      icon: 'leaf'
    },
    {
      id: 'winter',
      name: 'Inverno',
      description: 'O inverno é a estação mais fria do ano, que sucede o outono e precede a primavera. É caracterizado por temperaturas baixas, dias curtos e noites longas. Em muitas regiões, o inverno traz neve, geada e condições climáticas severas. Durante esta estação, muitas plantas entram em dormência e diversos animais hibernam ou migram para climas mais quentes. O inverno astronômico no hemisfério norte começa no solstício de dezembro (por volta de 21 de dezembro) e termina no equinócio de março (por volta de 20 de março). No hemisfério sul, ocorre entre junho e setembro.',
      color: '#8ecae6',
      backgroundColor: '#e9f5ff',
      icon: 'snowflake'
    }
  ];
  
  // Helper function to get season by ID
  function getSeasonById(id) {
    return seasons.find(season => season.id === id);
  }