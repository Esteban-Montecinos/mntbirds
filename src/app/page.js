import BirdsList from "./components/birds-list"
import FooterPagination from "./components/footer-pagination"

const getAllBirds = async () => {
  const data = await fetch('https://aves.ninjas.cl/api/birds').then(res => res.json())
  return data
}
export default async function Home() {
  const birds = await getAllBirds()
  const totalPaginas = Math.ceil(birds.length / 12)
  const paginaActual = birds.slice(0, 12)
  return (
    <main className="flex flex-row flex-wrap justify-center min-h-screen gap-2 p-2 m-auto max-w-7xl">
      <BirdsList birds={paginaActual} className="h-full" />
      <FooterPagination total={totalPaginas}/>
    </main>
  )
}
