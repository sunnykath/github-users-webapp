import React from 'react';
import {Card} from 'antd';
import Meta from 'antd/lib/card/Meta';
import './UserCard.css'


interface IMediaCardProps {
    ImageUrl: string | undefined;
    UserName : string | undefined;
    Link : string | undefined;
}


function UserCard(props: IMediaCardProps) {
    return (
        <div>
            <a href = {props.Link} target="_blank" rel="noopener noreferrer">
                <Card hoverable={true}
                    className="UserCardContainer"
                    cover = {<img alt="user-icon" src={props.ImageUrl} className='UserCoverImage' /> }
                >
                    <Meta
                        title = {props.UserName}
                    />                
                </Card>
            </a>
        </div>
    )
}



export default UserCard