import BirdCard from "./bird-card";
export default function BirdsList({ birds }) {
  return birds.map((bird) => (
    <BirdCard
      key={bird.uid}
      nombre={bird.name.spanish}
      imagen={bird.images.full}
      latin={bird.name.latin}
    />
  ));
}
