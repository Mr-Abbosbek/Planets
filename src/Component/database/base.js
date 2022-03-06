import { BiChevronRight } from "react-icons/bi";
import ImageList from "./../mercury/Image0";
import ImageList1 from "./../mercury/Image1";
import ImageList2 from "./../mercury/Image2";
import ImageVenus1 from "./../venus/Image0";
import ImageVenus2 from "./../venus/Image1";
import ImageVenus3 from "./../venus/Image2";
import ImageEarth1 from "./../earth/Image0";
import ImageEarth2 from "./../earth/Image1";
import ImageEarth3 from "./../earth/Image2";
import ImageMars1 from "./../mars/Image0";
import ImageMars2 from "./../mars/Image1";
import ImageMars3 from "./../mars/Image2";
import ImageJupiter1 from "./../jupiter/Image0";
import ImageJupiter2 from "./../jupiter/Image1";
import ImageJupiter3 from "./../jupiter/Image2";
import ImageSaturn1 from "./../saturn/Image0";
import ImageSaturn2 from "./../saturn/Image1";
import ImageSaturn3 from "./../saturn/Image2";
import ImageUranus1 from "./../uranus/Image0";
import ImageUranus2 from "./../uranus/Image1";
import ImageUranus3 from "./../uranus/Image2";
import ImageNeptune1 from "./../uranus/Image0";
import ImageNeptune2 from "./../uranus/Image1";
import ImageNeptune3 from "./../uranus/Image2";

