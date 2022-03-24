import { ThemproviderModed } from "./context/ThemproviderModed"; 
import GlobalStyle from './styles/GlobalStyle'; // GlobalStyle이 존재하면, 모든 요소에 해당 스타일이 적용된다.
import HeaderDiv from './components/HeaderDiv';


function App() {

  return (
    <div>
      <ThemproviderModed>
        <HeaderDiv/>
        <GlobalStyle/>
      </ThemproviderModed>
    </div>
  );
}

export default App;
