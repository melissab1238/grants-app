import GrantCardList from "./Grants";
import Header from "./Header";
import { grants } from "./data/grants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen light-blue-background p-6">
    <div className="p-6">
      <Header numSources={String(grants.length)}></Header>
    </div>
  
    <main className="flex-grow">
      <GrantCardList grants={grants}></GrantCardList>
    </main>
  </div>
  
  );
}
