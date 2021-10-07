import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = ({ listItem }) => {
    return (
        <>
            <Wrapper to={`/doingWorkout/${listItem._id}`}>
                <NameWrapper>
                    <Name>{listItem.name}</Name>
                </NameWrapper>
                {listItem.tags &&
                    <TagWrapper>
                        {listItem.tags.map((tag, ind) => {
                            return <Tag
                                key={ind}>
                                {tag}
                            </Tag>
                        })}
                    </TagWrapper>}
            </Wrapper>
            <Notes>{listItem.notes}</Notes>
        </>
    )
};

export default ListItem;

const Wrapper = styled(Link)`
    display: flex;
    color: inherit;
    text-decoration: none;
    font-family: var(--primary-font);
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    margin: 0 20px;
`;

const Notes = styled.div`
    font-family: var(--primary-font);
    font-size: 12px;
    margin-top: -15px;
    margin: -15px 20px 0px 20px;
`;

const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    font-size: 20px;
`;


const Tag = styled.div`
    font-size: 15px;
    background-color: var(--tag-color-1);
    padding: 3px 10px;
    border-radius: 5px;
`;


const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px 10px;
    justify-content: flex-end;
`;
