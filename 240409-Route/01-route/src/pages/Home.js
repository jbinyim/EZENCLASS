import Editer from "../component/Editer";

const Home = () => {
  return (
    <div>
      <Editer
        initData={{
          date: new Date().getTime(),
          emoitionId: 1,
          content: "이전에 작성한 일기",
        }}
        onSubmit={() => {
          alert("작성 완료 버튼을 클릭");
        }}
      />
    </div>
  );
};

export default Home;
