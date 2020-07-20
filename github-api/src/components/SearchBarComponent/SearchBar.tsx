import React, {useState} from 'react';
import { Input, Row, Col, DatePicker, Button } from 'antd';
import './SearchBar.css';
import  {IUserInput} from '../../common/interfaces'



interface ISearchBarProps{
    SetUserInput: (a: IUserInput) => void;
}


function SearchBar(props : ISearchBarProps) {
    
const [SearchQuery, setSearchQuery] = useState<string | null>("");
const handleSearchQueryChange = (s: string | null) =>{
    setSearchQuery(s);          
}

const[[StartDate, EndDate], setDates] = useState<Date[]> (
    [new Date ('2014-08-12'), new Date('2020-05-12')],
);


const handleDateChange = (dates: string[]) => {
    setDates([new Date(dates[0]), new Date (dates[1])]);
    }


const handleSubmit = () => {
    if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
        let UserInput: IUserInput = {
            SearchQuery: SearchQuery,
            StartDate: StartDate,
            EndDate: EndDate
        }
        props.SetUserInput(UserInput);
    } else {
        // setHasFocus(true);
    }
}
// const [HasFocus, setHasFocus] = useState<boolean>(false);


    return (
        <div className="SearchBarContainer">
            <Row gutter={10}>
                <Col>
                    <Input
                        // onClick={() => setHasFocus(true)}
                        placeholder="Username"
                        onChange={e => handleSearchQueryChange(e.target.value)}
                        // onChange={value => console.log(value.target.value)}
                    />
                </Col>
                <Col>
                    <DatePicker.RangePicker
                        // defaultValue ={[moment('2014-08-12'), moment('2020-05-12')]}
                        // onChange={value => handleDateChange(value.target.toDate)}
                        onChange={(_, values) =>handleDateChange(values)}
                        // onChange={(value, strings) => console.log(strings)}
                    />
                </Col>
                <Col>
                    <Button type='primary' onClick={handleSubmit}>
                        Search
                    </Button>
                </Col>
             </Row>
        </div>
    )
}

export default SearchBar