const Date = {
  menu: [
    {
      id: 1,
      url: "/",
      icon: <BiChevronRight />,
      text: "Mercury",
      background: "rgb(65, 158, 187)",
    },
    {
      id: 2,
      url: "/venus",
      icon: <BiChevronRight />,
      text: "Venus",
      background: "rgb(237, 162, 73)",
    },
    {
      id: 3,
      url: "/earth",
      icon: <BiChevronRight />,
      text: "Earth",
      background: "rgb(109, 46, 213)",
    },
    {
      id: 4,
      url: "/mars",
      icon: <BiChevronRight />,
      text: "Mars",
      background: "rgb(209, 76, 50)",
    },
    {
      id: 5,
      url: "/jupiter",
      icon: <BiChevronRight />,
      text: "Jupiter",
      background: "rgb(216, 58, 52)",
    },
    {
      id: 6,
      url: "/saturn",
      icon: <BiChevronRight />,
      text: "Saturn",
      background: "rgb(205, 81, 32)",
    },
    {
      id: 7,
      url: "/uranus",
      icon: <BiChevronRight />,
      text: "Uranus",
      background: "rgb(30, 193, 162)",
    },
    {
      id: 8,
      url: "/neptune",
      icon: <BiChevronRight />,
      text: "Neptune",
      background: "rgb(45, 104, 240)",
    },
  ],
  mercury: [
    {
      id: 1,
      name: "Mercury",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
          img: "./images/mercuriy.png",
          id_show: "",
          componentName: ImageList,
        },
        {
          id: 2,
          name: "internal structure",
          text: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
          img: "./images/mercuriy-structure.png",
          id_show: " ",
          componentName: ImageList1,
        },
        {
          id: 3,
          name: "surface geology",
          text: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
          img: "./images/mercuriy-geo.png",
          id_show: "  ",
          componentName: ImageList2,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "58.6 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "87.97 days",
        },
        {
          id: 3,
          name: "radius",
          data: "2,439.7 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "430°c",
        },
      ],
    },
  ],
  venus: [
    {
      id: 1,
      name: "Venus",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
          img: "./images/venus.png",
          id_show: "venus",
          componentName: ImageVenus1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
          img: "./images/venus-structure.png",
          id_show: "venus ",
          componentName: ImageVenus2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
          img: "./images/venus-geo.png",
          id_show: "venus  ",
          componentName: ImageVenus3,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "243 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "224.7 days",
        },
        {
          id: 3,
          name: "radius",
          data: "6,051.8 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "471°c",
        },
      ],
    },
  ],
  earth: [
    {
      id: 1,
      name: "Earth",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
          img: "./images/earth.png",
          id_show: "earth",
          componentName: ImageEarth1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
          img: "./images/earth-structure.png",
          id_show: "earth ",
          componentName: ImageEarth2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
          img: "./images/earth-geo.png",
          id_show: "earth  ",
          componentName: ImageEarth3,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "0.99 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "365.26 days",
        },
        {
          id: 3,
          name: "radius",
          data: "6,371 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "16°c",
        },
      ],
    },
  ],
  mars: [
    {
      id: 1,
      name: "Mars",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the",
          img: "./images/mars.png",
          id_show: "mars",
          componentName: ImageMars1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
          img: "./images/mars-structure.png",
          id_show: "mars ",
          componentName: ImageMars2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
          img: "./images/mars-geo.png",
          id_show: "mars  ",
          componentName: ImageMars3,
        },
      ],
      about: [
        {
          name: "rotation time",
          data: "1.03 days",
        },
        {
          name: "revolution time",
          data: "1.88 days",
        },
        {
          name: "radius",
          data: "3,389.5 km",
        },
        {
          name: "average temp",
          data: "-28°c",
        },
      ],
    },
  ],
  jupiter: [
    {
      id: 1,
      name: "Jupiter",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
          img: "./images/jupiter.png",
          id_show: "jupiter",
          componentName: ImageJupiter1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
          img: "./images/jupiter-structure.png",
          id_show: "jupiter ",
          componentName: ImageJupiter2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
          img: "./images/jupiter-geo.png",
          id_show: "jupiter  ",
          componentName: ImageJupiter3,
        },
      ],
      about: [
        {
          name: "rotation time",
          data: "9.93 days",
        },
        {
          name: "revolution time",
          data: "11.86 days",
        },
        {
          name: "radius",
          data: "69.911 km",
        },
        {
          name: "average temp",
          data: "-108°c",
        },
      ],
    },
  ],
  saturn: [
    {
      id: 1,
      name: "Saturn",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
          img: "./images/saturn.png",
          id_show: "saturn",
          componentName: ImageSaturn1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
          img: "./images/saturn-structure.png",
          id_show: "saturn ",
          componentName: ImageSaturn2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
          img: "./images/saturn-geo.png",
          id_show: "saturn  ",
          componentName: ImageSaturn3,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "10.8 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "29.46 days",
        },
        {
          id: 3,
          name: "radius",
          data: "58.232 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "-138°c",
        },
      ],
    },
  ],
  uranus: [
    {
      id: 1,
      name: "Uranus",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
          img: "./images/uranus.png",
          id_show: "uranus",
          componentName: ImageUranus1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
          img: "./images/uranus-structure.png",
          id_show: "uranus ",
          componentName: ImageUranus2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
          img: "./images/uranus-geo.png",
          id_show: "uranus  ",
          componentName: ImageUranus3,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "17.2 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "84 days",
        },
        {
          id: 3,
          name: "radius",
          data: "25.362 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "-195°c",
        },
      ],
    },
  ],
  neptune: [
    {
      id: 1,
      name: "Neptune",
      wikipediaLink: "https://wikipedia.com",
      wikipediaIcon: "./images/Shape.png",
      features: [
        {
          id: 1,
          name: "overview",
          text: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
          img: "./images/neptune.png",
          id_show: "neptune",
          componentName: ImageNeptune1,
        },
        {
          id: 2,
          name: "internal structure",
          text: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
          img: "./images/neptune-structure.png",
          id_show: "neptune ",
          componentName: ImageNeptune2,
        },
        {
          id: 3,
          name: "surface geology",
          text: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
          img: "./images/neptune-geo.png",
          id_show: "neptune  ",
          componentName: ImageNeptune3,
        },
      ],
      about: [
        {
          id: 1,
          name: "rotation time",
          data: "16.08 days",
        },
        {
          id: 2,
          name: "revolution time",
          data: "164.79 days",
        },
        {
          id: 3,
          name: "radius",
          data: "24.622 km",
        },
        {
          id: 4,
          name: "average temp",
          data: "-201°c",
        },
      ],
    },
  ],
  // planets: [
  //   {

  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  //   {
  //
  //   },
  // ]
};
export default Date;
