import { useState } from 'react'
import api from './service/service';

function App(){ 
  const [url, setUrl] = useState([]);
  const [fotos, setFotos] = useState([]);
  const [aleatorio, setAleatorio] = useState(0);
  const api_key = 'vXAKsbaHrL26t1QZvDPF7LNkGqraQJlK3c1SWEDx';

  function geraNumeroAleatorio(){
    let numero = Math.floor(Math.random() * 10);
    setAleatorio(numero)
  } 

  async function geraFotos(){
    api.get('&page=' + aleatorio + '&api_key=' + api_key).then((response) =>{
      if(response.data.erro){
        alert('Aconteceu um erro na conexao');
        setFotos(null);
      }
      else{
        setFotos(response.data);
      }
    }).catch((err) =>{
      setFotos(null);
      alert('ERRO '+ err);
    });
    geraNumeroAleatorio();

    fotos.photos?.map((element) =>{
      setUrl([...url, element.img_src]);
      })
    }

  return (
    <>
    <div className='text-center bg-amber-100'>
        <h1 className='text-5xl pb-9 animate-pulse text-amber-900'>Gere suas Fotos de Marte</h1>
      </div>
    <div className="grid grid-cols-4 gap-4 items-center place-items-center bg-amber-100 ">
      <div className='items-center text-center w-36 rounded-full bg-amber-200'>
          <button onClick={geraFotos}>Gerar Fotos</button>
      </div>
      {url.map(function(data){
          return(
            <img
              className='grid grid-cols-4 gap-4 items-center w-96 rounded-full' 
              key={data} 
              src={data} 
              alt="Foto"/>
          )
      })}
    </div>
    </>
  )
}

export default App;

