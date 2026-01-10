export interface Animal {
  id: string;
  name: string;
  scientificName: string;
  shortDescription: string;
  fullDescription: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  rehabilitationStatus: string;
  tipsForChildren: string[];
  funFacts: string[];
  imageQuery: string;
  imageUrl: string;
}

export const animalData: Animal[] = [
  {
    id: "red-fox",
    name: "Red Fox",
    scientificName: "Vulpes vulpes",
    shortDescription: "A clever and adaptable mammal found throughout Britain",
    fullDescription: "The red fox is Britain's only wild member of the dog family. These intelligent creatures have adapted remarkably well to urban environments while maintaining strong populations in rural areas. Their distinctive russet coat and bushy tail make them easily recognizable.",
    habitat: "Woodlands, grasslands, urban areas",
    diet: "Omnivore - small mammals, birds, insects, fruits, and vegetables",
    conservationStatus: "Least Concern",
    rehabilitationStatus: "Currently caring for 3 fox cubs orphaned in spring",
    tipsForChildren: [
      "Never approach or feed wild foxes - they need to stay wild to survive",
      "If you see a fox during the day, don't worry - it's normal behavior",
      "Keep your garden wildlife-friendly by leaving wild areas for foxes to hunt",
      "Report injured foxes to wildlife rescue centers immediately"
    ],
    funFacts: [
      "Foxes use their tails for balance and communication",
      "A fox's den is called an 'earth'",
      "They can hear a mouse squeaking 100 feet away"
    ],
    imageQuery: "red fox wildlife",
    imageUrl: "/assets/images/Red_Fox.jpg"
  },
  {
    id: "european-hedgehog",
    name: "European Hedgehog",
    scientificName: "Erinaceus europaeus",
    shortDescription: "Britain's spiny garden friend facing population decline",
    fullDescription: "The European hedgehog is one of Britain's most beloved mammals, yet populations have declined by up to 50% in rural areas since 2000. These nocturnal insectivores play a crucial role in garden ecosystems, consuming slugs, beetles, and other invertebrates.",
    habitat: "Gardens, hedgerows, woodland edges, parks",
    diet: "Insectivore - beetles, caterpillars, earthworms, slugs",
    conservationStatus: "Vulnerable",
    rehabilitationStatus: "Overwintering 12 underweight hedgehogs for spring release",
    tipsForChildren: [
      "Create hedgehog highways by making 13cm x 13cm holes in garden fences",
      "Check carefully before mowing lawns or lighting bonfires",
      "Provide shallow water dishes but never milk (it makes them sick)",
      "Build log piles and leave wild areas for hedgehog homes",
      "Never use slug pellets - they poison hedgehogs"
    ],
    funFacts: [
      "Hedgehogs have around 5,000-7,000 spines",
      "They can travel up to 2km in a single night",
      "Baby hedgehogs are called 'hoglets'"
    ],
    imageQuery: "european hedgehog wildlife",
    imageUrl: "/assets/images/europian_hehgehog.jpg"
  },
  {
    id: "barn-owl",
    name: "Barn Owl",
    scientificName: "Tyto alba",
    shortDescription: "The ghostly white hunter of British farmlands",
    fullDescription: "With their heart-shaped face and silent flight, barn owls are one of Britain's most distinctive birds of prey. They hunt small mammals in open countryside, particularly favoring rough grassland where voles are abundant. Barn owls have faced challenges due to habitat loss and changing farming practices.",
    habitat: "Farmland, grassland, marshes, open countryside",
    diet: "Carnivore - primarily small mammals, especially field voles",
    conservationStatus: "Conservation Concern",
    rehabilitationStatus: "Treating 2 barn owls for collision injuries, preparing for release",
    tipsForChildren: [
      "Barn owls hunt at dawn and dusk - the best times to spot them",
      "They need old buildings and tree cavities for nesting",
      "Never disturb a barn owl nest - it's illegal and harmful",
      "Support farmers who leave wild margins around fields",
      "Report sightings to help monitor barn owl populations"
    ],
    funFacts: [
      "Barn owls can hunt in complete darkness using hearing alone",
      "They swallow prey whole and regurgitate pellets of bones and fur",
      "A barn owl pair can catch over 1,000 rodents per year"
    ],
    imageQuery: "barn owl british wildlife",
    imageUrl: "/assets/images/barn_owl.jpg"
  },
  {
    id: "european-badger",
    name: "European Badger",
    scientificName: "Meles meles",
    shortDescription: "Britain's largest land predator with distinctive stripes",
    fullDescription: "The European badger is an iconic British mammal, living in family groups in underground setts that can be centuries old. These powerful omnivores are most active at night, emerging from their setts to forage for earthworms, their favorite food. Badgers are protected by law in the UK.",
    habitat: "Woodland, farmland, urban edges with suitable digging sites",
    diet: "Omnivore - earthworms, insects, fruits, small mammals, cereals",
    conservationStatus: "Least Concern (but protected by law)",
    rehabilitationStatus: "Caring for 1 badger cub after mother was killed on road",
    tipsForChildren: [
      "Badgers are nocturnal - use red light torches if watching at dusk",
      "Never disturb a badger sett - it's illegal",
      "Drive carefully in rural areas, especially at night",
      "Badgers have poor eyesight but excellent hearing and smell",
      "Leave peanuts (unsalted) as treats if badgers visit your garden"
    ],
    funFacts: [
      "Badgers can eat hundreds of earthworms in one night",
      "Their setts can have dozens of entrances and multiple chambers",
      "Badgers are very clean and change their bedding regularly"
    ],
    imageQuery: "european badger wildlife",
    imageUrl: "/assets/images/European_badger.jpg"
  },
  {
    id: "red-squirrel",
    name: "Red Squirrel",
    scientificName: "Sciurus vulgaris",
    shortDescription: "Britain's native squirrel fighting for survival",
    fullDescription: "Once common throughout Britain, red squirrels are now confined mainly to Scotland, Northern England, and small pockets of Wales and southern England. They face competition from the introduced grey squirrel and are susceptible to squirrelpox virus. Conservation efforts are crucial for their survival.",
    habitat: "Coniferous and mixed woodland, particularly in Scotland",
    diet: "Herbivore - seeds, nuts, fungi, berries, tree shoots",
    conservationStatus: "Endangered in England and Wales",
    rehabilitationStatus: "Raising 4 orphaned red squirrel kits for release in protected area",
    tipsForChildren: [
      "Red squirrels are smaller and have ear tufts unlike grey squirrels",
      "Support red squirrel conservation projects in your area",
      "Plant native trees that provide food for red squirrels",
      "Report red squirrel sightings to conservation groups",
      "Never release grey squirrels - they threaten red squirrel survival"
    ],
    funFacts: [
      "Red squirrels can leap distances of up to 2 meters",
      "They don't hibernate but may sleep for several days in harsh weather",
      "Each squirrel can bury thousands of nuts, forgetting many and helping trees grow"
    ],
    imageQuery: "red squirrel british wildlife",
    imageUrl: "/assets/images/red_squirrel.jpg"
  },
  {
    id: "common-toad",
    name: "Common Toad",
    scientificName: "Bufo bufo",
    shortDescription: "Britain's warty amphibian on an incredible migration",
    fullDescription: "Common toads are remarkable amphibians that undertake mass migrations to their breeding ponds each spring, often returning to the same pond where they were born. Despite their name, they're becoming less common due to habitat loss, road mortality, and disease. These gentle creatures are important pest controllers in gardens.",
    habitat: "Gardens, woodland, grassland near ponds and wetlands",
    diet: "Carnivore - insects, slugs, worms, spiders",
    conservationStatus: "Common but declining",
    rehabilitationStatus: "Monitoring breeding pond and assisting toad crossings during migration",
    tipsForChildren: [
      "Toads have dry, warty skin while frogs have smooth, moist skin",
      "Help toads cross roads safely during spring migration (with adult supervision)",
      "Create log piles and stone walls for toad hibernation sites",
      "Build a wildlife pond to support toad breeding",
      "Never pick up toads roughly - they can secrete mild toxins when stressed"
    ],
    funFacts: [
      "Toads can live for 10-12 years, some even longer",
      "They can travel over a mile to reach their breeding pond",
      "Female toads can lay up to 5,000 eggs in long strings"
    ],
    imageQuery: "common toad british wildlife",
    imageUrl: "/assets/images/Common_toad.jpg"
  }
];
