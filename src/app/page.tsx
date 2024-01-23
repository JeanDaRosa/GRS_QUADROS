import MapLocation from './components/map_location/index'
import CardHome from './components/CardHome'

export default function Home() {
  return (
    <>
      <div className='h-full w-full bg-gray-200 flex flex-col items-center p-4'>
        <h5 className="mt-4 mb-4 text-3xl font-semibold text-gray-800 text-center">GRS Quadros e Sublimação</h5>
        <CardHome
          texto="Desenvolvimento de Artes"
          subtexto="Da concepção à materialização, nossa equipe dedicada de designers transforma suas ideias em obras de arte exclusivas, alinhadas à identidade única da sua marca. Cada criação é pensada para transmitir a essência e valores que tornam sua marca memorável."
          imagem="/desenvolvimento_arte.jpg"
          alinhamento="esquerda"
        />

        <CardHome
          texto="Impressão de Fotolito"
          subtexto="Nossa tecnologia avançada de impressão de fotolito garante não apenas a reprodução fiel, mas a superação das suas expectativas. Cada detalhe é cuidadosamente reproduzido, resultando em uma qualidade de imagem que destaca e valoriza seus projetos."
          imagem="/fotolito.jpg"
          alinhamento="direita"
        />

        <CardHome
          texto="Esticagem Pneumática"
          subtexto="Preparamos suas telas com precisão e cuidado, utilizando a esticagem pneumática para garantir uma superfície perfeita. Telas serigráficas prontas para ação, proporcionando a base ideal para expressar suas ideias com nitidez e impacto."
          imagem="/esticagem.jpg"
          alinhamento="esquerda"
        />

        <CardHome
          texto="Gravação de Quadros"
          subtexto="Na gravação de quadros, não poupamos esforços para criar a base perfeita para sua estamparia. Cada quadro é gravado com maestria, capturando detalhes essenciais e garantindo que sua estamparia alcance níveis excepcionais de qualidade e durabilidade."
          imagem="/serigrafia.png"
          alinhamento="direita"
        />
        <MapLocation />
      </div>
    </>
  )
}
