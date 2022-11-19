import { Fragment, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CardComponent from './components/CardComponent'
import axios from 'axios';
import { Loading, Section, Skeleton } from './components/style';
import Header from './components/Header';

function findRepeated(arr) {
  const labelArr = arr.map(item => item.label)
  const toFindDuplicates = labelArr => labelArr.filter((item, index) => labelArr.indexOf(item) !== index)
  const duplicateElements = toFindDuplicates(labelArr);
  return duplicateElements;

}


const createArrayOfRepeated = (arr) =>{
  
  const repeatedLabels = findRepeated(arr);
  let repeated = []
  for (let i = 0; i < repeatedLabels.length; i++) {
    repeated.push(...arr.filter(item => item.label === repeatedLabels[i]))
  }
  return repeated;
}

function App() {
  const [songData, setSongData] = useState(null);
  const [viewSelected, setViewSelected] = useState("local")

  const getData = () => {
    axios.get('http://localhost:3020/playlist')
    .then(res => setSongData(res.data.data))
    .catch(err => console.log(err))
  }

  useEffect( () => {
    getData();
  }, [viewSelected])

  const handleViewSelected = (view) => {
    switch(view) {
      case "repeatedArtists":

        const repeated = createArrayOfRepeated(songData);

        return (
          <Fragment>
            <Header {...headerProps}/>
            <Section>
              {repeated.map(song => <CardComponent key={song.id} song={song}/>)}
            </Section>
          </Fragment>
        );
      case 'favorites':

        const favorites = songData.filter(song => song.isLiked);
        
        return (
          <Fragment>
            <Header {...headerProps}/>
            <Section>
              {favorites.map(song => <CardComponent key={song.id} song={song}/>)}
            </Section>
          </Fragment>
        );
      case 'noFavorites':

        const noFavorites = songData.filter(song => !song.isLiked);
        
        return (
          <Fragment>
            <Header {...headerProps}/>
            <Section>
              {noFavorites.map(song => <CardComponent key={song.id} song={song}/>)}
            </Section>
          </Fragment>
        );
        break;
      default:
      case 'local':
        return (songData ? (
          <Fragment>
            <Header {...headerProps}/>
            <Section>
              {songData.map(song => <CardComponent key={song.id} song={song}/>)}
            </Section>
          </Fragment>
        ): (
          <Skeleton>
            <Loading/>
          </Skeleton>
        ))
    }
  }

  const headerProps = {
    setViewSelected
  }


  const memo = useMemo(() => {
    return handleViewSelected(viewSelected)

  },[songData, viewSelected])

  
  return memo
}

export default App
