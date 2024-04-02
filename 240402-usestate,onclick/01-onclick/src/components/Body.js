import "./Body.css";

export const Body = ({ name, location, favorList }) => {
  return (
    <div>
      <h1>body</h1>
      <h2>
        {name}은 {location}에 살고 있습니다.
        <br />
        {name}은 {favorList.length}개의 최애 음식이 있습니다.
        <br />
        {favorList[0]}, {favorList[1]} ,{favorList[2]}를 매우 사랑합니다.
      </h2>
    </div>
  );
};

Body.defaultProps = {
  favorList: ["라면", "순대", "족발"],
};

export default Body;
