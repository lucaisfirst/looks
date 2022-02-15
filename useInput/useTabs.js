export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
  };
};

const App = () => {
  const { currentItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section) => (
        <button>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
