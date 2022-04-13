import styled from 'styled-components';

const StyledTag = styled.div`
  .tag-container {
    min-width: 60%;
    display: flex;
    flex-wrap: wrap;
    height: 100px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 10px;
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid lightgrey;
    height: 25px;
    border-radius: 5px;
    margin: 2px 5px 2px 0px;
  }
`;

const TagsInput = ({ tag }) => {
  return (
    <StyledTag>
      <div className="tag-container">
        <div className="tag">{tag}</div>
      </div>
    </StyledTag>
  );
};
export default TagsInput;
