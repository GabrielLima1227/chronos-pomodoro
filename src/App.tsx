import { Heading } from "./components/Heading.tsx";
import "./styles/theme.css";
import "./styles/global.css";

export function App() {
    console.log('Test App');

    return (
        <>
            <Heading/>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
            consectetur dolores aspernatur aliquam aliquid, numquam quidem fugit
            mollitia, ut dolorem delectus et nulla recusandae, nihil modi commodi!
            Sed, optio perferendis!
            </p>
        </>
    );
}
