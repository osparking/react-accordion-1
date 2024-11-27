import Accordion from "./components/Accordion";

function App() {
  const data = [
    {
      id: 0,
      label: "이건 정말 멋진 라벨인데...",
      renderContent: () => (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non quam
          auctor, congue ipsum non, auctor ipsum. Sed non quam auctor, congue
          ipsum non, auctor ipsum. Sed non quam auctor, congue ipsum non, auctor
          ipsum.
        </p>
      ),
    },
    {
      id: 1,
      label: "더욱 환상적인 라벨이라고 본다",
      renderContent: () => (
        <ol>
          <li>목록의 첫째 항목</li>
          <li>목록의 둘째 항목</li>
          <li>목록의 셋째 항목</li>
        </ol>
      ),
    },
    {
      id: 2,
      label: "그런데 이 것은 형편없다.",
      renderContent: () => <button>난 버튼이걸랑</button>,
    },
  ];
  return (
    <div className="App">
      <main>
        <Accordion items={data} keepOthersOpen={true} />
      </main>
    </div>
  );
}

export default App;
