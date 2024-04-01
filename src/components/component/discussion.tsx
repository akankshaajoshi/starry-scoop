import { Carousel, CarouselContent, CarouselItem } from "./../../components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";

const news = [
  {
    news: "NASA Discovers New Exoplanet with Potential for Life",
    image:
      "https://imgs.search.brave.com/qhxJqqpoNldE24fVLnu820cHmgHXTSu_POjYmuRfAwo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9leG9w/bGFuZXRzLm5hc2Eu/Z292L3JhaWxzL2Fj/dGl2ZV9zdG9yYWdl/L2Jsb2JzL3JlZGly/ZWN0L2V5SmZjbUZw/YkhNaU9uc2liV1Z6/YzJGblpTSTZJa0pC/YUhCQmFXTkVJaXdp/Wlhod0lqcHVkV3hz/TENKd2RYSWlPaUpp/Ykc5aVgybGtJbjE5/LS1hMWNkNDU1NDZm/MjA1Njg0MGQwZjg5/NDdkNDBjZTFmYTY2/MTViYmEzL2V4b3Bs/YW5ldF9leHBsb3Jh/dGlvbl9wcm9ncmFt/LmpwZz9kaXNwb3Np/dGlvbj1pbmxpbmU",
    title: "New Exoplanet Discovered in Alpha Centauri System",
    description:
      "NASA's latest discovery unveils a potentially habitable exoplanet within the Alpha Centauri star system, sparking hope for extraterrestrial life.",
    date: "March 15, 2024",
  },
  {
    news: "SpaceX Successfully Launches Crewed Mission to Mars",
    image:
      "https://imgs.search.brave.com/0vOOfgZx6Js_C5snqPoRHMZKnVwULUq9tPDLVnHf1-8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9m/L2YxL01hcnNfbWlz/c2lvbi5qcGc",
    title: "Historic SpaceX Mission Sends Astronauts to Mars",
    description:
      "SpaceX achieves another milestone as it launches the first crewed mission to Mars, marking a giant leap forward in human space exploration.",
    date: "April 2, 2024",
  },
  {
    news: "Hubble Telescope Captures Stunning Image of Galaxy Collision",
    image:
      "https://imgs.search.brave.com/jH6rxNamKqFSeSZYDzsbVNhjPpn-Y1pW3ylgCMINnXI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE5LzAzL3BvdHcx/OTA5YS1lMTU1MjU5/MDcwMzQzMC5qcGc_/cXVhbGl0eT04MiZz/dHJpcD1hbGwmdz0x/MDIwJmg9NTc0JmNy/b3A9MQ",
    title: "Hubble Telescope Observes Spectacular Galaxy Collision",
    description:
      "The Hubble Space Telescope captures an awe-inspiring image of two galaxies colliding, providing valuable insights into the cosmic dance of celestial bodies.",
    date: "February 28, 2024",
  },
  {
    news: "International Space Station Celebrates 25 Years in Orbit",
    image:
      "https://imgs.search.brave.com/YWk5JP5MbVR7zYT5EC_RILnpWNQkq4UUTVwzKrdjA9I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNDEvMjIxNDQx/LTEzOC00M0ZERjEx/My93aGF0LWhhcHBl/bnMtSW50ZXJuYXRp/b25hbC1TcGFjZS1T/dGF0aW9uLmpwZz93/PTgwMCZoPTQ1MCZj/PWNyb3A",
    title: "International Space Station Marks 25th Anniversary",
    description:
      "The International Space Station commemorates 25 years of continuous human habitation in space, showcasing the collaborative efforts of nations in space exploration.",
    date: "November 20, 2023",
  },
  {
    news: "Breakthrough in Black Hole Research Reveals New Insights",
    image:
      "https://imgs.search.brave.com/u_FNPKLAoZJ9lJ0EnWdMEX80i0MwmRT_Q-aaQPQ9GCY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vOTMvMjQwODkz/LTEzOC0yMDBCRDc1/Ri9CZXJrZWxleS1z/Y2llbnRpc3RzLWZp/bmQtYS13YXktdG8t/c2VlLWludmlzaWJs/ZS1ibGFjay1ob2xl/cy5qcGc_dz04MDAm/aD00NTAmYz1jcm9w",
    title: "Scientific Breakthrough Unveils Secrets of Black Holes",
    description:
      "Researchers announce a groundbreaking discovery shedding light on the mysterious nature of black holes, revolutionizing our understanding of these enigmatic cosmic entities.",
    date: "June 10, 2023",
  },
];

export const Discussion = () => {
  return (
    <Carousel className="flex items-center h-[100vh] w-[full] p-6" id="project">
      <CarouselContent>
        {news.map((newsItem, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 text-white">
              <Card className="w-full h-[80vh] p-6 overflow-hidden">
                <CardContent className="p-0 rounded-lg ">
                  <img src={newsItem.image} className="object-cover rounded-lg w-full h-[40vh] rounded-lg" />
                </CardContent>
                <CardHeader className="font-bold pt-[30px] pl-0">{newsItem.news}</CardHeader>
                <CardDescription>{newsItem.description}</CardDescription>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};
