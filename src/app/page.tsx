import GrantCardList from "./Grants";
import Header from "./Header";
import { grants } from "./data/grants";

export default function Home() {
  return (
    <div className="flex items-start justify-center flex-col p-6 min-h-screen light-blue-background">
      <div className="center">
        <Header numSources={String(grants.length)}></Header>
      </div>

      <main>
        <GrantCardList grants={grants}></GrantCardList>
      </main>
    </div>
  );
}
