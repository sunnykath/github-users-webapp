import React, {useState} from 'react';
import { IUserInput } from "./common/interfaces";
import SearchBar from './components/SearchBarComponent/SearchBar';
import ResultsGrid from './components/ResultsGridComponent/ResultsGrid';
import {Row, Col} from 'antd';
import './App.css';

function App() {

  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "example",
    StartDate: new Date('2009-01-01'),
    EndDate: new Date('2019-03-23'),
  });

  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }

  // console.log(UserInput)


  return (
    <div>
      <div className='navbar'>
        Search a GitHub User
      </div>
      <Row gutter={10} className='row'>
        <Col span={4} offset={8}>
            User
        </Col>
        <Col span={4}> 
            Joined in
        </Col>
      </Row>
      <SearchBar SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
      <ResultsGrid SearchQuery={UserInput.SearchQuery} StartDate={UserInput.StartDate} EndDate={UserInput.EndDate}/>
    </div>
  );
}

export default App;
