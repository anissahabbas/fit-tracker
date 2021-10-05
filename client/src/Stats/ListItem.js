import React from 'react';
import styled from 'styled-components';
import moment from 'moment'

const ListItem = ({ listItem }) => {
    console.log(moment(listItem.Date).format("MMMM Do YYYY, h:mm:ss a"))

    return (
        <Wrapper>
            <InfoWrapper>
                <Name>{listItem.name}</Name>
                <Date>{listItem.displayDate}</Date>
            </InfoWrapper>
            <TagWrapper>
                {listItem.tags &&
                    listItem.tags.map((tag, ind) => {
                        return <Tags
                            key={ind}>
                            {tag}</Tags>
                    })}
            </TagWrapper>
        </Wrapper>
    )
}

export default ListItem;

const InfoWrapper = styled.div`

`;

const Wrapper = styled.div`
    font-family: var(--primary-font);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
    padding-bottom: 15px;
    border-top: solid lightgrey 2px;
`;

const Name = styled.div`
    font-size: 20px;
`;

const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
    justify-content: flex-end;
`;

const Tags = styled.div`
    font-size: 15px;
    background-color: var(--tag-color-1);
    padding: 3px 10px;
    border-radius: 5px;
`;

const Date = styled.div`
    font-size: 12px;
    color: grey;
`;