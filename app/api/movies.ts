export type Movie = {
    imdbid: string;
    title: string;
    synopsis: string;
    imageurl: string[];
    released: number;
    genre: string[];
    imdbrating: number;
    searchRate: number;
}

export async function getMovies (search?: string | null, tag?: string | null) {
  try {
    console.log(tag);
    if (search || tag) {
    moviesArray.forEach(movie => {
      if (search) {
        movie.searchRate! +=
          (movie.title.toLowerCase().includes(search.toLowerCase()) ? 1 : 0) +
          (movie.synopsis.toLowerCase().includes(search.toLowerCase()) ? 1 : 0);
      }
      if (tag) {
        movie.searchRate! += movie.genre.includes(tag) ? 1 : 0;
      }
    });

    return moviesArray
      .filter(movie => movie.searchRate !== 0)
      .sort((a, b) => b.searchRate - a.searchRate);
  }

    return moviesArray;
  } catch (error) {
    console.error(error);
  }
}

export async function  getMovieById(id: string) {
  const movie: Movie | undefined = moviesArray.find(m => m.imdbid === id);

  return movie;
}

const moviesArray: Movie[] = [
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Animation' ],
      imdbid: 'tt9580138',
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      imdbrating: 7.4,
      released: 2020,
      synopsis: 'Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Thriller' ],
      imdbid: 'tt8936646',
      title: 'Extraction',
      imdbrating: 6.7,
      released: 2020,
      synopsis: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNzU1ZTE4YzAtOWNkYi00YWE4LThmY2YtMDNlYzU2ZTgxYTc2XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Crime' ],
      imdbid: 'tt8851668',
      title: 'The Lovebirds',
      imdbrating: 6,
      released: 2020,
      synopsis: 'A couple (Issa Rae and Kumail Nanjiani) experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Crime' ],
      imdbid: 'tt8629748',
      title: 'Spenser Confidential',
      imdbrating: 6.2,
      released: 2020,
      synopsis: 'When two Boston police officers are murdered, ex-cop Spenser teams up with his no-nonsense roommate, Hawk, to take down criminals.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNjg4MjRhZjgtNTIxOS00MmRjLTg4NTEtNjBkNzkwZjAxMjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Horror', 'Thriller' ],
      imdbid: 'tt8244784',
      title: 'The Hunt',
      imdbrating: 6.5,
      released: 2020,
      synopsis: "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNzMyOWRjYjUtMjc2OC00MWUyLWEzODktYWZlZDYxYjk4MDViXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy' ],
      imdbid: 'tt8242084',
      title: 'My Spy',
      imdbrating: 6.3,
      released: 2020,
      synopsis: 'A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Drama', 'Sci-Fi' ],
      imdbid: 'tt7737786',
      title: 'Greenland',
      imdbrating: 6.4,
      released: 2020,
      synopsis: 'A family struggles for survival in the face of a cataclysmic natural disaster.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Comedy' ],
      imdbid: 'tt7713068',
      title: 'Birds of Prey',
      imdbrating: 6,
      released: 2020,
      synopsis: 'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Fantasy' ],
      imdbid: 'tt7556122',
      title: 'The Old Guard',
      imdbrating: 6.6,
      released: 2020,
      synopsis: 'A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOTE3MzRkODctZjJmNi00NTI1LTk3NmItZTMxNzg2NWJkZDBiXkEyXkFqcGdeQXVyNjQyNjgwNjU@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Horror', 'Sport' ],
      imdbid: 'tt7397552',
      title: 'Adrenaline Rush',
      imdbrating: 7.1,
      released: 2020,
      synopsis: '',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BYTUwODExOTItNTQ1Mi00MGI5LWI0NjQtMDBiYWQ2ZjFkMDI2XkEyXkFqcGdeQXVyNTg3NDYxMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Drama' ],
      imdbid: 'tt7370170',
      title: 'Ride Hard: Live Free',
      imdbrating: 8.2,
      released: 2020,
      synopsis: 'Ride Hard, Live Free Savagery reigns. The world has been thrown into an unrelenting dystopia of unchecked violence. Governments have dissolved. Survival has been reduced to a more primitive...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BYjE2MjIwMmYtM2ZiMy00MzdmLTkyNTYtNmFiNjM5MDJhMGVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Crime', 'Mystery' ],
      imdbid: 'tt7149730',
      title: 'The Silencing',
      imdbrating: 6.2,
      released: 2020,
      synopsis: 'A reformed hunter living in isolation on a wildlife sanctuary becomes involved in a deadly game of cat and mouse when he and the local Sheriff set out to track a vicious killer who may have kidnapped his daughter years ago.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Sci-Fi' ],
      imdbid: 'tt6723592',
      title: 'Tenet',
      imdbrating: 7.3,
      released: 2020,
      synopsis: 'Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMjU3ODRmMWMtMDU5OS00ZWFkLWI1NjMtNzZkN2Y0MjQ2YzlmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzMxMDc0Njk@._V1_UY268_CR137,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt6359464',
      title: 'Red Cargo',
      imdbrating: 7.4,
      released: 2020,
      synopsis: 'Two undercover agents sent to get rid of rhino poaching syndicate, become the hunted after discovering that high ranking government officials are implicated.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZWI2MTRiYjAtODlhNi00YzkzLWI1NjYtODkxZGI2NmQ2NDIyXkEyXkFqcGdeQXVyMjQwODkxNzg@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Crime', 'Thriller' ],
      imdbid: 'tt6075690',
      title: 'Operation Agneepath',
      imdbrating: 8.6,
      released: 2020,
      synopsis: 'Shehzad Khan Rana (Shakib Khan) is a loyal officer of Bangladesh. He has the task to stop Julfiqar Mirza (Misa Sawdagar) who was planning a terrorist attack in Bangladesh. In the pursuit of...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Drama', 'History' ],
      imdbid: 'tt6048922',
      title: 'Greyhound',
      imdbrating: 7,
      released: 2020,
      synopsis: 'Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.'   ,
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNGNhZTk5M2MtMzUzYy00NmZkLTljZmItZTU5MDU4Y2M0N2I4XkEyXkFqcGdeQXVyMjM1NTY3Njk@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Horror' ],
      imdbid: 'tt5654204',
      title: '#Slaughterhouse',
      imdbrating: 6.8,
      released: 2020,
      synopsis: 'A romantic spring getaway turns sinister when unexpected visitors join the party in a high-tech house that no one can escape.'  ,
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BN2NiYzMyZmQtMDBkNC00Y2NkLWI1NjctZmQyNjM3ZWQ5YTc4XkEyXkFqcGdeQXVyMzAyNDMxMDQ@._V1_UY268_CR3,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Thriller' ],
      imdbid: 'tt5612690',
      title: 'No Remorse',
      imdbrating: 6.2,
      released: 2020,
      synopsis: '',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMTg4NjQwNjk0NV5BMl5BanBnXkFtZTgwMzcyNTc1NzE@._V1_UY268_CR3,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Crime' ],
      imdbid: 'tt5274150',
      title: 'Banned, Exploited & Blacklisted: The Underground Work of Controversial Filmmaker Shane Ryan',
      imdbrating: 6.2,
      released: 2020,
      synopsis: "A collection of Ryan's work including short films, music videos, trailers/clips from both released feature films and uncompleted features, concept trailers, behind-the-scenes footage, interviews, and Ryan's childhood filmmaker beginnings.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMThlZjkzMzAtMGNiMy00ZjNiLWI4N2UtOTY5NTkyMGRiNTI4L2ltYWdlXkEyXkFqcGdeQXVyMTg1MTg3Njc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Crime' ],
      imdbid: 'tt4424284',
      title: 'Seth and Tia',
      imdbrating: 6.7,
      released: 2020,
      synopsis: "Two patients, Seth and Tia develop a friendship during their stay in a mental institution. They decide to make a plan to break out, but they can't do it alone,so they ally with an enemy ...",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMjM4NTEyNjAxMl5BMl5BanBnXkFtZTgwNzMzMDc0NTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Documentary' ],
      imdbid: 'tt3807352',
      title: 'Chasing Red',
      imdbrating: 8.9,
      released: 2020,
      synopsis: "Everyone has heard of Pamplona's Running of the Bulls, yet so few know much about it. Even fewer know that there is an elite group of runners who brave dozens of bull runs each year, ...",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BYTQwNmFlY2ItOTQwMy00YzYxLWE4Y2EtNWZmNTc4Y2RkZWU2XkEyXkFqcGdeQXVyNTc2NTUxNA@@._V1_UY268_CR11,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Animation', 'Horror' ],
      imdbid: 'tt3518152',
      title: 'Necroland',
      imdbrating: 7.9,
      released: 2020,
      synopsis: 'In the near future, Earth has changed even more for the worse as far as weather and human behavior. Different seasonal conditions appear around every corner. Half the population has ...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMDM3YjZlMjctNmNiMC00NTIxLWE2OWMtNmU2NDMzNTUxNGFiXkEyXkFqcGdeQXVyNTA4NDgzMw@@._V1_UY268_CR1,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Crime' ],
      imdbid: 'tt3290322',
      title: 'The Runners',
      imdbrating: 6,
      released: 2020,
      synopsis: 'When his little sister is abducted from a homecoming after-party in rural East Texas, Ryan is in a race against the clock to save her before she disappears into the underworld of sex trafficking forever.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMjc1ZTNhODctNTdmZC00YjJiLTljYWItOGI1Nzc3MTMzMzM2XkEyXkFqcGdeQXVyODM3MzI1NA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy' ],
      imdbid: 'tt3279024',
      title: 'Lumpia with a Vengeance',
      imdbrating: 7.8,
      released: 2020,
      synopsis: "The LUMPIA-armed hero reappears in Fogtown and teams up with high school student Rachel to prevent a mysterious crime syndicate from destroying their town, and her parents' dream wedding.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOGJlMTc5YmYtYjFlNi00ZDJiLWFhNWMtMjc0NDBjOWNkNjA1XkEyXkFqcGdeQXVyMTA5NzExNzM1._V1_UY268_CR110,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Crime', 'Drama' ],
      imdbid: 'tt1838556',
      title: 'Honest Thief',
      imdbrating: 6,
      released: 2020,
      synopsis: "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Crime' ],
      imdbid: 'tt1502397',
      title: 'Bad Boys for Life',
      imdbrating: 6.5,
      released: 2020,
      synopsis: 'Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BY2QyZTJmZTMtM2Q3Zi00NjUyLTk5NzctOTg0MjI4OWEwYjg3XkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_UY268_CR9,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Animation' ],
      imdbid: 'tt12093878',
      title: 'LEGO DC: Shazam - Magic & Monsters',
      imdbrating: 6.2,
      released: 2020,
      synopsis: "When the boy hero Shazam is offered to join the Justice League he is reluctant about it, but when his rivals the Monster Society put the League in peril he's the only one who can save them.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNTkyMzU2NDgtZjEwYy00MjA1LThlNGYtNzNmZmYzYTFkMmQ4XkEyXkFqcGdeQXVyMTEyNDI0NjIy._V1_UY268_CR21,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Animation' ],
      imdbid: 'tt12064860',
      title: 'Super Mario Bros. Z 4K',
      imdbrating: 8.6,
      released: 2020,
      synopsis: 'The complete original Super Mario Bros. Z series remastered in 4K video quality in one video.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BMTYyOTIwYmYtZmQyMi00MTUwLWI2ZDItYTBjNDVhMWFhNWFlXkEyXkFqcGdeQXVyMTE1NjI5NTc2._V1_UY268_CR9,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Mystery' ],
      imdbid: 'tt12059646',
      title: 'Anonymous Vol. 1 - The Dreamland Adventures the Mysteries of Atlantis',
      imdbrating: 7.8,
      released: 2020,
      synopsis: "A Agent inside a dark NASA division using alien technology is hi-jacked by a new nation in Antarctica rising from the roots of Hitler's Vrill society. Agent Schwartz turns to his Russian ...",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNWIxOTNiZGItZjNiMi00OTY2LTk5NjYtYjlmNDhkYjE1OGNiXkEyXkFqcGdeQXVyOTEyNjEzNjg@._V1_UY268_CR3,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Drama' ],
      imdbid: 'tt12043434',
      title: 'A Free Can Gangster',
      imdbrating: 7.7,
      released: 2020,
      synopsis: 'A young Senegalese immigrant is trying to survive in London after the home office has rejected his application for residency.Lost his father from prostate Cancer, he need to find away to ...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BYTlhYjRmYmUtYTJlMS00OWMyLTk4MzUtMDQ3ODU3MWZjMDNkXkEyXkFqcGdeQXVyODk1MzE0Mzk@._V1_UY268_CR147,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Adventure', 'Animation' ],
      imdbid: 'tt12042710',
      title: 'Enchantimals: Spring Into Harvest Hills',
      imdbrating: 6.1,
      released: 2020,
      synopsis: '',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZDBiZGQ0YjgtNzY1Mi00MTNiLThjODktMjBhMDA4OGQ5M2YwXkEyXkFqcGdeQXVyNjA0MDQ1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Drama' ],
      imdbid: 'tt11946452',
      title: 'Crossing the Line',
      imdbrating: 6.8,
      released: 2020,
      synopsis: 'A Mexican Sicario runs into a world of challenges when the cartel leader, "The Viper" assigns a Middle Eastern Hitman to accompany him on missions. The Iraqi methods are different than the established norms of the cartel.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNjEzYzI2YTktNjRmZS00MmE1LWFhMjgtMWI3OTU3MzQ1ZDAzXkEyXkFqcGdeQXVyMjExMDE1MzQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt11942126',
      title: '007: Shadows',
      imdbrating: 8.4,
      released: 2020,
      synopsis: '',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZTgyNWM0NDktOWI5Ny00YjhhLWJjZmMtOTc0ODM0MjQzOTdlXkEyXkFqcGdeQXVyNjQ4Njg2NDc@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Crime', 'Drama' ],
      imdbid: 'tt11899710',
      title: 'Hitter Twist',
      imdbrating: 7.6,
      released: 2020,
      synopsis: "A genius, seventeen-year-old drug dealer/musician comes to realize that the 'victimless crime' of helping his friends get high has connected him with vicious mobsters and ruthless thieves. ...",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BN2EzYzhlNjUtNjE5Ni00MzE1LWE2NDgtZDEwYjY5N2ZhNjQ0XkEyXkFqcGdeQXVyMTE4NzcwOTM4._V1_UY268_CR3,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy', 'Horror' ],
      imdbid: 'tt11890562',
      title: 'Concrete shark',
      imdbrating: 7.8,
      released: 2020,
      synopsis: 'The director of the concrete plant fell into the concrete mixer. The devil from hell turned him into a concrete shark. Save the world from another monster will locksmiths Michael and Azamat.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BYjg0YTMwZWItODg0NC00YTRjLWE5MTAtZTdmNjQ0Y2Q0NGEzXkEyXkFqcGdeQXVyMTkwNzExODQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Mystery', 'Thriller' ],
      imdbid: 'tt11714030',
      title: 'Hell Hole',
      imdbrating: 7.1,
      released: 2020,
      synopsis: 'Just outside a desolate ghost town, inside a long-abandoned gold mine, lurks a dark being, conjured by the Shanowah tribe ages ago to destroy those that threatened to wipe out their people....',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZDk4ZDM0YmQtOTRjMC00MmYyLTgyZjAtNzE3YzVhZWM3MmMzXkEyXkFqcGdeQXVyMTEyOTgxMDA5._V1_UX182_CR0,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy' ],
      imdbid: 'tt11690838',
      title: "The Legend of Baron To'a",
      imdbrating: 6.3,
      released: 2020,
      synopsis: "Fritz, a young Tongan man grappling with his wrestling superstar father Baron To'a's legacy, both metaphorically and literally following in his deceased father's footsteps by fighting for the return of his dad's stolen championship belt.",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOTY1MTQ1NzgtZTQwNi00ZjA2LTllNWUtNjY0MzY1ZDI1YjM5XkEyXkFqcGdeQXVyMTAwNDYzNzgz._V1_UY268_CR159,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Biography', 'Documentary' ],
      imdbid: 'tt11634288',
      title: 'Battle of Little Bighorn',
      imdbrating: 6,
      released: 2020,
      synopsis: 'The U.S. expands westward after the Civil War displacing the last of the free-roaming Native Americans onto Reservations. This show focuses special attention on General George A. Custer and...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOGQzZDE2MDctNTUwNy00MDY1LThlOTItMzE5MWViNTFjMDBiXkEyXkFqcGdeQXVyODkxNzcyODc@._V1_UY268_CR98,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt11343368',
      title: 'Pocket Full of Game',
      imdbrating: 6.4,
      released: 2020,
      synopsis: 'Porsha is a female hustler who has it all money, beauty, respect. She earned it all by being loyal and respecting the codes of the street. A chance encounter with a stick up kid named Fresh introduces her to a whole new world.',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BOWJlY2M2NTktZWYxYi00ZWNjLTlhNmMtYjM0ZjBjY2JhZTgxXkEyXkFqcGdeQXVyMTAxMzMxNjk2._V1_UY268_CR7,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt11207956',
      title: 'Sierra Sisters: The Hunt for Blackbeards Treasure',
      imdbrating: 7.6,
      released: 2020,
      synopsis: 'Follow treasure hunting sisters Hera and Athena as they embark on a journey to find the legendary treasure of Blackbeard the pirate. Along the way they encounter shadowy figures and ...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BNjdjOTI0NmYtNGEzYy00MmE3LWFkNDItZmU2YWJkODFmNjg1XkEyXkFqcGdeQXVyNTE3Njk0Ng@@._V1_UY268_CR16,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt11131480',
      title: '16 Bars',
      imdbrating: 7.5,
      released: 2020,
      synopsis: 'This story follows Drew (played by emerging musical artist, Vyse), an aspiring young rapper as he is faced with the life struggles that led to his residence in a group home while balancing ...',
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BZjk0ZTk4OTQtYWYyZC00MTU5LTkxMjQtZDRlYjRkN2Y3ZjA5XkEyXkFqcGdeQXVyOTA1MDE3OA@@._V1_UY268_CR4,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action', 'Comedy' ],
      imdbid: 'tt11041352',
      title: 'Action',
      imdbrating: 6.2,
      released: 2020,
      synopsis: "An American action star from the 90's is shooting a movie in Bulgaria, while three of his (now grown up) fans try to meet their childhood idol. After a series of bad decisions, the three ...",
      searchRate: 0
    },
    {
      imageurl: [
        'https://m.media-amazon.com/images/M/MV5BM2VhNWU2NWUtOGQ5Ni00OTNmLWFiZWItYzlhYzAzNjZlMzY3XkEyXkFqcGdeQXVyODQ1NDg4NjQ@._V1_UY268_CR43,0,182,268_AL_.jpg'
      ],
      genre: [ 'Action' ],
      imdbid: 'tt10937188',
      title: 'Justice League Extinction',
      imdbrating: 7.4,
      released: 2020,
      synopsis: 'A year has passed since the mother boxes were destroyed. Unaware to the Justice League, the boxes have released a power surge that has attracted the attention of their creator, Brainiac.',
      searchRate: 0
    }
  ]