import Link from "next/link";
const HomePage =() =>{
    return(
        <div>
            <h1 className="HomePage">Welcome To My Website</h1>
            <ul>
                <li>
                    <Link href="./Home">Home</Link>
                </li>
                <li>
                    <Link href="./about">About</Link>
                </li>
                <li>
                    <Link href="./contact">contact</Link>
                </li>
            </ul>
        </div>
    );
};
export default  HomePage;