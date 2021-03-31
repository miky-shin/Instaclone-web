import { logUserOut } from "../apollo";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  history.replace();
  return (
    <div>
      <h1>Welcom we did it!</h1>
      <button onClick={() => logUserOut() }>Log out</button>
    </div>
  );
}
export default Home;
