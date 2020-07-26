import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import UserCard from '../UserCardComponent/UserCard'

import './ResultsGrid.css';


interface IMediaGridProps {
    SearchQuery: (string | null);
    StartDate: (Date | null);
    EndDate: (Date | null);
}
function ResultsGrid(props: IMediaGridProps) {

    const [Users, setUsers] = useState([]);
    const [TotalResults, setTotalResults] = useState<number>();


    useEffect(() => {
        fetch('https://api.github.com/search/users?q=' + props.SearchQuery + '+created:' + props.StartDate?.toISOString() + '..' + props.EndDate?.toISOString()+'&per_page=100')
            .then(response => response.json())
            .then(response => {
                setUsers(response.items)
                setTotalResults(response.total_count)
            })
            .catch(() => console.log("it didn't work"),
    
            );

    }, [props.SearchQuery, props.EndDate, props.StartDate]);


    var Cards: JSX.Element[] = [];
    Users.forEach((el: any, i: number) => {
        if (!el) {
            return;
        }
        Cards.push(
            <UserCard ImageUrl={el.avatar_url} UserName={el.login} Link={el.html_url} />
        )
    })

    var showingResults;
    if (TotalResults && TotalResults > 100) {
        showingResults = 100;
    } else {
        showingResults = TotalResults;
    }

    return (
        <div className='resultsGrid'>
            Showing results {showingResults} of {TotalResults}
             <List
                grid={{ gutter: 16, column: 5 }}
                dataSource={Cards}
                renderItem={item => (
                <List.Item>
                    {item}
                </List.Item>
                )}
            />
        </div>
    )
}


export default ResultsGrid